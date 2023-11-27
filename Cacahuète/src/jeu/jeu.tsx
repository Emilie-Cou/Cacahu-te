// import { useAppDispatch } from "../store/hook";
import { useAppDispatch } from "../store/hook";
import NbrePersForm from "./form/nbrePers.form";
import NomPersForm from "./form/nomPers.form";

function Jeu () {

    const dispatch = useAppDispatch()

    const level : number = 1

    return (
        <>
            { level == 0 ?
                    <NbrePersForm/>
                    : level == 1 ?
                        <NomPersForm/>
                        : "Erreur"
            }
        </>
    )
}

export default Jeu
