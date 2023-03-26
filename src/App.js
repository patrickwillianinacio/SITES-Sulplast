import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GrupoBotao from "./components/botao/botao";
import Logo from "../src/image/logo.png";
import CallIcon from "@mui/icons-material/Call";
import { Button } from "@mui/material";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ImagemInferior from "./image/background.jpg";
import LogoRodape from "./image/logo-rodape.png";
import DunsRegistro from "./image/duns.png";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Carousel from "react-material-ui-carousel";
import ImagemCarroselInicio from "./image/carrousel/40-anos-background.jpg";
import ImagemCarroselTermoplastico from "./image/carrousel/40-anos.png";
import ImagemCarrosel3 from "./image/carrousel/background-topo.jpg";
import ImagemCarrosel4 from "./image/carrousel/termo-imagem.png";
import ImagemCarrouselListCheck from "./image/carrousel/list-check.png";
import ImagemCarrouselFibra from "./image/carrousel/fibra-imagem.png";
import ImagemCarrouselPintura from "./image/carrousel/pintura-imagem.png";
import ImagemSulplastCirculo from "./image/sulplast-circulo.png";
import ImagemFord from "./image/certificados/q1.png";
import ImagemVda from "./image/certificados/selo-vda-63.png";
import ImagemIso9001 from "./image/certificados/selo-iso9001.png";
import ImagemIso14001 from "./image/certificados/selo-iso14001.png";
import ImagemIatf16949 from "./image/certificados/selo-iatf16949.png";
import ImagemSetorAutomotivo from "./image/homepage/setor-automotivo-3.jpg";
import ImagemSetorAgricola from "./image/homepage/setor-agricola.jpg";
import ImagemMineracao from "./image/homepage/setor-civil.jpg";
import ImagemSetores from "./image/homepage/diversos-setores-da-economia.jpg";
import ImagemBackground from "./image/homepage/background-split-image.jpg";
import BotaoFlutuante from "./components/botao-flutuante/boao-flutuante";

import "./App.css";

const useStyles = makeStyles({
  root: {
    Width: "100%",
    margin: "auto",
  },
  image: {
    width: "100%",
    height: "550",
    objectFit: "cover",
  },
});

function MyCarousel(props) {
  const classes = useStyles();
  const { images } = props;

  return (
    <Carousel
      className={classes.root}
      animation="slide"
      navButtonsAlwaysVisible={true}
      // autoPlay={true}
      interval={1000000}
    >
      <div className={classes.divContainer}>
        <img src={ImagemCarroselInicio} width="1890px" height="465px" />
        <img
          class="overlayImagem1Carrousel"
          src={ImagemCarroselTermoplastico}
          width="293px"
          height="256px"
        />
        <div class="overlayCarrouselTexto1">
          <Typography variant="h1" class="overlayTypographyCarrousel1">
            Sulplast 40 anos
          </Typography>
        </div>
        <div class="overlayCarrouselTexto2">
          <Typography variant="h1" class="overlayTypographyCarrousel2">
            Em 16 de agosto de 2018 comemoramos nossos 40 anos. Parabéns a todos
            os colaboradores, clientes e amigos que ao longo destes anos, sempre
            apoiaram e trabalharam com dedicação, honestidade e competência,
            construindo uma história de muito sucesso!
          </Typography>
        </div>
      </div>
      <div className={classes.divContainer}>
        <img src={ImagemCarrosel3} width="1858px" height="465px" />
        <img
          class="overlayImagem2Carrousel"
          src={ImagemCarrosel4}
          width="600px"
          height="256px"
        />
        <div class="overlayCarrouselTexto3">
          <Typography variant="h1" class="overlayTypographyCarrousel3">
            Termoplástico
          </Typography>
          <div class="overlayCarrouselTexto4">
            <Typography variant="h1" class="overlayTypographyCarrousel4">
              Fabricação de produtos em diversos materiais como
            </Typography>
          </div>
          <Typography variant="h1" class="overlayCarrouselTexto5">
            ABS, PSAI, PP, PE e Noryl
          </Typography>
        </div>
        <div class="overlayCarousel">
          <div class="circuloExterno">
            <Typography variant="h1" class="overlayTypographyCirculoTexto">
              Extrusão de chapas
            </Typography>
          </div>
          <div class="circuloInterno"></div>
          <div class="circuloExterno1">
            <Typography variant="h1" class="overlayTypographyCirculoTexto1">
              Vaccum Forming
            </Typography>
          </div>
          <div class="circuloInterno1"></div>
          <div class="circuloExterno2">
            <Typography variant="h1" class="overlayTypographyCirculoTexto2">
              Rotomoldagem
            </Typography>
          </div>
          <div class="circuloInterno2"></div>
          <div class="circuloExterno3">
            <Typography variant="h1" class="overlayTypographyCirculoTexto3">
              Injeção
            </Typography>
          </div>
          <div class="circuloInterno3"></div>
          <img
            src={ImagemCarrouselListCheck}
            class="overlayImagemListCheckCarrousel"
            width="45px"
            height="45px"
          />
          <img
            src={ImagemCarrouselListCheck}
            class="overlayImagemListCheckCarrousel1"
            width="45px"
            height="45px"
          />
          <img
            src={ImagemCarrouselListCheck}
            class="overlayImagemListCheckCarrousel2"
            width="45px"
            height="45px"
          />
          <img
            src={ImagemCarrouselListCheck}
            class="overlayImagemListCheckCarrousel3"
            width="45px"
            height="45px"
          />
        </div>
      </div>
      <div className={classes.divContainer}>
        <img src={ImagemCarrosel3} width="1858px" height="465px" />
        <img
          class="overlayImagem2Carrousel"
          src={ImagemCarrouselFibra}
          width="600px"
          height="256px"
        />
        <div class="overlayCarrouselTexto3">
          <Typography variant="h1" class="overlayTypographyCarrousel3">
            Fibra de vidro
          </Typography>
          <div class="overlayCarrouselTexto4">
            <Typography variant="h1" class="overlayTypographyCarrousel4">
              Contamos com uma ampla infra-estrutura para fabricação de produtos
              em
            </Typography>
          </div>
          <Typography variant="h1" class="overlayCarrouselTexto6">
            Fibra de vidro
          </Typography>
        </div>
        <div class="overlayCarousel">
          <div class="circuloExterno4">
            <Typography variant="h1" class="overlayTypographyCirculoTexto4">
              Hand Lay Up
            </Typography>
          </div>
          <div class="circuloInterno4"></div>
          <div class="circuloExterno5">
            <Typography variant="h1" class="overlayTypographyCirculoTexto5">
              RTM Light
            </Typography>
          </div>
          <div class="circuloInterno5"></div>
          <div class="circuloExterno6">
            <Typography variant="h1" class="overlayTypographyCirculoTexto6">
              RTM Skin
            </Typography>
          </div>
          <div class="circuloInterno6"></div>
          <img
            src={ImagemCarrouselListCheck}
            class="overlayImagemListCheckCarrousel4"
            width="45px"
            height="45px"
          />
          <img
            src={ImagemCarrouselListCheck}
            class="overlayImagemListCheckCarrousel5"
            width="45px"
            height="45px"
          />
          <img
            src={ImagemCarrouselListCheck}
            class="overlayImagemListCheckCarrousel6"
            width="45px"
            height="45px"
          />
        </div>
      </div>
      <div className={classes.divContainer}>
        <img src={ImagemCarrosel3} width="1858px" height="465px" />
        <img
          class="overlayImagem2Carrousel"
          src={ImagemCarrouselPintura}
          width="600px"
          height="256px"
        />
        <div class="overlayCarrouselTexto3">
          <Typography variant="h1" class="overlayTypographyCarrousel3">
            Pintura classe A
          </Typography>
          <div class="overlayCarrouselTexto4">
            <Typography variant="h1" class="overlayTypographyCarrousel4">
              Atendemos as principais montadoras com qualidade de
            </Typography>
          </div>
          <Typography variant="h1" class="overlayCarrouselTexto7">
            Pintura Classe A
          </Typography>
        </div>
        <div class="overlayCarousel">
          <div class="circuloExterno7">
            <Typography variant="h1" class="overlayTypographyCirculoTexto7">
              Peças plásticas
            </Typography>
          </div>
          <div class="circuloInterno7"></div>
          <div class="circuloExterno8">
            <Typography variant="h1" class="overlayTypographyCirculoTexto8">
              Fibra de vidro
            </Typography>
          </div>
          <div class="circuloInterno7"></div>
          <img
            src={ImagemCarrouselListCheck}
            class="overlayImagemListCheckCarrousel7"
            width="45px"
            height="45px"
          />
          <img
            src={ImagemCarrouselListCheck}
            class="overlayImagemListCheckCarrousel8"
            width="45px"
            height="45px"
          />
        </div>
      </div>
      ))
    </Carousel>
  );
}

const App = () => {
  const images = [
    ImagemCarroselInicio,
    ImagemCarroselTermoplastico,
    ImagemCarrouselFibra,
    ImagemCarrouselPintura,
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "white",
          height: "2vh",
          width: "200vh",
        }}
      ></Box>
      <Container maxWidth="lg">
        <img src={Logo} width="163px" height="54px" />

        <Button
          startIcon={<CallIcon />}
          variant="text"
          size="small"
          disableRipple={true}
          style={{
            color: "black",
            textTransform: "initial",
            marginTop: "-90px",
            fontWeight: "bold",
            marginLeft: "100px",
            fontFamily: "sans-serif",
            fontSize: "12px",
            background: "transparent",
          }}
        >
          <label class="label">Tel.: +55(19)</label>
          <label class="label2">3535-6550</label>
        </Button>

        <Button
          startIcon={<LocalPostOfficeIcon />}
          variant="text"
          size="small"
          disableRipple={true}
          style={{
            color: "black",
            textTransform: "initial",
            marginTop: "-40px",
            fontWeight: "bold",
            marginLeft: "-170px",
            fontFamily: "sans-serif",
            fontSize: "12px",
            background: "transparent",
          }}
        >
          <label class="label3">E-mail:</label>
          <button class="custom-button-Email">sulplast@sulplast.com.br</button>
        </Button>

        <Button
          startIcon={<FmdGoodIcon />}
          variant="text"
          size="small"
          disableRipple={true}
          style={{
            color: "black",
            textTransform: "initial",
            marginTop: "20px",
            fontWeight: "bold",
            marginLeft: "-215px",
            fontFamily: "sans-serif",
            fontSize: "12px",
            background: "transparent",
          }}
        >
          <label class="label3">
            Av. Sulplast, 1969 - Distrito Industrial - Rio Claro/SP - Brasil -
            13505-680 -
          </label>
          <p></p>
          <button class="custom-button-Webmail ">Webmail</button>
        </Button>
      </Container>

      <Box
        sx={{
          bgcolor: "white",
          height: "1vh",
          width: "200vh",
        }}
      ></Box>

      <Box
        sx={{
          bgcolor: "#093170",
          height: "6vh",
          width: "200vh",
        }}
      >
        <GrupoBotao />
      </Box>

      <Box
        sx={{
          bgcolor: "red",
          height: "50vh",
          width: "200vh",
        }}
      >
        <div>
          <MyCarousel images={images} />
        </div>
      </Box>
      <Box
        sx={{
          bgcolor: "#f3f3f3",
          height: "60vh",
          width: "200vh",
        }}
      >
        <img
          class="overlayImagem3"
          src={ImagemSulplastCirculo}
          width="305px"
          height="305px"
        />
        <div>
          <Button variant="text" size="large" class="custom-button-Sobre">
            Sobre a Sulplast
          </Button>
          <img
            class="overlayImagem4"
            src={ImagemFord}
            width="80px"
            height="70px"
          />
          <img
            class="overlayImagem5"
            src={ImagemVda}
            width="80px"
            height="70px"
          />
          <img
            class="overlayImagem6"
            src={ImagemIso9001}
            width="80px"
            height="70px"
          />
          <img
            class="overlayImagem7"
            src={ImagemIso14001}
            width="80px"
            height="70px"
          />
          <img
            class="overlayImagem8"
            src={ImagemIatf16949}
            width="80px"
            height="70px"
          />
        </div>
        <div>
          <Typography variant="h1" class="overlaySulplast">
            Sulplast
          </Typography>
          <Typography variant="h1" class="overlaySulplast1">
            Há mais de 40 anos no mercado, a
          </Typography>
          <Typography variant="h1" class="overlaySulplast2">
            Sulplast
          </Typography>
          <Typography variant="h1" class="overlaySulplast3">
            é uma empresa especializada no
          </Typography>
          <Typography variant="h1" class="overlaySulplast4">
            desenvolvimento e fabricação de peças técnicas em termoplástico e
            fibra de
          </Typography>
          <Typography variant="h1" class="overlaySulplast5">
            Capaz de atender aos mais rigorosos padrões de qualidade e
            segurança, a
          </Typography>
          <Typography variant="h1" class="overlaySulplast6">
            Sulplast
          </Typography>
          <Typography variant="h1" class="overlaySulplast7">
            possui expertise nos processos de
          </Typography>
          <Typography variant="h1" class="overlaySulplast8">
            Vacuum Forming, Rotomoldagem,
          </Typography>
          <Typography variant="h1" class="overlaySulplast9">
            Injeção, RTM Light, RTM Skin, Hand Lay Up e Pintura Classe A.
          </Typography>
          <hr class="hr" />
        </div>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          height: "60vh",
          width: "200vh",
        }}
      >
        <div>
          <img
            class="overlayImagem9"
            src={ImagemSetorAutomotivo}
            width="958px"
            height="557px"
          />
          <div>
            <Typography variant="h1" class="overlayAutomotivo">
              Automotivo
            </Typography>
            <Typography variant="h1" class="overlayAutomotivo2">
              Com forte atuação neste setor, especialmente no
            </Typography>
            <Typography variant="h1" class="overlayAutomotivo3">
              segmento de caminhões e veículos especiais, as
            </Typography>
            <Typography variant="h1" class="overlayAutomotivo4">
              peças automotivas
            </Typography>
            <Typography variant="h1" class="overlayAutomotivo5">
              Sulplast
            </Typography>
            <Typography variant="h1" class="overlayAutomotivo6">
              possuem elevado
            </Typography>
            <Typography variant="h1" class="overlayAutomotivo7">
              desempenho e atendem as exigências das principais
            </Typography>
            <Typography variant="h1" class="overlayAutomotivo8">
              montadoras do mundo.
            </Typography>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          height: "60vh",
          width: "200vh",
        }}
      >
        <div>
          <img
            class="overlayImagemAgricola"
            src={ImagemSetorAgricola}
            width="900px"
            height="557px"
          />
          <div>
            <Typography variant="h1" class="overlayAgricola">
              Agrícola
            </Typography>
            <Typography variant="h1" class="overlayAgricola2">
              Fornecedora de soluções plásticas para os principais
            </Typography>
            <Typography variant="h1" class="overlayAgricola3">
              fabricantes de máquinas e implementos agrícolas
            </Typography>
            <Typography variant="h1" class="overlayAgricola4">
              presentes no mercado, a
            </Typography>
            <Typography variant="h1" class="overlayAgricola5">
              Sulplast
            </Typography>
            <Typography variant="h1" class="overlayAgricola6">
              contribui para a
            </Typography>
            <Typography variant="h1" class="overlayAgricola7">
              expansão do agronegócio e aumento da produção de
            </Typography>
            <Typography variant="h1" class="overlayAgricola8">
              alimentos do planeta.
            </Typography>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          height: "60vh",
          width: "200vh",
        }}
      >
        <div>
          <img
            class="overlayImagemMineracao"
            src={ImagemMineracao}
            width="958px"
            height="558px"
          />
          <div>
            <Typography variant="h1" class="overlayMineracao">
              Construção e Mineração
            </Typography>
            <Typography variant="h1" class="overlayMineracao2">
              A
            </Typography>
            <Typography variant="h1" class="overlayMineracao3">
              Sulplast
            </Typography>
            <Typography variant="h1" class="overlayMineracao4">
              também fornece componentes de alta
            </Typography>
            <Typography variant="h1" class="overlayMineracao5">
              qualidade para os principais fabricantes de máquinas
            </Typography>
            <Typography variant="h1" class="overlayMineracao6">
              e implementos para construção civil e mineração,
            </Typography>
            <Typography variant="h1" class="overlayMineracao7">
              contribuindo em obras de infraestrutura e na
            </Typography>
            <Typography variant="h1" class="overlayMineracao8">
              extração de recursos naturais.
            </Typography>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          height: "60vh",
          width: "200vh",
        }}
      >
        <div>
          <img
            class="overlayImagemSetores"
            src={ImagemSetores}
            width="900px"
            height="557px"
          />
          <div>
            <Typography variant="h1" class="overlaySetores">
              Diversos Setores da Economia
            </Typography>
            <Typography variant="h1" class="overlaySetores2">
              A estrutura e o conhecimento técnico da Sulplast
            </Typography>
            <Typography variant="h1" class="overlaySetores3">
              tornam a empresa capaz de desenvolver soluções
            </Typography>
            <Typography variant="h1" class="overlaySetores4">
              plásticas eficientes para todos os setores da
            </Typography>
            <Typography variant="h1" class="overlaySetores5">
              da economia, com a excelência que destaca nossos
            </Typography>
            <Typography variant="h1" class="overlaySetores6">
              produtos e processos.
            </Typography>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          bgcolor: "#f3f3f3",
          height: "60vh",
          width: "200vh",
        }}
      >
        <div>
          <img
            class="overlayImagemCerticicacoes"
            src={ImagemBackground}
            width="900px"
            height="557px"
          />
          <div>
            <Typography variant="h1" class="overlayCertificacoes">
              Meio Ambiente
            </Typography>
            <Typography variant="h1" class="overlayCertificacoes2">
              A
            </Typography>
            <Typography variant="h1" class="overlayCertificacoes3">
              Sulplast
            </Typography>
            <Typography variant="h1" class="overlayCertificacoes4">
              assume o compromisso de construir um
            </Typography>
            <Typography variant="h1" class="overlayCertificacoes5">
              mundo mais sustentável. Certificado pela norma ISO
            </Typography>
            <Typography variant="h1" class="overlayCertificacoes6">
              14001, nosso Sistema de Gestão Ambiental é
            </Typography>
            <Typography variant="h1" class="overlayCertificacoes7">
              rigorosamente aplicado em todas as etapas produtivas da
            </Typography>
            <Typography variant="h1" class="overlayCertificacoes8">
              empresa.
            </Typography>
          </div>
        </div>
        <BotaoFlutuante />
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          height: "5vh",
          width: "200vh",
        }}
      ></Box>
      <Container maxWidth="false">
        <Box
          sx={{
            bgcolor: "white",
            height: "54vh",
            width: "236vh",
            marginLeft: "-350px",
          }}
        >
          <div class="container">
            <Box
              sx={{
                bgcolor: "white",
                height: "54vh",
                width: "236vh",
                marginLeft: "22px",
              }}
            >
              <img src={ImagemInferior} width="2162px" height="510px" />
              <img
                class="overlayImagem1"
                src={LogoRodape}
                width="164px"
                height="54px"
              />
              <img
                class="overlayImagem2"
                src={DunsRegistro}
                width="90px"
                height="76px"
              />

              <div class="overlayTextoEmpresas">
                <Typography variant="h1" class="overlayTypography">
                  Empresa
                </Typography>
                <Button class="custom-button-Grupo1">Quem somos</Button>
                <div>
                  <Button class="custom-button-Grupo2">Missão e visão</Button>
                </div>
                <div>
                  <Button class="custom-button-Grupo3">
                    Certificações e prêmios
                  </Button>
                </div>
                <div>
                  <Button class="custom-button-Grupo4">
                    Política de ética empresarial e sustentabilidade
                  </Button>
                </div>
                <div>
                  <Button class="custom-button-Grupo5">Notícias</Button>
                </div>
              </div>
              <div class="overlayTextoTecnologias">
                <Typography variant="h1" class="overlayTypography">
                  Tecnologias e processos
                </Typography>
                <Button class="custom-button-Grupo1">
                  Tecnologias e processos
                </Button>
                <div>
                  <Button class="custom-button-Grupo2">Termoplástico</Button>
                </div>
                <div>
                  <Button class="custom-button-Grupo3">Fibra de vidro</Button>
                </div>
                <div>
                  <Button class="custom-button-Grupo2">Pintura</Button>
                </div>
                <div>
                  <Button class="custom-button-Grupo6">
                    Desenvolvimento de produtos
                  </Button>
                </div>
              </div>
              <div class="overlayTextoAmbiente">
                <Typography variant="h1" class="overlayTypography">
                  Meio ambiente
                </Typography>
                <Button class="custom-button-Grupo1">
                  A Sulplast e o meio ambiente
                </Button>
                <div>
                  <Button class="custom-button-Grupo2">
                    Ciclo de vida do produto
                  </Button>
                </div>
                <div>
                  <Button class="custom-button-Grupo3">
                    Fornecedores e meio ambiente
                  </Button>
                </div>
              </div>
              <div class="overlayFale">
                <Typography variant="h1" class="overlayTypography">
                  Fale conosco
                </Typography>
                <Button class="custom-button-Grupo1">Fale conosco</Button>
                <div>
                  <Button class="custom-button-Grupo2">Localização</Button>
                </div>
                <div>
                  <Button class="custom-button-Grupo3">Trabalhe conosco</Button>
                </div>
              </div>
              <div class="overlayCreditos">
                <Typography variant="h1" class="overlayTypography1">
                  2023 - Sulplast, todos os direitos reservados. As imagens
                  apresentadas neste website são meramente ilustrativas.
                  Sulplast - Fibra de vidro e termoplástico LTDA. Avenida
                  Sulplast, 1969 - Distrito Industrial - Rio Claro/SP -
                </Typography>
              </div>
              <div class="overlayCreditos">
                <Typography variant="h1" class="overlayRodape">
                  Brasil.
                </Typography>
              </div>
              <div class="overlayCreditos">
                <div>
                  <Button class="custom-button-Creditos">
                    Créditos das imagens.
                  </Button>
                </div>
                <Typography variant="h1" class="overlayTypography2">
                  Desenvolvido por Patrick Willian Inácio.
                </Typography>
              </div>
            </Box>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
