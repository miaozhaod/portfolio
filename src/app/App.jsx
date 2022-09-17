// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home, Projects, Artworks, Contact } from "./pages";

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <main className="flex flex-col items-center">
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/arts" component={Artworks} />
        <Route path="/" exact component={Home} />
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
