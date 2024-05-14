import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "17c5f2ce-d156-4608-b270-f5d9b5b0a3e7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Contáctame</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>¡Hablemos!</h1>
          <p>
            Actualmente estoy disponible para asumir un nuevo proyecto, así que no
            dudes en enviarme un mensaje sobre cualquier cosa en la que quieras que
            trabaje. Puedes contactar en cualquier momento.
          </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt="" /> <p>emi.emilioramirez@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt="" /> <p>+54 2323 527519</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt="" /> <p>Bs.As., Argentina</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Su nombre</label>
          <input type="text" placeholder='Introduzca su nombre' name='name' />
          <label htmlFor="">Tu email</label>
          <input type="email" placeholder='Introduce tu email' name='email' />
          <label htmlFor="">Escriba su mensaje aquí</label>
          <textarea name="message" rows='8' placeholder='Ingrese su mensaje'></textarea>
          <button type='submit' className='contact-submit'>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
