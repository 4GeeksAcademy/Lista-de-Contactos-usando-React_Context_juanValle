import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getContacts } from "../api/contactsApi";
import DeleteContact from "./DeleteContact";
import { FaEdit } from "react-icons/fa";
import "./contactlist.css"; 

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch de contactos
  const fetchData = async () => {
    setLoading(true);
    const contactsFromApi = await getContacts();
    setContacts(contactsFromApi);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p className="retro-loading">Cargando contactos...</p>;

  return (
    <div className="retro-container mt-4">
      <div className="retro-card p-3">
        {contacts.length === 0 && (
          <p className="retro-no-contacts">No hay contactos para mostrar.</p>
        )}
        {contacts.map(contact => (
          <div
            key={contact.id}
            className="retro-contact-row border-bottom py-3"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} 
          >
            {/* AVATAR AUTOMÁTICO */}
            <img
              src={
                contact.avatar ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&background=b4e0fa&color=262563&font-size=0.35`
              }
              alt={contact.name}
              className="retro-avatar"
              width={70}
              height={70}
              style={{ marginRight: "20px" }}
            />
            {/* DATOS DEL CONTACTO */}
            <div style={{ flexGrow: 1 }}>
              <h5 className="retro-name">{contact.name}</h5>
              <div className="retro-info">
                <span>{contact.address}</span>
                <span>{contact.phone}</span>
                <span>{contact.email}</span>
              </div>
            </div>
            {/* ACCIONES */}
            <div>
              <Link to={`/contact/${contact.id}`}>
                <button className="retro-icon-btn me-2" title="Editar">
                  <FaEdit />
                </button>
              </Link>
              <DeleteContact contact={contact} onDeleted={fetchData} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
