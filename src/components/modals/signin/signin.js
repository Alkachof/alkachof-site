import Modal from "../modal/modal";
import Input from "../../general/input/input";
import Card from "../../general/card/card";
import Button from "../../general/button/button";
import useInput from "../../../hooks/useInput/useInput";

function Signin({ open, handleClose }) {
  const email = useInput("email");
  const password = useInput("password");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email.value, password.value);
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      <Card>
        <h2>Iniciar sesión</h2>
        <Input
          label="Correo electrónico"
          type="email"
          value={email.value}
          onChange={email.onChange}
        />
        <Input
          label="Contraseña"
          type="password"
          value={password.value}
          onChange={password.onChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          Ingresar
        </Button>
      </Card>
    </Modal>
  );
}

export default Signin;
