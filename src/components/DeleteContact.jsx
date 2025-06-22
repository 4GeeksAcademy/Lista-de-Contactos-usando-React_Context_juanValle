import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import { deleteContact } from "../api/contactsApi";
import { FaTrash } from "react-icons/fa";
import RetroToast from "./RetroToast";
import "./deletecontact.css";

const DeleteContact = ({ contact, onDeleted }) => {
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState(null);

  async function handleDelete() {
    const deleted = await deleteContact(contact.id);
    if (deleted) {
      setToast("Contacto eliminado");
      setShow(false);
      setTimeout(() => {
        setToast(null);
        if (onDeleted) onDeleted();
      }, 1400);
    } else {
      setToast("No se pudo eliminar el contacto");
    }
  }

  return (
    <>
      {toast && <RetroToast message={toast} onClose={() => setToast(null)} />}
      <button className="retro-delete-btn btn-sm" onClick={() => setShow(true)} title="Eliminar">
        <FaTrash />
      </button>
      {show && (
        <DeleteModal
          contact={contact}
          onClose={() => setShow(false)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

export default DeleteContact;
