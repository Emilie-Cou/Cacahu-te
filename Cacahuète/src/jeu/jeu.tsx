import { setNbre } from "../store/slices/nbre.slice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useState } from "react";
import { useForm} from "react-hook-form";
import PersForm from "./form/nomPers";

function Jeu () {

    const dispatch = useAppDispatch()
    const [validate, setValidate] = useState<boolean>(false)
    const [btnDisabled, setBtnDisabled] = useState<boolean>(false)

    const { handleSubmit, register } = useForm({
        defaultValues: {
            nbreJoueur: 4,
        }
    });

    const onClick = (data: any) => {
        console.log('data ========= ' , data);
        if (data.nbreJoueurs) {
           let nbreJoueurs = parseInt(data.nbreJoueur);
        }
        
        setValidate(!validate)
        setBtnDisabled(!btnDisabled)
        dispatch(setNbre(data))
    }
    const nbreJoueur = useAppSelector(state => state.nbre.nbreJoueur)
    console.log('coucou', nbreJoueur);
    
    const createForm = () => {
        const forms : JSX.Element[] = []
        for (let i = 0; i < nbreJoueur; i++) {
            forms.push(<PersForm key={i} />)
        }
        return forms
    }
 
    


    return (
        <>
            <form className="formJeu" onSubmit={handleSubmit(onClick)}>

{/* //- Récupération du nombre de personne */}
                <label htmlFor="nbreJoueur">
                    Entre le nombre de personne:  
                </label>

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
                    
{/* //- Vérification de la valeur */}
                <h4>Vous êtes {nbreJoueur} personnes.</h4>

{/* //- Si c'est validé, je continue en amenant le form pour les noms */}
                {validate ? 
                    createForm() 
                    : 
                    <p>Quand tu auras validé, tu n'auras plus qu'a rentrer le prénom des personnes qui participent.</p>
                }
                
                <button 
                    type="button"
                >
                    Valider Inutile
                </button>
            </form>
        </>
    )
}

export default Jeu
