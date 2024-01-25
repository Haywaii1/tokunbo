import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 3000);
  });
  return (
    <div>
      <div>
        <Header />
      </div>
      <h1>Not Found</h1>
      <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
}
