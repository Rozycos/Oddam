import { useState } from "react";

export const useForm =({validate, init = ""})=>{
    const [value, setValue] = useState(init);
    const [error, setError] = useState(false);

    const onChange = ({ target: {value} }) =>{
        setValue(value);
    };

    const onBlur =()=>{
        setError(validate(value));
    };

    return {value, error, onChange, onBlur};
};

//export default useForm;