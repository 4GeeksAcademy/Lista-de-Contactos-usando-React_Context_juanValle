
export async function getContacts() {
  try {
    const resp = await fetch('https://playground.4geeks.com/contact/agendas/cangrejo');
    const data = await resp.json();
    return data.contacts || [];
  } catch (error) {
    console.error("Error cargando contactos", error);
    return [];
  }
}


//POST- Debe recibir un objeto con los datos del nuevo contacto ({name, phone, email, address})
export async function postContacts(dataToSend) {
    try {
        const resp = await fetch(
            "https://playground.4geeks.com/contact/agendas/cangrejo/contacts",
            {
                method: 'POST', // Dice a la API que quiere crear algo nuevo
                body: JSON.stringify(dataToSend), // Convierte el objeto JS a texto JSON
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        );
        const data = await resp.json(); // Lee la respuesta
        return data; // Devuelve lo que responde la API (el nuevo contacto)
    } catch (error) {
        console.error("No se puede añadir contacto", error);
        return null; // Mejor retornar null si hay error
    }
}

//PUT

export async function putContact(contactId, dataToSend) {
    try {
        const resp = await fetch(
            `https://playground.4geeks.com/contact/agendas/cangrejo/contacts/${contactId}`,
            {
                method: 'PUT', // Dices a la API que quieres crear algo nuevo
                body: JSON.stringify(dataToSend), // Convierte el objeto JS a texto JSON
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        );
        const data = await resp.json(); // Lee la respuesta
        return data; // Devuelve el contactoi actualizado
    } catch (error) {
        console.error("No se puede editar el contacto", error);
        return null; // Mejor retornar null si hay error
    }
}

export async function deleteContact(contactId) {
  try {
    const resp = await fetch(
      `https://playground.4geeks.com/contact/agendas/cangrejo/contacts/${contactId}`,
      {
        method: "DELETE",
        headers: {
          'accept': 'application/json',
        },
      }
    );
    // Puede que la API retorne solo un mensaje simple
    return resp.ok;
  } catch (error) {
    console.error("No se pudo eliminar el contacto", error);
    return false;
  }
}


