import { RateProvider } from "./context/RateContext";
import Form from "./components/Form";
function App() {
  return (
    <RateProvider>
    <div className="App">
        <Form />
    </div>
    </RateProvider>
  );
}

export default App;
