import { useState } from "react";
import {tours} from "../data";
import Modal from "../components/Modal";
function Narucivanje(){
    /** */
    const [openModal, setOpenModal] = useState(false);

    function prikazi(){
        setOpenModal(true);
    }
    const [ime,setIme]=useState("");
    const[prezime,setPrezime]=useState("");
    const[mail,setMail]=useState("");
    const[telefon,setTelefon]=useState("");
    const[proizvod,setProzivod]=useState("");
    return(
        <div className="center">
            <h3>Naručite <span>online</span></h3>
            <div id='poruci'>
                <form >
                    <input type="text" placeholder='Ime' className='polje' onInput={(e) => { setIme(e.target.value);}} />
                    <input type="text" placeholder='Prezime' className='polje' onInput={(e) => { setPrezime(e.target.value);}} />
                    <input type="email" placeholder='Mail' className='polje' onInput={(e) => { setMail(e.target.value); }} />
                    <input type="text" placeholder='Broj telefona' className='polje' onInput={(e) => { setTelefon(e.target.value);}} />
                    <select name="prozivod" className='polje' onChange={(e) => { setProzivod(e.target.value) }} >
                        {tours.map((item) => (
                            <option key={item.id} >{item.title}</option>
                        ))}

                    </select>
                    <button onClick={(e) => { e.preventDefault(); prikazi() }} className='dugme'>Poruči</button>
                </form>
            </div>
            <Modal 
            open={openModal} 
            onClose={() => setOpenModal(false)} 
            ime= {ime}
            prezime= {prezime}
            mail= {mail}
            telefon= {telefon}
            proizvod= {proizvod}
            />
        </div>
        
       
    );
}
export default Narucivanje;