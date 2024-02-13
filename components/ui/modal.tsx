"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

interface ModalProps {
  title: string;
  description?: string;
  body: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  body,
  onClose,
  isOpen,
}) => {
  const onOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{body}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
