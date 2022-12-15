import React from "react";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import History from "./History";
const ProfileCard = () => {
    const {user} = useContext(AuthContext);

    return(
        <div className={'flex justify-center'}>
            <div className="dartboard dartboard-horizontal rounded-xl phone-3 w-[736px] bg-neutral-100 shadow-2xl shadow-zinc-500">
                <div><h1> </h1></div>
                <div className="flex flex-col text-center pb-2">
                    <img
                        src="data:image/jpeg;base64,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"
                        className="rounded-full w-32 mb-4 mx-auto"
                        alt="Avatar"
                    />
                    <h5 className="text-3xl font-light mb-2 text-black">{user.name + " " + user.lastName}</h5>
                    <p className="text-gray-500 font-light text-xl">{user.email}</p>
                    <h3 className="text-cyan-900 font-light">Historial</h3>
                    <div className={'flex flex-col w-[90%] mx-auto mt-2 text-bold'}>
                        <div className={'flex flex-row justify-around font-semibold'}>
                            <div className={"text-base text-black w-[30%]"}>
                                <h1 className={"text-lg text-black"}>Pelicula</h1>
                            </div>

                            <div className={"text-base text-black w-[30%]"}>
                                <h1 className={"text-lg text-black"}>Fecha y hora</h1>
                            </div>

                            <div className={"text-base text-black w-[30%]"}>
                                <h1 className={"text-lg text-black"}>Asientos</h1>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col w-[90%] mx-auto'}>
                        <div>
                            {user.reserved_seats.map((funcion) => <History key={funcion.title} {...funcion}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;