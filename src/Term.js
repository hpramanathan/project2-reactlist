import "./Term.css"

export default function Term(props) {

    const isChecked = props.removeSelectedTerms.includes(props.term.id)
    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        props.handleChecked(props.term.id, checked)
    }

    return <li className="RecentList-li">
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
            <button type="button">EDIT</button>
        </div>
    </li>
}