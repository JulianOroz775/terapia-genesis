import styled from 'styled-components';
import Buttons from "../components/Buttons";
import ResponsiveText from "../components/apis/ResponsiveText";
import logo from "../images/logo.png";
import {navigate} from "gatsby";
import LoginCheck from "../components/login/LoginCheck";
import {Background} from "../components/Commons";
import historySave from "../components/navigation/History";
import {Alert} from "@mui/material";
import {useState} from "react";
const createdPages = require('../../../createdPages.json');

const CirculoBase = () => {
    const [showAlert, setShowAlert] = useState(false);

    const petalos = [
        {
            index: 0,
            colorBorder: "red",
        },
        {
            index: 1,
            colorBorder: "greenLight",
        },
        {
            index: 2,
            colorBorder: "yellow",
        },
        {
            index: 3,
            colorBorder: "blue",
        },
        {
            index: 4,
            colorBorder: "blueLight",
        },
        {
            index: 5,
            colorBorder: "orange",
        },
        {
            index: 6,
            colorBorder: "purple",
        },
    ];

    return <LoginCheck>
        <Background style={{backgroundImage: `url(/images/portada.webp)`}}>
            
            <Header>
                <Logo src={logo} alt="Terapia Génesis" />

                <Title scale={0.8} color={"#fffdfd"}>
                    Terapia Cuántica GENESÍS
                </Title>
            </Header>
            
            <Container>
                {showAlert && <ContainerAlert>
                    <Alert severity="error">
                        La pagina solicitada no existe
                    </Alert>
                </ContainerAlert>}
                <Buttons
                    petalos={petalos}
                    bigButtonTitle={"FUENTE MADRE"}
                    numbers={11}
                    circuloBase={true}
                    onClick={(petaloName) => {
                        const newLink = 'circulo-base/petalo-' + petaloName;
                        if (!createdPages.includes(newLink)) {
                            setShowAlert(true);
                            setTimeout(() => setShowAlert(false), 2000);
                            return 0;
                        } else {
                            navigate('/circulo-base/petalo-' + petaloName)
                            historySave("/petalo-" + petaloName)
                        }
                    }}
                />
                
            </Container>
        </Background>
    </LoginCheck>;
}


const Header = styled.div`
   width: 100%;
  height: 92px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 10px;
  pointer-events: none;
`;


const ContainerAlert = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 999;
`;

const Title = styled.h1`
   margin: 0;
  color: #fffdfd;
  text-align: center;

  font-family: serif;
  font-weight: 400;
  font-size: clamp(22px, 3.2vw, 44px);
  letter-spacing: clamp(4px, 1.1vw, 15px);
  line-height: 1.05;

  padding: 8px 28px;
  border-radius: 12px;

  max-width: calc(100vw - 140px);
  margin-left: 70px;

  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  border: 1px solid rgba(255, 255, 255, 0.12);
  text-shadow: 0 0 10px rgba(0,0,0,0.65);

  @media (max-width: 768px) {
    font-size: clamp(14px, 4vw, 22px);
    letter-spacing: 3px;

    max-width: calc(100vw - 75px);
    margin-left: 48px;
    padding: 7px 10px;
  }

  @media (max-width: 420px) {
    font-size: 14px;
    letter-spacing: 2.5px;
    max-width: calc(100vw - 65px);
    margin-left: 42px;
    padding: 6px 8px;
  }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Logo = styled.img`
  position: absolute;
  left: -6px;
  top: 12px;

  height: clamp(54px, 8vw, 95px);
  width: auto;
  z-index: 30;

  filter: drop-shadow(0 10px 22px rgba(0,0,0,0.55));
  pointer-events: auto;

  @media (max-width: 768px) {
    left: 6px;
    top: 14px;
    height: 46px;
  }

  @media (max-width: 420px) {
    left: 5px;
    top: 13px;
    height: 40px;
  }
`;

export default CirculoBase;