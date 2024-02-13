"use client";

import React from "react";

import Modal from "../ui/modal";
import useStoreModal from "@/app/hooks/useStoreModal";

const NewStoreModal = () => {
  const storeModal = useStoreModal();

  let body = <div>BODY</div>;
  return (
    <Modal
      title="Store Modal"
      description="Create a new store"
      body={body}
      onClose={() => storeModal.onClose()}
      isOpen={storeModal.isOpen}
    />
  );
};

export default NewStoreModal;
