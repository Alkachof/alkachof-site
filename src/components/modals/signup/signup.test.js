import {render,screen} from "@testing-library/react";
import Signup from "./signup";


describe("Signup", () => {

    test("Renders Signup", () => {
        render(<Signup open={true} handleClose={jest.fn()}/>);

        const modalContent = screen.getByText("Registro");

        expect(modalContent).toBeInTheDocument();
    })
})