import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import List from "./List";
import logo from "../images/logo-wild-code-school.png";
import boatImage from "../images/boat.png";

function Home() {
  const [name, setName] = useState("");
  const [crew, setCrew] = useState([]);
  const [formInputError, setFormInputError] = useState("");
  const apiURL = process.env.REACT_APP_API_URL;

  /* Access to the database */
  useEffect(() => {
    try {
      axios.get(`${apiURL}/crew`).then((res) => {
        const crew = res.data;
        setCrew(crew);
      });
    } catch (e) {
      console.log(e);
    }
  }, [apiURL]);

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
          .post(`${apiURL}/addCrew`, { member: name })
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
      axios.delete(`${apiURL}/deleteCrew`).then(setCrew([]));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {/* Header section */}
      <header>
        <img id="logo" src={logo} alt="logo-wild-code-school" />
        <div id="title">
          <img className="boat" src={boatImage} alt="sailing-boat" />
          <h1>Les Argonautes</h1>
          <img className="boat" src={boatImage} alt="sailing-boat" />
        </div>
      </header>

      {/* Main section */}
      <main>
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
          <button id="enroll" type="submit">
            Recruter
          </button>

          <p className="error-message">{formInputError}</p>
        </form>

        {crew.length ? (
          <div>
            <h2>Membres de l'équipage</h2>
            <button className="delete" onClick={deleteCrew}>
              Renvoyer l'équipage
            </button>
          </div>
        ) : null}

        <List crew={crew} />
      </main>

      <footer>
        <p>
          Réalisé par <a href="https://www.florian-assante.com/">Raynnon</a> en
          Anthestérion de l'an 515 avant JC
        </p>
      </footer>
    </div>
  );
}

export default Home;
