import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import DemoPage from "./pages/DemoPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/xact-dev" element={<HomePage />} />
        <Route path="/xact-dev/demo" element={<DemoPage />} />
        <Route path="/xact-dev/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;