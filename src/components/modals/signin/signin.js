import Modal from "../modal/modal";
import Input from "../../general/input/input";
import Card from "../../general/card/card";
import Button from "../../general/button/button";
import useInput from "../../../hooks/useInput/useInput";

function Signin({ open, handleClose, handleForgetPassword }) {
  const email = useInput("");
  const password = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email.value, password.value);
  };

  return (
    <Modal open={open} handleClose={handleClose} title={"Iniciar sesión"}>
      <Card>
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
        
        <Button
          type="submit"
          text="Aceptar"
          onClick={handleSubmit}
        ></Button>
        
        <Button type="link" text="Olvidé mi contraseña" onClick={handleForgetPassword}></Button>
      </Card>
    </Modal>
  );
}

export default Signin;
