import React from "react";
import { Link } from "react-router-dom";
import ContactList from "../components/ContactList.jsx";

export const Home = () => {
  return (
    <div className="text-center mt-5"> 
      <h1>Your best contacts</h1>
      <ContactList />
      <p>
        <Link to="/contact/new">
          <button className="retro-btn">New Contact</button>
        </Link>
      </p>
    </div>
  );
};
