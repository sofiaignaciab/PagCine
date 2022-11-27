import {useState} from "react";

export const Seat = ({id, inUse, seatSelection}) => {

    const [selected, setSelected] = useState(false);
    const onClick = () => {
        if (inUse) return;
        seatSelection(id);
        setSelected(!selected);
    }

    return (
        <div
            className={`${selected ? "bg-primary" : "bg-secondary" } ${inUse ? "bg-danger" : null} text-white`}
            style={{margin: '10px', width: '45px', height: '45px', borderRadius: '5px', display: "inline-flex"}}
            onClick={onClick}
        >
            {id}
        </div>
    )
}