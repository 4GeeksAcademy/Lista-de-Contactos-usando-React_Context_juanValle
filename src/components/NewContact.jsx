import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postContacts } from "../api/contactsApi";
import "./newcontact.css";
import { Link } from "react-router-dom";
import RetroToast from "./RetroToast";

const NewContact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const [toastMsg, setToastMsg] = useState(""); // estado para el toast
  const navigate = useNavigate();

  // aqui se maneja los cambios en los campos del formulario
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  // aqui seManeja el envío del formulario
  async function handleSubmit(e) {
    e.preventDefault();
    const result = await postContacts(form); // Llama la función POST
    if (result && result.id) {
      setToastMsg("Contacto creado con éxito");
      setTimeout(() => {
        navigate("/");
      }, 1600); // espera a que se vea el toast antes de volver
    } else {
      setToastMsg("Error al crear el contacto");
    }
  }

  return (
    <>
      <RetroToast message={toastMsg} onClose={() => setToastMsg("")} />
      <form onSubmit={handleSubmit} className="retro-form">
        {/* AVATAR AUTOMÁTICO */}
        <div className="avatar-preview-wrapper">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(form.name || "?")}&background=b4e0fa&color=262563&font-size=0.35`}
            alt="Avatar preview"
            className="retro-avatar"
            width={70}
            height={70}
          />
        </div>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required/>
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required/>
        <input name="address" value={form.address} onChange={handleChange} placeholder="Dirección" required/>
        <button type="submit">Save</button>
        <div style={{ marginTop: "20px" }}>
          <Link to="/" className="retro-back-link">
            &larr; Back to contact list
          </Link>
        </div>
      </form>
    </>
  );
};

export default NewContact;
