import { Checkbox } from "./checkbox";
import { fireEvent, render} from "@testing-library/react";

test("Selection the checkbox should render change the value of true", () => {
    const {getByLabelText} = (<Checkbox/>);
    const checkbox = getByLabelText(/not checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});