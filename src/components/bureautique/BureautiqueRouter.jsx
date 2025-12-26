import { useParams } from "react-router-dom";
import Ordinateur from "./ordinateur/Ordinateur";
import Word from "./Word";

export default function BureautiqueRouter() {
  const { id } = useParams();

  switch (id) {
    case "1":
      return <Ordinateur />;
    case "2":
      return <Word />;
    default:
      return <div>Cours introuvable</div>;
  }
}
