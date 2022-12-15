import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";

const Barrita = () => {
    const {logged, user} = useContext(AuthContext);
    return (
        <div className={'navbar flex justify-between px-1 mb-4 bg-[#374151]'}>
            <div>
                <Link className={'px-[15px] text-white no-underline'} to={"/"}>CINEMA 🎟️</Link>
            </div>
            <div className={'flex justify-center mr-2 text-g'}>
                <div className={'flex flex-col justify-center'}>
                    {logged && <Link className={'px-[15px] text-white no-underline'} to={'/profile'}>{user.name}</Link> }
                    {!logged && <Link className={'px-[15px] text-white no-underline'} to={'/login'}>Iniciar sesion</Link> }
                </div>
                <div className={'flex flex-col justify-center'}>
                    <input placeholder={' Buscar...'} className={'w-[20vw] h-8 bg-white border-gray-700 rounded-lg text-black text-lg' } type={'text'}/>
                </div>
            </div>
        </div>
    );
};
export default Barrita;