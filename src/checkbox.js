import { useReducer } from "react";

export function Checkbox() {
    const [checked, setChecked] = useReducer( // set the user reducer
    // the start value of the box is false(not checked)
        checked => !checked,
        false);

    return (
        <>
            <label htmlFor="checked">
                {checked ? "checked" : "not checked"}

                <input id="checked" type="checkbox" 
                value={checked} 
                onChange={setChecked} 
                />
            </label>
        </>
    )
}