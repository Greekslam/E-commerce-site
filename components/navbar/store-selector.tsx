"use client";

import { useState } from "react";
import { Store } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { Check, ChevronsUpDown, Plus, StoreIcon } from "lucide-react";

import useStoreModal from "@/app/hooks/useStoreModal";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSelectorProps extends PopoverTriggerProps {
  items: Store[];
}

const StoreSelector = ({ className, items = [] }: StoreSelectorProps) => {
  const [open, setOpen] = useState(false);
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const selectedItem = items.find((item) => item.id === params.storeId);

  const onSelectItem = (store: { label: string; value: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={false}>
        <Button
          size="sm"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="select stores"
          className={cn("w-[200px] justify-between", className)}
        >
          {params.storeId ? selectedItem?.name : "Select store"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="search stores" />
            <CommandEmpty>No store found.</CommandEmpty>
            <CommandGroup heading="Stores">
              {formattedItems.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={() => onSelectItem(item)}
                  className="text-sm"
                >
                  <StoreIcon className="mr-2 h-4 w-4" />
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      item.value === params.storeId
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  console.log("I was clicked ooo");
                  setOpen(false);
                  storeModal.onOpen();
                }}
              >
                <Plus className='"mr-2 h-4 w-4"' />
                Create new store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default StoreSelector;
