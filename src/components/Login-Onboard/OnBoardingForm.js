import React, {useState} from "react";

const OnBoardingForm = props => {
    const [note, setNote] = useState(
        {name: "", 
        email: ""
    })

    const handleChanges = event => {
        console.log("handle change!", event.target.value);
        setNote({title: event.target.value})
    };
    console.log("note:",note)
    return(
        <form>
            <label htmlFor="name">Name
                <input id="name" type="text" placeholder="enter name" onChange={handleChanges} />
            </label>

            <label htmlFor="email">
                <input id="email" type="email" placeholder="enter email" />
            </label>

        </form>
    );
};

export default OnBoardingForm;