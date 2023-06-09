import DivError from "../../Styles/error";
import img from "../../Assets/404.jpg";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
function Error() {
  const Navigate = useNavigate();
  return (
    <DivError>
      <img src={img} alt="Página não encontrada" />
      <Button onClick={() => Navigate("/login")}>Voltar</Button>
    </DivError>
  );
}
export default Error;
