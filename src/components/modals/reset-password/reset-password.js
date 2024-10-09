import Modal from "../modal/modal";
import Card from "../../general/card/card";
import Button from "../../general/button/button";
import Input from "../../general/input/input";
import useInput from "../../../hooks/useInput/useInput";
function ResetPassword({ open, handleClose }) {
  const email = useInput("email");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email.value);
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      <Card>
        <h2>Recuperar contraseña</h2>
        <p>Ingresa tu email para recuperar tu contraseña</p>
        <Input label="Email" type="email" placeholder="example@gmail.com" />
        <Button text="Recuperar" type="submit" />
      </Card>
    </Modal>
  );
}

export default ResetPassword;
