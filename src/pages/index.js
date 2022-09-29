import React, { useContext, useState } from "react";

import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";

import { GlobalContext } from "../context/global-context";

const IndexPage = () => {
  const { setContext } = useContext(GlobalContext);
  const [inputState, setInputState] = useState({
    name: "",
    nickname: "",
    mission: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    inputState[id] = value;
    setInputState({ ...inputState });
  };

  const handleButtonClick = () => {
    setContext({ ...inputState });
  };

  return (
    <Layout>
      <div className="home-container">
        <img src="/images/hello-world.png" width="100%" alt="" />

        <p className="home-input__header">Name</p>
        <Input id="name" className="home-input" onChange={handleInputChange} />

        <p className="home-input__header">Nickname</p>
        <Input id="nickname" className="home-input" onChange={handleInputChange} />

        <p className="home-input__header">Mission</p>
        <Input
          id="mission"
          className="home-input"
          onChange={handleInputChange}
        />

        <Button
          className="home-button"
          toPage="result"
          onClick={handleButtonClick}
        >
          Bring Value to Another Page
        </Button>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>CFP Starter Kit</title>;
