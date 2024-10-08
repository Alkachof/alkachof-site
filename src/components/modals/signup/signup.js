import Modal from "../modal/modal";
import Input from "../../general/input/input";
import Card from "../../general/card/card";
import Button from "../../general/button/button";
import useInput from "../../../hooks/useInput/useInput";

function Signup({ open, handleClose }) {
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.value, email.value, password.value);
  };

  return (
    <Modal open={open} handleClose={handleClose} title={"Registrarse"}>
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
