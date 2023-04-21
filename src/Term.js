import { useState } from "react";
import "./Term.css"

export default function Term(props) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTermName, setEditedTermName] = useState(props.term.name);
    const [editedTermEtym, setEditedTermEtym] = useState(props.term.etym);
    const [isTermSelected, setTermIsSelected] = useState(false);

    const isChecked = props.removeSelectedTerms.includes(props.term.id)
    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        props.handleChecked(props.term.id, checked)
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEditClick = () => {
        setIsEditing(false);
        setEditedTermName(props.term.name);
        setEditedTermEtym(props.term.etym);
    };

    const handleEditSaveClick = () => {
        const editedTerm = {
            id: props.term.id,
            name: editedTermName,
            etym: editedTermEtym,
        };
        props.handleEditTerm(editedTerm);
        setIsEditing(false);
    }

    const handleTermNameChange = (e) => {
        setEditedTermName(e.target.value);
    };

    const handleTermEtymChange = (e) => {
        setEditedTermEtym(e.target.value);
    }

    const handleItemClick = () => {
        setTermIsSelected(!isTermSelected);
    }

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