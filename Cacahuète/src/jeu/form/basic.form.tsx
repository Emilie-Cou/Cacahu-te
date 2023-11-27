import {FC, forwardRef} from "react";

interface IPersForm {
    type: string
    className: string
    label: string
    id: string
    disabled: boolean
}

const PersForm: FC<IPersForm> = forwardRef<HTMLInputElement, IPersForm>(({ type, className, label, id, disabled}, ref) => {


    return (
            <div key={id}>
                <label>
                        {label}
                </label>
                
                <input 
                    ref={ref} 
                    type={type}
                    id={id} 
                    className={className}
                />
                <button
                    type="submit" 
                    disabled={disabled}>
                        Ajouter
                </button>
            </div>
    )
})

export default PersForm



// Rajout d'une interface qui définit les props, ajout du forwardRef avec la ref (HTMLInputElement) et les props (l'interface custom)

//- A mettre dans le composant principal
            // <button type="submit">
            //     Ajouter
            // </button>