import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { putContact, getContacts } from "../api/contactsApi";
import RetroToast from "./RetroToast"; // Importa el toast
import "./editcontact.css";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null); // Estado para toast

  useEffect(() => {
    async function loadContact() {
      try {
        const contacts = await getContacts();
        const contact = contacts.find(c => c.id === parseInt(id));
        if (contact) {
          setForm({
            name: contact.name,
            phone: contact.phone,
            email: contact.email,
            address: contact.address
          });
        }
      } catch (error) {
        setToast("No se pudo cargar el contacto");
        console.error(error);
      }
      setLoading(false);
    }
    loadContact();
  }, [id]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await putContact(id, form);
      if (result && result.id) {
        setToast("Contacto editado con éxito");
        setTimeout(() => navigate("/"), 1400); // Navega después de 1.4s
      } else {
        setToast("Error al editar el contacto");
      }
    } catch (error) {
      setToast("Ocurrió un error inesperado");
      console.error(error);
    }
  }

  if (loading) return <p>Cargando contacto...</p>;

  return (
    <>
      {toast && <RetroToast message={toast} onClose={() => setToast(null)} />}
      <form onSubmit={handleSubmit} className="retro-form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="address" value={form.address} onChange={handleChange} placeholder="Dirección" required />
        <button type="submit">Guardar cambios</button>
      </form>
    </>
  );
};

export default EditContact;
