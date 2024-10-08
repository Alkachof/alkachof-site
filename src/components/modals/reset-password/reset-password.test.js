import {render, screen} from "@testing-library/react";
import ResetPassword from "./reset-password";

describe("ResetPassword", () => {

    test("Renders ResetPassword", () => {
        render(<ResetPassword open={true} handleClose={jest.fn()}/>);

        const modalContent = screen.getByText("Recuperar contraseña");

        expect(modalContent).toBeInTheDocument();
    })
})