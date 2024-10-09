import Button from "../components/general/button/button";
import Signin from "../components/modals/signin/signin";
import Signup from "../components/modals/signup/signup";

import useModal from "../hooks/useModal/useModal";
import ResetPassword from "../components/modals/reset-password/reset-password";
import Footer from "../components/general/footer/footer";
import {ReactComponent as Icon} from "../assets/icons/artichoke.svg";	

function Landing() {
  const loginModal = useModal();
  const signupModal = useModal();
  const forgotPasswordModal = useModal();

  return (
    <div className="container" role="main">
      <div className="full-height landing">
        <Icon />
        <h1 role="heading">Alkachof</h1>
        <p className="lead">Tus catalogos en un solo lugar</p>

        <div className="space vertical">
          <Button
            text="Acceder"
            onClick={loginModal.toggleModal}
            type="primary"
          />
          <Button
            text="Crear cuenta"
            onClick={signupModal.toggleModal}
            type="secondary"
          />
          <Button
            text="Olvidé mi contraseña"
            onClick={forgotPasswordModal.toggleModal}
            type="link"
          />
        </div>

        <Signin
          open={loginModal.showModal}
          handleClose={loginModal.closeModal}
          handleForgetPassword={forgotPasswordModal.toggleModal}
        />
        <Signup
          open={signupModal.showModal}
          handleClose={signupModal.closeModal}
          handleLogin={loginModal.toggleModal} 
        />
        <ResetPassword
          open={forgotPasswordModal.showModal}
          handleClose={forgotPasswordModal.closeModal}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
