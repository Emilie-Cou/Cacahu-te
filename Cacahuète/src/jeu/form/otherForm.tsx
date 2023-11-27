// //- Création form avec react hook form
// <form onSubmit={handleSubmit(onSubmit)} className='form'>
//     {/* Contrôles de formulaire pour les champs de connexion */}
//     <Controller
//         control={control}
//         name='login'
//         render={({ field }) => (
//             <Form
//                 {...field}
//                 label='Login'
//                 type='text'
//                 className='form__input__login'/>
//         )} />
//     <Controller
//         control={control}
//         name='password'
//         render={({ field }) => (
//             <Form
//                 {...field}
//                 label='Password'
//                 type='password'
//                 className='form__input__password'/>
//         )} />
//     <Button variant="contained" color="success" className='form__btn__submit'>Click me</Button>
// </form>


// //-------------------------------------------------------

// //- Aurélien Form Basic -----------------------------------
// import {FC, forwardRef} from "react";

// interface IPersForm {
//     type: string;
//     className: string;
//     name: string;
//     label: string;
//     id: string
// }

// const PersForm: FC<IPersForm> = forwardRef<HTMLInputElement, IPersForm>(({type, className, name, label, id}, ref) => {


//     return (
//         <>
//             <label htmlFor={name}>{label} </label>
//             <input ref={ref} type={type} name={name} id={id} className={className}/>
//             <button type="submit">Ajouter</button>
//         </>
//     )
// })

// export default PersForm



// Rajout d'une interface qui définit les props, ajout du forwardRef avec la ref (HTMLInputElement) et les props (l'interface custom)
// //------------------------------------------------------------


// //- Exemple fichier persform
// import { useState } from "react";

// function PersForm () {

//     const [persName, setPersName] = useState<string>("")
//     const [validate, setValidate] = useState<boolean>(false)
//     const [btnDisabled, setBtnDisabled] = useState<boolean>(false)


//     const handleAction = () => {
//         setValidate(!validate)
//         setBtnDisabled(!validate)
//         if (persName.trim() !== "") {
//             //addPers(persName)
//         }
//     }

//     return (
//         <div>
//             <label htmlFor="nom">Prénom: </label>
//             <input type="text" name="nom" id="nom" value={persName} onChange={(e) => setPersName(e.target.value)}/>
//             <button type="button" onClick={handleAction} disabled={btnDisabled}>Ajouter</button>
//         </div>
//     )        
// }

// export default PersForm




//------------------------------------------------------------

//- A vérifier et au besoin, ↓↓
// //! A terminer
// import { forwardRef, FC, ReactNode } from "react";

// interface InbrePersForm {
//     label: string;
//     class: string;
//     type: string;
// }

// interface Props {
//     children?: ReactNode;
//     type: "submit" | "button";
//   }
//   export type Ref = HTMLButtonElement;

// const NbrePersForm: FC<InbrePersForm> = forwardRef<Ref, Props>((props, ref) => {


//     return (
//         <>
//             <label>{props.label}</label>
//             <input 
//                 className = {props.class}
//                 ref = {ref}
//                 {...props}
//                 type = {props.type}
//             />


//             {/* <button type="button" onClick={handleClick} disabled={btnDisabled}>Valider<button>

//             {validate ? createForm() : <p>Quand tu auras validé, tu n'auras plus qu'a rentrerle prénom des personnes qui participent.</p>} */}
//         </>
//     )
// })

// export default NbrePersForm

