import { useEffect, useState } from "react";
import logoImg from "../images/logo.png";
import { navigate } from "gatsby";
import styled, { keyframes } from "styled-components";
import LoginCheck from "../components/login/LoginCheck";

const fadeSlide = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const V2 = () => {
  const [enProceso, setEnProceso] = useState(false);

  useEffect(() => {
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.margin = null;
      document.documentElement.style.padding = null;
      document.body.style.margin = null;
      document.body.style.padding = null;
      document.body.style.overflowX = null;
    };
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const handleNext = () => {
    if (!enProceso) {
      setEnProceso(true);
    }
  };

  return (
    <LoginCheck>
      <Page>
        <TopBar>
          <Logo src={logoImg} alt="Terapia Génesis" />
         
        </TopBar>

        <CardArea>
          <Card>
            <HeaderRow>
              <BackLink onClick={handleBack}>Anterior</BackLink>
            </HeaderRow>

            <SlideInicio />

            <FooterRow>
              <ContinueBtn onClick={handleNext} disabled={enProceso}>
                {enProceso && <Spinner />}
                {enProceso ? "En proceso..." : "Aceptar y continuar"}
              </ContinueBtn>
            </FooterRow>
          </Card>
        </CardArea>
      </Page>
    </LoginCheck>
  );
};

export default V2;

/* ══════════════════════════════════════════════
   SLIDE
══════════════════════════════════════════════ */

const SlideInicio = () => (
  <IntroWrapper>
    <MainTitle>GÉNESIS 5D</MainTitle>
    <IntroStrong>AVISO IMPORTANTE – ACCESO A NIVEL GÉNESIS® 5D</IntroStrong>
    <IntroText>
      Para garantizar la coherencia, profundidad y responsabilidad en la enseñanza del Nivel
      GÉNESIS® 5D, se establecen los siguientes requisitos obligatorios:
    </IntroText>
    <IntroList>
      <li>Experiencia mínima comprobable de 6 meses ejerciendo como terapeuta con la metodología.</li>
      <li>Aprobación de un examen de evaluación, que permitirá validar la integración real de los fundamentos, la práctica y la ética profesional del método.</li>
      <li>Uso correcto y explícito del nombre original en redes sociales, espacios terapéuticos y comunicaciones oficiales: <PinkText>Terapia Cuántica GÉNESIS®</PinkText></li>
    </IntroList>
    <IntroText>
      El Nivel 5D no es solo una formación más:<br />
      es una expansión de conciencia y de responsabilidad profesional.
    </IntroText>
    <IntroText>Por este motivo, únicamente podrán acceder quienes:</IntroText>
    <IntroList>
      <li>Hayan aplicado la técnica de manera activa.</li>
      <li>Representen fielmente la metodología.</li>
      <li>Utilicen el nombre oficial del método en su comunicación pública.</li>
    </IntroList>
    <IntroText>Esto asegura la protección, el respeto y la expansión auténtica de la frecuencia GÉNESIS®.</IntroText>
    <IntroText>Gracias por honrar el proceso y sostener la vibración del método.</IntroText>
  </IntroWrapper>
);

/* ══════════════════════════════════════════════
   STYLES
══════════════════════════════════════════════ */

const sm = "@media (max-width: 480px)";
const md = "@media (max-width: 768px)";

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url("/images/fondo-oraciones-G5D.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
`;

const TopBar = styled.div`
 width: 100%;
  padding: 6px 48px 6px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  flex-shrink: 0;
  ${md} { padding: 4px 20px 4px 0px; }
  ${sm} { padding: 2px 14px 2px 0px; }
`;

const Logo = styled.img`
  height: 115px;
  width: auto;
  filter: drop-shadow(0 6px 14px rgba(0,0,0,0.5));
  ${md} { height: 90px; }
  ${sm} { height: 65px; }
`;


const CardArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px 40px;
  box-sizing: border-box;
  ${md} { padding: 24px 16px 32px; }
  ${sm} { padding: 16px 12px 24px; align-items: flex-start; }
`;

const Card = styled.div`
  width: 100%;
  max-width: 1080px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 34px 82px 38px;
  border-radius: 26px;
  background: rgba(6, 4, 20, 0.78);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 8px 48px rgba(0,0,0,0.7);
  animation: ${fadeSlide} 0.35s ease both;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.15) transparent;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.18); border-radius: 4px; }
  ${md} { padding: 26px 28px 30px; max-height: 84vh; border-radius: 20px; }
  ${sm} { padding: 20px 16px 24px; max-height: 88vh; border-radius: 16px; }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;
  ${sm} { margin-bottom: 16px; }
`;

const BackLink = styled.button`
  background: none;
  border: none;
  color: rgba(255,255,255,0.72);
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  white-space: nowrap;
  &::before { content: "‹ "; font-size: 20px; }
  ${sm} { font-size: 13px; }
  transition: color 0.2s, letter-spacing 0.2s;
  &::before { content: "‹ "; font-size: 20px; }
  &:hover {
    color: rgba(255,255,255,1);
    letter-spacing: 0.04em;
  }
`;

const MainTitle = styled.h1`
  font-family: "Inter", system-ui, sans-serif;
  font-size: clamp(22px, 4vw, 42px);
  font-weight: 700;
  color: #fff;
  text-align: center;
  text-shadow: 0 4px 20px rgba(0,0,0,0.6);
  margin: 0 0 16px;
  letter-spacing: 0.5px;
  ${sm} { font-size: 22px; margin-bottom: 12px; }
`;

const IntroWrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
  ${sm} { max-width: 100%; }
`;

const IntroStrong = styled.p`
  font-family: "Inter", system-ui, sans-serif;
  font-size: clamp(12px, 1.5vw, 13px);
  font-weight: 800;
  color: #fff;
  margin: 0 0 14px;
`;

const IntroText = styled.p`
  font-family: "Inter", system-ui, sans-serif;
  font-size: clamp(12px, 1.5vw, 13px);
  font-weight: 400;
  line-height: 1.55;
  color: rgba(255,255,255,0.9);
  margin: 0 0 14px;
`;

const IntroList = styled.ul`
  font-family: "Inter", system-ui, sans-serif;
  font-size: clamp(12px, 1.5vw, 13px);
  line-height: 1.55;
  color: rgba(255,255,255,0.9);
  padding-left: 18px;
  margin: 0 0 14px;
  li { margin-bottom: 6px; }
`;

const PinkText = styled.span`
  color: #ff26c9;
  font-weight: 700;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  ${sm} { margin-top: 24px; }
`;

const ContinueBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 46px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.45);
  background: rgba(255,255,255,0.08);
  color: white;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.12em;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  &:hover:not(:disabled) { background: rgba(255,255,255,0.14); transform: translateY(-1px); }
  &:active:not(:disabled) { transform: translateY(0); }
  &:disabled { opacity: 0.75; cursor: default; }
  ${sm} { padding: 13px 36px; font-size: 12px; width: 100%; max-width: 320px; justify-content: center; }
`;

const Spinner = styled.div`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  flex-shrink: 0;
`;