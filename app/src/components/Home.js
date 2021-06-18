import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import List from "./List";

function Home() {
  const [name, setName] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/crew").then((res) => {
      const crew = res.data;
      setCrew(crew);
    });
  }, []);

  const handleCrewNameChange = (e) => {
    setName(e.target.value);
  };

  const addCrewMember = (e) => {
    try {
      e.preventDefault();
      axios
        .post("http://localhost:5000/addCrew", { member: name })
        .then(setCrew((crew) => [...crew, { name: name }]));
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
      <main>
        {/* New member form  */}
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form" onSubmit={(e) => addCrewMember(e)}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nom de l'Argonaute"
            onChange={(e) => handleCrewNameChange(e)}
          />
          <button type="submit">Envoyer</button>
          <p>Salut</p>
        </form>

        <h2>Membres de l'équipage</h2>
        <List crew={crew} />
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default Home;
