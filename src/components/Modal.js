
import modalSlika from "../images/modal.png";

function Modal({ open, onClose,ime,prezime,mail,telefon,proizvod }){
  if (!open) return null;
  return (
    <div className='overlay'>
      <div className='modalContainer'>
        <div className="modalLeft">
          <img src={modalSlika} alt='/' />
        </div>
        
        <div className='modalRight'>
          <button className='closeBtn' onClick={onClose}>
            X
          </button> 
          <h3>PODACI</h3>
          <div className='content'>
            <h4><b>Ime:</b> {ime}</h4>
            <h4><b>Prezime:</b> {prezime}</h4>
            <h4><b>E-mail:</b> {mail}</h4>
            <h4><b>Telefon:</b> {telefon}</h4>
            <h4><b>Izabrani proizvod:</b> {proizvod}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;