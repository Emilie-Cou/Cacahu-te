import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setJeu } from "../../store/slices/jeu.slice";

//! inclure le watch!!

function NbrePersForm () {

    const dispatch = useAppDispatch()
    const [btnDisabled, setBtnDisabled] = useState<boolean>(false)

    const { handleSubmit, register } = useForm({
        defaultValues: {
            nbreJoueur: 4,
        }
    })

    const onSubmit = (data: any) => {
        setBtnDisabled(!btnDisabled)
        dispatch(setJeu(data))
    }
    const dataNbreJoueurs = useAppSelector(state => state.jeu.nbreJoueur)

    return (
        <>
            <h1>NbrePersForm</h1>

            <form className="nbrePersForm" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="nbreJoueur">
                    Entre le nombre de personne: </label>   

                <input 
                    {...register('nbreJoueur')}
                    type="number"
                    min={3}
                />

                <button 
                    type="submit" 
                    disabled={btnDisabled}
                    >
                    Valider
                </button>
                    
                <h4>Vous êtes {dataNbreJoueurs} personnes.</h4>

                <p>Quand tu auras validé, tu n'auras plus qu'a rentrer le prénom des personnes qui participent.</p>
                
            </form> 
           
        </>
    )
}

export default NbrePersForm