import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Section from "../Section";

function Home() {
  return (
    <Container>
      <Header />
      <Section
        title="Model S"
        description="Vereinbaren Sie eine virtuelle Beratung"
        backgroundImg="model-s.jpg"
        leftBtnText="Bestand erkunden"
        rightBtnText="Konfigurieren"
      />
      <Section
        title="Model X"
        description="Vereinbaren Sie eine virtuelle Beratung"
        backgroundImg="model-x.jpg"
        leftBtnText="Bestand erkunden"
        rightBtnText="Konfigurieren"
      />
      <Section
        title="Solarkollektoren und Powerwall"
        description="Solarstrom für alles"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Weitere Informationen"
        rightBtnText=""
      />
      <Section
        title="Tesla Solardach für neue Dächer"
        description=""
        backgroundImg="solar-roof.jpg"
        leftBtnText="Jetzt bestellen"
      />
      <Section
        title="Zubehör"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Jetzt bestellen"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow: auto;
  overflow-x: hidden;
`;
