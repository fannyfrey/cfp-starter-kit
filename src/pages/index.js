import React, { useContext, useState } from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "@components/base/Layout";
import Input from "@components/base/Input";
import Button from "@components/base/Button";

import { GlobalContext } from "@context/global-context";

const IndexPage = () => {
  const { context, setContext } = useContext(GlobalContext);
  const [inputState, setInputState] = useState({
    name: "",
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
        <StaticImage
          src="../../static/images/hello-world.png"
          alt=""
        ></StaticImage>

        <p className="home-input__header">Name</p>
        <Input id="name" className="home-input" onChange={handleInputChange} />

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
