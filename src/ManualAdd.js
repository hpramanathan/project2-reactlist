import "./ManualAdd.css";
import { useState } from "react";
import uuid from "react-uuid";

export default function ManualAdd(props) {

    const [manualName, setManualName] = useState("");
    const [manualEtym, setManualEtym] = useState("")

    const handleWord = (e) => {
        setManualName(e.target.value)
    }

    const handleEtym = (e) => {
        setManualEtym(e.target.value)
    }

    const handleManualSubmit = (e) => {
        e.preventDefault();
        const newManualTerm = {
            id: uuid(),
            name: manualName,
            etym: manualEtym,
        };
        (console.log(newManualTerm));
        props.handleAddManualTerm(newManualTerm);
        setManualName("");
        setManualEtym("")
    }

    return (
        <div className="Manual">
            <h1>Add your own word</h1>

            <form onSubmit={handleManualSubmit}>
                <label className="label-word" htmlFor="manualName">Word:</label>
                <input
                    type="text"
                    id="manualName"
                    value={manualName}
                    onChange={handleWord} />
                <br />
                <label htmlFor="manualEtym">Etymology:</label>
                <input
                    className="InputEtym"
                    type="text"
                    id="manualEtym"
                    placeholder="Enter the word's origin here"
                    value={manualEtym} 
                    onChange={handleEtym} />
                <br />
                <button>SUBMIT</button>
            </form>
        </div>
    )
}