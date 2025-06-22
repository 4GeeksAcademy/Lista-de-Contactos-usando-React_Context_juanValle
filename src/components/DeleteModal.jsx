import React from "react";
import { FaTrash } from "react-icons/fa";
import "./deletemodal.css"; 

const DeleteModal = ({ contact, onClose, onConfirm }) => (
  <div className="retro-modal-overlay">
    {/* Overlay retro */}
    <div className="retro-modal">
      <h5 className="retro-modal-title">Eliminación de contacto</h5>
      <div className="retro-modal-body">
        ¿Está seguro que desea eliminar al contacto: <br />
        <strong>{contact.id} - {contact.name}</strong>?
      </div>
      <div className="retro-modal-buttons">
        {/* Botón NO */}
        <button className="retro-icon-btn" onClick={onClose}>No</button>
        {/* Botón SÍ, solo icono papelera */}
        <button className="retro-delete-btn" onClick={onConfirm} title="Eliminar">
          <FaTrash />
        </button>
      </div>
    </div>
  </div>
);

export default DeleteModal;
