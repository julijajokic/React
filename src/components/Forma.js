function Forma() {


    return (
        <div className="center">
            <h3>Pišite <span>nam</span></h3>
            <div id='kontakt'>
                <form >
                    <input type="text" placeholder='Ime' className='polje' />
                    <input type="text" placeholder='Prezime' className='polje' />
                    <input type="email" placeholder='Mail' className='polje' />
                    <input type="text" placeholder='Poruka' className='polje' />
                    <button onClick={() => { alert('Uspesno ste se poslali poruku!'); }} className='dugme'>Pošalji</button>
                </form>
            </div>

        </div>

    );
}
export default Forma;