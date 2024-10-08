import Button from "../components/general/button/button";
import Signin from "../components/modals/signin/signin";
import Signup from "../components/modals/signup/signup";

import useModal from "../hooks/useModal/useModal";
import ResetPassword from "../components/modals/reset-password/reset-password";
import Footer from "../components/general/footer/footer";

function Landing() {
    const loginModal = useModal();
    const signupModal = useModal();
    const forgotPasswordModal = useModal();

  
  return (
    <div className="container" role="main">
      <h1>Alkachof</h1>
      <p>Tus catalogos en un solo lugar</p>

      <div>
        <Button text="Ingresar" onClick={loginModal.toggleModal} />
        <Button text="Registrarse" onClick={signupModal.toggleModal} />
        <Button text="Recuperar contraseña"  onClick={forgotPasswordModal.toggleModal} />
      </div>

      <Signin open={loginModal.showModal} handleClose={loginModal.closeModal} />
      <Signup open={signupModal.showModal} handleClose={signupModal.closeModal} />
      <ResetPassword open={forgotPasswordModal.showModal} handleClose={forgotPasswordModal.closeModal} />
      <Footer />
    </div>
  );
}

export default Landing;
