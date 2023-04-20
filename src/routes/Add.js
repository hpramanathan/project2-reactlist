// import "./Add.css";
// import { useState } from "react";
// import uuid from "react-uuid";

// export default function Add(props) {

//     const [showManualAddForm, setShowManualAddForm] = useState(false)
//     const [manualName, setManualName] = useState("");
//     const [manualEtym, setManualEtym] = useState("")

//     const handleWord = (e) => {
//         setManualName(e.target.value)
//     }

//     const handleEtym = (e) => {
//         setManualEtym(e.target.value)
//     }

//     const handleManualSubmit = (e) => {
//         e.preventDefault();
//         const newManualTerm = {
//             id: uuid(),
//             name: manualName,
//             etym: manualEtym,
//         };
//         (console.log(newManualTerm));
//         props.handleAddManualTerm(newManualTerm);
//         setManualName("");
//         setManualEtym("")
//     }

//     return (
//         <div className="Add">
//             <h1>Add Your Own Word</h1>

//             <form onSubmit={handleManualSubmit}>
//                 <label>Word:</label>
//                 <input
//                     type="text"
//                     value={manualName}
//                     onChange={handleWord} />
//                 <br />
//                 <label>Etymology:</label>
//                 <input
//                     type="text"
//                     value={manualEtym} 
//                     onChange={handleEtym} />
//                 <br />
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }