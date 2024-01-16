import { Router } from "./Router.tsx";
import { CyclesContextProvider } from "./context/CyclesContext.tsx";

function App() {
  return (
    <CyclesContextProvider>
      <Router />;
    </CyclesContextProvider>
  );
}

export default App;
