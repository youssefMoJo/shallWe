import "./App.css";
import Hero from "./Components/Hero";
import CreateEvent from "./Components/CreateEvent";
import AIChatingWithFriends from "./Components/AIChatingWithFriends";
import Status from "./Components/Status";
import Chatting from "./Components/Chatting";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import ExampleComponent from "./Components/ExampleComponent";

function App() {
  return (
    <div className="App">
      <Hero />
      <CreateEvent />
      <AIChatingWithFriends />
      <Status />
      <Chatting />
      <Gallery />
      <Footer />
      <ExampleComponent />
    </div>
  );
}

export default App;
