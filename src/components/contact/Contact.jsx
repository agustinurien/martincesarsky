import emailjs from 'emailjs-com';
import "../contact/contact.css";
const Contact = () => {
    const handlesubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const templateParams = {
            from_name: form.name.value,
            number: form.number.value,
            from_email: form.email.value,
            message: form.message.value
        };
        
        const serviceID = 'service_8orziyc';
        const templateID = 'template_kwzkqs8';
        const publicKey = '9kc7Ztm86wijQM7vx';

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        form.reset();
    }
  return (
    <section className='contactContainer'>

    <div className='contact'>
        <h2>Contacto</h2>
        <form onSubmit={handlesubmit}>

            <input type="text" id='name' name='name' placeholder='Nombre' required />
            <input type="number" id='number' name='number' placeholder='Celular' required />
            <input type="email" id='email' name='email' placeholder='Email' required />
            <textarea type="text" id='message' name='message' placeholder='Mensaje' className='area' required />
            <button>Enviar</button>

        </form>
    </div>
    </section>

  )
}

export default Contact