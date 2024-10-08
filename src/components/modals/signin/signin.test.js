import {render, screen} from "@testing-library/react";
import Signin from "./signin";



describe("Signin", () => {

    test("Renders Signin", () => {
        render(<Signin open={true} handleClose={jest.fn()}/>);

        const modalContent = screen.getByText("Iniciar sesión");

        expect(modalContent).toBeInTheDocument();
    })
})

