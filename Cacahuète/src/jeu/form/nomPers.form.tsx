import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import PersForm from "./basic.form";
import { setJeu } from "../../store/slices/jeu.slice";

function NomPersForm () {

    const dispatch = useAppDispatch()
    const NbreJoueurs = useAppSelector(state => state.jeu.nbreJoueur)
    const [btnDisabled, setBtnDisabled] = useState<boolean>(false)

    const { handleSubmit, control } = useForm();

//TODO
//! Gérer l'ajout dans le []
    const onSubmit = (data: any) => {
        console.log(data.joueurs.map((i: any) => i));
        
        // const newBtnDisabled = [...btnDisabled]
        // newBtnDisabled.forEach((value, index) => {
        //     newBtnDisabled[index] = !value
        // })
        // setBtnDisabled(prevValues => )
        if (data.joueurs.trim() !== "") {
            dispatch(setJeu(data))
        }
    }
    
    // const createForm = () => {
    //     const forms : JSX.Element[] = []
    //     for (let i = 0; i < NbreJoueurs; i++) {
    //         forms.push(/*<PersForm key={i} />*/)
    //     }
    //     return forms
    // }

    //- Aurélien -----------------------------
    const createFormAurelien = () : JSX.Element[] => {
        
        const form: JSX.Element[]= []
        
        for (let i = 0; i < NbreJoueurs; i++) {
            form.push(
                <Controller
                    key={i}
                    control={control}
                    name={`joueurs.${i}.firstname`}
                    render={({field}) => (
                            <PersForm
                                {...field}
                                key={i}
                                label='Prénom : '
                                type='text'
                                id={`prenom + ${i}`}
                                className='form__prenom'
                                disabled={btnDisabled}
                                //! ils se disabeld tous en meme temps
                            />
                    )}
                />
            );
            
        }

        return form;
    }
    

    return (
        <>
            <h1>NomPersForm</h1>
            <p>Vous êtes {NbreJoueurs} personnes à jouer.</p>
            <p>Merci d'encoder le prénom de chacun.</p>

            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                {NbreJoueurs > 3 ? 
                    createFormAurelien()
                    : "Reviens en arrière, il faut être plus de deux!"
                }
            </form>




        </>

    )
}

export default NomPersForm
