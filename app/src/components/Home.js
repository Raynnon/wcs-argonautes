import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import List from "./List";

function Home() {
  const [name, setName] = useState("");
  const [crew, setCrew] = useState([]);
  const [formInputError, setFormInputError] = useState("");

  /* Access to the database on first loading */
  useEffect(() => {
    try {
      axios.get("http://localhost:5000/crew").then((res) => {
        const crew = res.data;
        setCrew(crew);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  /* Changing name */
  const handleCrewNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (name.length < 2) {
      setFormInputError("Le nom doit contenir au moins 2 caractères");
    } else if (name.length > 20 || name.match(/[0-9]/g)) {
      setFormInputError(
        "Le nom peut contenir entre 2 et 20 caractères et ne peut pas contenir de chiffres."
      );
    } else {
      setFormInputError("");
    }
  }, [name]);

  /* Sending form */
  const addCrewMember = (e) => {
    e.preventDefault();
    if (!formInputError) {
      try {
        axios
          .post("http://localhost:5000/addCrew", { member: name })
          .then(setCrew((crew) => [...crew, { name: name }]))
          .then(setName(""));
      } catch (e) {
        console.log(e);
      }
    }
  };

  /* Delete crew */
  const deleteCrew = () => {
    try {
      axios.delete("http://localhost:5000/deleteCrew").then(setCrew([]));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {/* Header section */}
      <header>
        <h1>
          <img
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
          Les Argonautes
        </h1>
      </header>

      {/* Main section */}
      <main style={{ minHeight: "50%" }}>
        {/* New member form  */}
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form" onSubmit={(e) => addCrewMember(e)}>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="Nom de l'Argonaute"
            onChange={(e) => handleCrewNameChange(e)}
          />
          <button type="submit">Recruter</button>

          <p style={{ color: "red" }}>{formInputError}</p>
        </form>

        {crew.length ? (
          <div>
            <h2>Membres de l'équipage</h2>
            <button type="submit" onClick={deleteCrew}>
              Renvoyer l'équipage
            </button>
          </div>
        ) : null}

        <List crew={crew} />
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default Home;
