import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import HomePage from "./pages/home";
import GlobalStyles from "./styles/GlobalStyles";

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
