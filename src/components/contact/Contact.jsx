import emailjs, { send } from "emailjs-com";
import "../contact/contact.css";

const Contact = () => {
  const handlesubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    let sendEmail = "";

    if (form.where.value === "GBA") {
      sendEmail = "zonanorte@martincesarsky.com.ar";
    } else if (form.where.value === "CABA") {
      sendEmail = "info@martincesarksy.com.ar";
    }

    const templateParams = {
      from_name: form.name.value,
      number: form.number.value,
      from_email: form.email.value,
      message: form.message.value,
      to_email: sendEmail,
    };

    const serviceID = "service_8orziyc";
    const templateID = "template_kwzkqs8";
    const publicKey = "9kc7Ztm86wijQM7vx";

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    form.reset();
  };

  return (
    <section className="contactContainer" id="contacto">
      <div className="contact">
        <h2>Contacto</h2>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            required
          />
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Celular"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <select name="where" id="where">
            <option value="CABA">C.A.B.A</option>
            <option value="GBA">GBA</option>
          </select>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Mensaje"
            className="area"
            required
          />
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
