const History = ({Movie, date, time, seats}) => {
    const newDate = date.split('-')
    return(
        <div className={"flex flex-row justify-between my-2 w-full"}>
            <div className={"text-base text-black font-light w-[33%] text-center"}>
                <div>{Movie}</div>
            </div>

            <div className={"text-base text-black font-light w-[33%] text-center"}>
                <div>{newDate[2] + "/" + newDate[1] + "/" + newDate[0] + ", " + time}</div>
            </div>

            <div className={"text-base text-black font-light w-[33%] text-center"}>
                <div>{seats.join(', ')}</div>
            </div>
        </div>
    )
}
 export default History;