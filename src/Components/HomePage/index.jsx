import { useHistory } from "react-router-dom";
import {
  ButtonsDiv,
  Container,
  FirstSection,
  Footer,
  Header,
  HomeContainer,
  PresentationContainer,
  SecondSection,
  ThirdSection,
} from "./styles";
import logo from "../../assets/images/logo-select.png";
import meditation from "../../assets/images/meditation.png";
import google from "../../assets/images/google.png";
import appStore from "../../assets/images/app-store.png";
import bike from "../../assets/images/riding-bike.png";
import cellPhone from "../../assets/images/screen-app-in-iphone.png";
import tulio from "../../assets/images/tulio.jpg";
import christian from "../../assets/images/christian.jpeg";
import maria from "../../assets/images/maria.jpeg";
import julio from "../../assets/images/julio.jpeg";
import victor from "../../assets/images/victor.jpeg";

const HomePage = () => {
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("@Productive:token"));

  const sendTo = (path) => {
    history.push(path);
  };

  token && sendTo("/dashboard");

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo-productive+" />
        <ButtonsDiv>
          <button onClick={() => sendTo("/login")}>Login</button>

          <button onClick={() => sendTo("/register")}>Register</button>
        </ButtonsDiv>
      </Header>
      <HomeContainer>
        <FirstSection>
          <PresentationContainer>
            <h1>Construa bons hábitos que mudarão sua vida</h1>
            <p>
              Comece uma conta agora mesmo, é <b>gratuito</b>
            </p>
            <div>
              <img src={appStore} alt="app-store" />
              <img src={google} alt="google-store" />
            </div>
          </PresentationContainer>
          <img src={meditation} alt="meditation_image" />
        </FirstSection>
        <SecondSection>
          <PresentationContainer>
            <h1>Corpo e mente saudáveis</h1>
            <p>
              Torne os bons hábitos parte da sua vida! Controle Suas atividades
              diárias. Faça check-in assim que finalizá-las.
            </p>
            <p>Faça-o trabalhar com você e por você!</p>
            <p>Faça do Productive+ o seu melhor amigo!</p>
          </PresentationContainer>
          <img src={bike} alt="meditation_image" />
        </SecondSection>
        <ThirdSection>
          <PresentationContainer>
            <h1>Corpo e mente saudáveis</h1>
            <p>
              Torne os bons hábitos parte da sua vida! Controle Suas atividades
              diárias. Faça check-in assim que finalizá-las.
            </p>
            <p>Faça-o trabalhar com você e por você!</p>
            <p>Faça do Productive+ o seu melhor amigo!</p>
          </PresentationContainer>
          <img src={cellPhone} alt="meditation_image" />
        </ThirdSection>
        <Footer>
          <h2>Equipe Productive+</h2>
          <section>
            <div>
              <img src={christian} alt="christian" />
              <p>Christian Ferreira</p>
            </div>
            <div>
              <img src={julio} alt="julio" />
              <p>Julio Marodin</p>
            </div>
            <div>
              <img src={maria} alt="maria" />
              <p>Fernanda Baia</p>
            </div>
            <div>
              <img src={tulio} alt="tulio" />
              <p>Tulio Goulart</p>
            </div>
            <div>
              <img src={victor} alt="victor" />
              <p>Victor Varela</p>
            </div>
          </section>
        </Footer>
      </HomeContainer>
    </Container>
  );
};

export default HomePage;
