"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Modal from "../ui/modal";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleDeleteStore = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/stores/${params.storeId}`);
      toast.success("Store deleted successfully");
      window.location.assign("/");
    } catch (error: any) {
      toast.error("something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal title="Delete Store" onClose={onClose} isOpen={isOpen}>
      <div>
        <div className="py-5">
          Confirm you want to delete this store, action is not reversible.
        </div>
        <div className="space-y-2 pb-4">
          <div className="w-full flex justify-end items-center space-x-3">
            <Button disabled={loading} variant={"outline"} onClick={onClose}>
              Cancel
            </Button>
            <Button disabled={loading} onClick={handleDeleteStore}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AlertModal;
