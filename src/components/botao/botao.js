import * as React from "react";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import BandeiraAmericana from "../../image/bandeira-americana.svg";
import GrupoMenu from "../menu/menu";
import "./botao.css";

const GrupoBotao = () => {
  const buttonStyle = {
    color: "white",
    textTransform: "initial",
    marginTop: "5px",
    fontWeight: "bold",
    background: "transparent",
  };

  const [hoverButton1, setHoverButton1] = React.useState(false);
  const [hoverButton2, setHoverButton2] = React.useState(false);

  const handleMouseOver = () => {
    setHoverButton1(true);
    // setHoverButton2(true);
  };

  const handleMouseOut = () => {
    setHoverButton1(false);
    setHoverButton2(false);
  };

  return (
    <Stack>
      <Stack justifyContent={"center"} spacing={4} direction="row">
        <Button
          variant="text"
          size="large"
          style={buttonStyle}
          disableRipple={true}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          class={
            hoverButton1 ? "custom-button-underline" : "custom-button-Topo"
          }
        >
          A empresa
        </Button>
        <Button
          variant="text"
          size="large"
          style={buttonStyle}
          disableRipple={true}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          class={
            hoverButton2 ? "custom-button-underline2" : "custom-button-Topo2"
          }
        >
          Certificações e prêmios
        </Button>
        <Button
          variant="text"
          size="large"
          style={buttonStyle}
          disableRipple={true}
        >
          Tecnologias e processos
        </Button>
        <Button
          variant="text"
          size="large"
          style={buttonStyle}
          disableRipple={true}
        >
          Meio ambiente
        </Button>
        <GrupoMenu />
        <Button
          variant="text"
          size="large"
          style={buttonStyle}
          disableRipple={true}
        >
          Notícias
        </Button>
        <Button
          startIcon={<img src={BandeiraAmericana} width="18px" height="30px" />}
          variant="text"
          size="large"
          style={buttonStyle}
          disableRipple={true}
        ></Button>
      </Stack>
    </Stack>
  );
};

export default GrupoBotao;
