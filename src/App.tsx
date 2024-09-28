import "./App.css";
import { RouterProvider } from "react-router-dom";
import { RoutesConfig } from "./routes.tsx";

function App() {
  return (
    <>
      <RouterProvider router={RoutesConfig} />
    </>
  );
}

export default App;
