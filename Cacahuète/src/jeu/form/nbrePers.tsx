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

// // TODO
// //! A terminer