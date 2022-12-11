import React from "react";

const History = ({title, date, seats}) => {
    return(
        <div className={"flex flex-nowrap justify-around mb-2"}>
            <div className={"text-base text-black font-light"}><h1 className={"text-lg text-black font-light"}>Pelicula</h1>
            <div>{title}</div>
            </div>

            <div className={"text-base text-black font-light"}><h1 className={"text-lg text-black font-light"}>Fecha/hora</h1>
                <div>{date}</div>
            </div>

            <div className={"text-base text-black font-light"}><h1 className={"text-lg text-black font-light"}>Pelicula</h1>
                <div>{seats}</div>
            </div>
        </div>
    )
}
 export default History;