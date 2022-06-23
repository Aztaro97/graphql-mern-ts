import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "urql";
import { client } from "./graphql/graphqlClient";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import HomePage from "./pages/home";
import GlobalStyles from "./styles/GlobalStyles";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
