// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <AppRoutes />
      <Footer />
      <WhatsappButton />
    </BrowserRouter>
  );
}

export default App;