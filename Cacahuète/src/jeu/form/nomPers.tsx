import { useState } from "react";

function PersForm () {

    const [persName, setPersName] = useState<string>("")
    const [validate, setValidate] = useState<boolean>(false)
    const [btnDisabled, setBtnDisabled] = useState<boolean>(false)


    const handleAction = () => {
        setValidate(!validate)
        setBtnDisabled(!validate)
        if (persName.trim() !== "") {
            //addPers(persName)
        }
    }

    return (
        <div>
            <label htmlFor="nom">Prénom: </label>
            <input type="text" name="nom" id="nom" value={persName} onChange={(e) => setPersName(e.target.value)}/>
            <button type="button" onClick={handleAction} disabled={btnDisabled}>Ajouter</button>
        </div>
    )        
}

export default PersForm
