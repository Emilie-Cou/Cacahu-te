// // Secret Santa Challenge 🎁 - JavaScript

// //- Idée de gestion de logique 1
// // List of participants for 'Secret Santa' 🎁
// let names1 = [
//     "Michel Scott", "Dwight Schrute", "Jim Halpert",
//     "Pam Beesly", "Jan Levinson", "Kevin Malone",
//     "Toby Flenderson", "Angela Martin", "Andy Bernard",
//     "Stanley Hudson", "Ryan Howard", "Kelly Kapoor"
// ];

// // The bowl that holds the names to draw from. -- create a copy list. (shallow)
// let bowl_of_names = names1.concat();

// // Check to see who has chosen a name
// for (let participants in names1) {

//     // Establish a random index (aka person) to choose from the 'bowl'
//     let random = Math.floor(Math.random() * bowl_of_names.length);

//     // *person draws paper with name on it from bowl and remembers choice, 'secretly'*
//     console.log(`🎁: ${names1[participants]} drew from the bowl of names.... and received 
//    ${bowl_of_names[random]} as their secret santa.`);

//     // removes name from 'bowl'
//     let chosen_from_bowl = bowl_of_names.indexOf(bowl_of_names[random]);
//     bowl_of_names.splice(chosen_from_bowl, 1);

// };


// // --------------------------------------------------------


// //- Idée de gestion de logique 2
// let names2 = [
//     "Michel Scott", "Dwight Schrute", "Jim Halpert",
//     "Pam Beesly", "Jan Levinson", "Kevin Malone",
//     "Toby Flenderson", "Angela Martin", "Andy Bernard",
//     "Stanley Hudson", "Ryan Howard", "Kelly Kapoor"
// ];

// function getRandomName(array) {
//     let test = names2[Math.floor(Math.random()* array.length)]
//     console.log(test);
//     return test
// }

// function pairParticipants(array){
//     const pairs = [{}]
//     while (array.length > 0) {
//         let secretSanta = getRandomName(names2)
//         array.splice(array.indexOf(secretSanta), 1)
//         let elf = getRandomName(names2)
//         array.splice(array.indexOf(elf), 1)
//         pairs.push({secretSanta : secretSanta, elf : elf})
//     }
//     console.log(pairs);
// }

// pairParticipants(names2)


// // --------------------------------------------------------


// //- Idée de gestion de logique 3
// var people = [
//     "Michel Scott", "Dwight Schrute", "Jim Halpert",
//     "Pam Beesly", "Jan Levinson", "Kevin Malone",
//     "Toby Flenderson", "Angela Martin", "Andy Bernard",
//     "Stanley Hudson", "Ryan Howard", "Kelly Kapoor"
// ];

// var pair = function(arr) {
//   var result = [{}];
//   var recipients = arr.slice();
//   var len = arr.length;
//   for (var i = 0; i < len; i++) {
//     var sender = arr[i];		
//     var recipientIndex = Math.floor(Math.random() * recipients.length);
//     while (recipients[recipientIndex] === sender) {
//     	// Can't send gift to myself
//       recipientIndex = Math.floor(Math.random() * recipients.length);
//     }
//     var recipient = recipients.splice(recipientIndex, 1)[0];
//     result.push({
//       sender: sender,
//       receiver: recipient
//     });
//   }
//   return result;
// };

// // 
// console.log(pair(people));


// // --------------------------------------------------------


// //- Idée gestion changement page/composant
// import Presentation from './src/présentation/présentation';
// import Jeu from './src/jeu/jeu';

// function Comments() {

//     const [writeComment, setWriteComment] = useState(true);

//     const handleAction = function () {
//       setWriteComment(!writeComment);
//     };
  
//     return (
//       <>    
//         <h1>Livre d'or</h1>
//         <div id="sidebar">
//           <button onClick={handleAction}>
//             {writeComment ? "Laisser un Commentaire" : "Livre D'Or"}
//           </button>
//           {writeComment ? <Presentation /> : <Jeu />}
//         </div>
//       </>
//     )
// }


// // --------------------------------------------------------


// //- Test form nom personne
// import React, { useState } from "react";

// interface PersFormProps {
//   onAddPerson: (name: string) => void;
// }

// const PersForm: React.FC<PersFormProps> = ({ onAddPerson }) => {
//   const [personName, setPersonName] = useState<string>("");

//   const handleAction = () => {
//     if (personName.trim() !== "") {
//       onAddPerson(personName);
//       setPersonName(""); // Réinitialise le champ après l'ajout
//     }
//   };

//   return (
//     <div>
//       <label htmlFor="nom">Prénom: </label>
//       <input
//         type="text"
//         name="nom"
//         id="nom"
//         value={personName}
//         onChange={(e) => setPersonName(e.target.value)}
//       />
//       <button type="button" onClick={handleAction}>
//         Ajouter
//       </button>
//     </div>
//   );
// };

// export default PersForm;


// --------------------------------------------------------


// //- jeu.tsx V1, avant redux
// import React, { useState } from "react";
// import PersForm from "./form/persForm";

// function Jeu () {
    
//     const test : number = 4
//     const [nbre, setNbre] = useState<number>(test)
//     const [validate, setValidate] = useState<boolean>(false)
//     const [btnDisabled, setBtnDisabled] = useState<boolean>(false)
//     const [list, setList] = useState<[string]>()

//     const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
//         setNbre(parseInt(e.target.value))
//     }

//     const onClick = () => {
//         setValidate(!validate)
//         setBtnDisabled(!btnDisabled)
//     }
    
//     const createForm = () => {
//         const forms : JSX.Element[] = []
//         for (let i = 0; i < nbre; i++) {
//             forms.push(<PersForm key={i} />)
//         }
//         return forms
//     }

//     return (
//         <>
//             <form className="formJeu" method="post">
            
//                 <label htmlFor="nbreJoueur">Entre le nombre de personne: </label>
//                 <input type="number" name="nbreJoueur" value={nbre} onChange={handleChange}/>
//                 <h4>Vous êtes {nbre} personnes.</h4>
//                 <button type="button" onClick={onClick} disabled={btnDisabled}>Valider</button>
                
//                 {validate ? createForm() : <p>Quand tu auras validé, tu n'auras plus qu'a rentrer le prénom des personnes qui participent.</p>}
                
//                 <button type="button">Valider</button>
            
//             </form>
//         </>
//     )
// }

// export default Jeu


// --------------------------------------------------------


// //- Form avec useWatch pour adapter la valeur au changement
// import React from "react"
// import { useForm, useWatch } from "react-hook-form"


// interface FormInputs {
//   firstName: string
//   lastName: string
// }


// function FirstNameWatched({ control }: { control: Control<FormInputs> }) {
//   const firstName = useWatch({
//     control,
//     name: "firstName", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
//     defaultValue: "default", // default value before the render
//   })


//   return <p>Watch: {firstName}</p> // only re-render at the custom hook level, when firstName changes
// }


// function App() {
//   const { register, control, handleSubmit } = useForm<FormInputs>()


//   const onSubmit = (data: FormInputs) => {
//     console.log(data)
//   }


//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>First Name:</label>
//       <input {...register("firstName")} />
//       <input {...register("lastName")} />
//       <input type="submit" />


//       <FirstNameWatched control={control} />
//     </form>
//   )
// }


// // --------------------------------------------------------

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface FormData {
  joueurs: {
    firstname: string;
  }[];
}

const NbreJoueurs = 5;

const MonComposant = () => {
  const [form, setForm] = useState<string[][]>([]);
  const [btnDisabled, setBtnDisabled] = useState<boolean[]>(Array(NbreJoueurs).fill(false));
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const newBtnDisabled = [...btnDisabled];
    newBtnDisabled.forEach((value, index) => {
      newBtnDisabled[index] = !value;
    });
    setBtnDisabled(newBtnDisabled);
    if (data.joueurs) {
      const prenoms = data.joueurs.map((joueur) => joueur.firstname);
      setForm((prevForm) => [...prevForm, prenoms]);
    }
  };

  const onSubmit = (data: any) => {
    const newBtnDisabled = [...btnDisabled];
    newBtnDisabled.forEach((value, index) => {
        newBtnDisabled[index] = !value;
    });
    setBtnDisabled(newBtnDisabled);
    if (data.joueurs) {
        const prénoms = data.joueurs.map((joueur: any) => joueur.firstname);
        form.push(prénoms);
        dispatch(setJeu(form));
    }
};

  const createFormAurelien = (): JSX.Element[] => {
    const formElements: JSX.Element[] = [];

    for (let i = 0; i < NbreJoueurs; i++) {
      formElements.push(
        <Controller
          key={i}
          control={control}
          name={`joueurs.${i}.firstname`}
          render={({ field }) => (
            <div>
              <input {...field} type="text" placeholder="Prénom" />
              <button type="submit" disabled={btnDisabled[i]}>
                Ajouter
              </button>
            </div>
          )}
        />
      );
    }

    return formElements;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {createFormAurelien()}
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default MonComposant;