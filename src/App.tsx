import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Edit, Home } from "./pages";
import { HomeLayout } from "./Layout";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;
