export default function Term(props) {
    return <li className="RecentList-li">
        {props.term.name}
        <input type="checkbox" />
        <button type="button" onClick={() => props.removeTerms([props.term.id])}>
            X
        </button>
        <div className="RecentList">
            <h2 className="Home-h2">ETYMOLOGY</h2>
            {props.term.etym}
        </div>
    </li>
}