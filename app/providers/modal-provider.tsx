"use client";

import { useEffect, useState } from "react";

import NewStoreModal from "@/components/modals/new-store-modal";
import Modal from "@/components/ui/modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewStoreModal />
    </>
  );
};

export default ModalProvider;
