import Modal from "../modal/modal";
import Input from "../../general/input/input";
import Card from "../../general/card/card";
import Button from "../../general/button/button";
import useInput from "../../../hooks/useInput/useInput";

function Signup({ open, handleClose }) {
  const name = useInput("name");
  const email = useInput("email");
  const password = useInput("password");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.value, email.value, password.value);
  };

  const handleReset = (event) => {
    event.preventDefault();
    name.reset();
    email.reset();
    password.reset();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Card>
        <h2>Registro</h2>

        <Input
          label="Nombre"
          value={name.value}
          onChange={name.onChange}
          placeholder="Nombre completo"
          type="text"
        />
        <Input
          label="Correo electrónico"
          value={email.value}
          onChange={email.onChange}
          placeholder="example@gmail.com"
          type="email"
        />
        <Input
          label="Contraseña"
          value={password.value}
          onChange={password.onChange}
          placeholder="Tu contraseña"
          type="password"
        />
        <Button onClick={handleSubmit} text="Registrarme" />
      </Card>
    </Modal>
  );
}

export default Signup;
