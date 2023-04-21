import { useState } from "react";
import "./Term.css"

export default function Term(props) {

    // State variables for handling editing and selection of terms in list
    const [isEditing, setIsEditing] = useState(false);
    const [editedTermName, setEditedTermName] = useState(props.term.name);
    const [editedTermEtym, setEditedTermEtym] = useState(props.term.etym);
    const [isTermSelected, setTermIsSelected] = useState(false);

    // Check if term is selected
    const isChecked = props.removeSelectedTerms.includes(props.term.id)
    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        props.handleChecked(props.term.id, checked)
    };

    // Handle click for editing
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Handle canceling an edit
    const handleCancelEditClick = () => {
        setIsEditing(false);
        setEditedTermName(props.term.name);
        setEditedTermEtym(props.term.etym);
    };

    // Handle saving an edited term
    const handleEditSaveClick = () => {
        const editedTerm = {
            id: props.term.id,
            name: editedTermName,
            etym: editedTermEtym,
        };
        props.handleEditTerm(editedTerm);
        setIsEditing(false);
    }

    // Handle changes to the term name and etymology during editing
    const handleTermNameChange = (e) => {
        setEditedTermName(e.target.value);
    };

    const handleTermEtymChange = (e) => {
        setEditedTermEtym(e.target.value);
    }

    // Handle click for selecting a term as a favourite
    const handleItemClick = () => {
        setTermIsSelected(!isTermSelected);
    }

    // Renders the Term component with appropriate state and props from Home.js
    return <li className={`RecentList-li ${isTermSelected ? "selected" : ""}`}
               onClick={handleItemClick}>
        {!isEditing && (
            <>
                {props.term.name}
                <input 
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <button type="button" onClick={() => props.removeTerms([props.term.id])}>
                    X
                </button>
                <span>&nbsp; &nbsp; &nbsp;</span>
                <div>
                    <h2>ETYMOLOGY</h2>
                    {props.term.etym}
                    <span>&nbsp; </span>
                    <button type="button" onClick={handleEditClick}>EDIT</button>
                </div>
            </>
        )}

        {isEditing && (
            <div className="termEdit">
                <form onSubmit={handleEditSaveClick}>
                    <label htmlFor="termName">Word:</label>
                    <input
                        type="text"
                        id="termName"
                        value={editedTermName}
                        onChange={handleTermNameChange}
                    />
                    <br />
                    <label htmlFor="termEtym">Etymology:</label>
                    <input 
                        type="text"
                        id="termEtym"
                        value={editedTermEtym}
                        onChange={handleTermEtymChange}
                    />
                    <br />
                    <button type="submit">SAVE</button>
                    <button type="button" onClick={handleCancelEditClick}>CANCEL</button>
                </form>
            </div>
        )}
    </li>
}