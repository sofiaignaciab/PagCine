import {useState} from "react";

export const Seat = ({id, inUse, seatSelection}) => {

    const [selected, setSelected] = useState(false);
    const onClick = () => {
        if (inUse) return;
        seatSelection(id);
        setSelected(!selected);
    }

    return (
        <div className={'m-1 inline-flex'}>
            <div
                className={`flex flex-col justify-center w-[40px] h-[40px] m-auto rounded-lg inline-flex ${selected ? "bg-primary" : "bg-secondary" } ${inUse ? "bg-danger" : null} text-white text-xl hover:cursor-pointer`}
                onClick={onClick}
            >
                {id}
            </div>
        </div>
    )
}