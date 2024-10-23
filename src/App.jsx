import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";

const FundoGradiente = styled.div`
  background: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
  width: 100%;
  min-height: 100vh;
`;

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
    </FundoGradiente>
  )
}

export default App;
