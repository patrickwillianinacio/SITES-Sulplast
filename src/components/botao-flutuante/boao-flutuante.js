import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/react-fontawesome";
import "./botao-flutuante.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      color="transparent"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const BotaoFlutuante = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const tabPanelStyle = {
    color: "transparent",
    textTransform: "initial",
    marginTop: "200px",
    fontWeight: "normal",
  };

  const tabPanelStyle1 = {
    color: "transparent",
    textTransform: "initial",
    marginTop: "-20px",
    fontWeight: "normal",
    height: "400px",
  };

  return (
    <Box
      sx={{
        width: 600,
        height: 300,
        position: "relative",
        top: 150,
        left: 250,
      }}
    >
      <AppBar position="static" color="transparent" class="app-bar">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="green"
          textColor="white"
          aria-label="wrapped label tabs example"
        >
          <Tab
            sx={{
              color: "white",
              textTransform: "initial",
              fontStyle: "bold",
              fontSize: "18px",
            }}
            label="Certificações"
            {...a11yProps(0)}
          ></Tab>
          <Tab
            sx={{
              bgcolor: "transparent",
              color: "white",
              textTransform: "initial",
              fontStyle: "bold",
              fontSize: "18px",
            }}
            label="Prêmios"
            {...a11yProps(1)}
          ></Tab>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          style={tabPanelStyle}
        >
          <Typography variant="h1" class="overlayTypography5">
            Sempre em busca do mais alto nível de qualidade para seus
          </Typography>
          <Typography variant="h1" class="overlayTypography6">
            produtos e processos, a
          </Typography>
          <Typography variant="h1" class="overlayTypography7">
            Sulplast
          </Typography>
          <Typography variant="h1" class="overlayTypography8">
            conquistou e mantém
          </Typography>
          <Typography variant="h1" class="overlayTypography9">
            renomadas certificações nacionais e internacionais.
          </Typography>
          <div>
            <Button class="custom-button-Certificacoes">Nossas</Button>
          </div>
          <div>
            <Button class="custom-button-Certificacoes2">certificações</Button>
          </div>
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          style={tabPanelStyle1}
        >
          <Typography variant="h1" class="overlayTypography10">
            Ao longo da sua jornada, a
          </Typography>
          <Typography variant="h1" class="overlayTypography11">
            Sulplast
          </Typography>
          <Typography variant="h1" class="overlayTypography12">
            recebeu de seus clientes
          </Typography>
          <Typography variant="h1" class="overlayTypography13">
            premiações que comprovam sua qualidade em diversos
          </Typography>
          <Typography variant="h1" class="overlayTypography14">
            aspectos.
          </Typography>
          <div>
            <Button class="custom-button-Certificacoes3">Nossos prêmios</Button>
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default BotaoFlutuante;
