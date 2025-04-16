import { useState } from "react";
import { sendEmail } from "@/utils/emailjs";
import icons from "@/assets/images/icons";

const { facebook, github, gmail, linkedin, steam, whatsapp } = icons;

const ContactPage = ()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    const form = e.target as HTMLFormElement;

    try {
      await sendEmail(form);
      setStatus("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" }); // Limpar formulário após sucesso
    } catch (error) {
      setStatus(`Ocorreu um erro ao enviar sua mensagem: ${error}`);
    }
  };

  return (
    <div className="px-5 text-white flex flex-col justify-center">
      <div className="flex flex-col text-left">
        <h1 className="!text-4xl font-bold !mb-0 !text-left">Contato</h1>
        <h2>
          Ver este portfólio inspirado em games retrô te enche de determinação.
        </h2>
        <hr className="golden mb-0" />
      </div>

      <section className="rpgui-container framed-gresy p-5 mb-4">
        <p className="mb-6 !text-xl">
          Se gostou do meu trabalho, contrate meus serviços de caçador de
          recompensas!
          <br />
          Ou apenas me envie uma mensagem para trocar ideias sobre a vida, o
          universo e tudo mais.
        </p>

        <form
          onSubmit={handleSubmit}
          className="rpgui-container framed-golden space-y-4 w-full flex flex-col items-center !p-10"
        >
          <div className="rpgui-container framed-grey w-full">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              className="rpgui-input "
            />
          </div>

          <div className="rpgui-container framed-grey w-full">
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              className="rpgui-input w-full"
            />
          </div>

          <div className="rpgui-container framed-grey w-full">
            <textarea
              name="message"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleChange}
              className="rpgui-textarea w-full h-32"
            />
          </div>

          <button type="submit" className="rpgui-button  !text-2xl w-[50%]">
            <span>Enviar Mensagem</span>
          </button>
        </form>

        {status && <p className="mt-4 text-center text-xl">{status}</p>}

        <div className="mt-8">
          <h2 className="text-xl mb-2">
            📡 Você consegue me encontrar nessas tavernas (vulgo redes sociais):
          </h2>
          <div className="flex space-x-4 ml-5">
            <a
              href="https://github.com/hericmendez"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20"
              title="GitHub"
            >
              <img src={github} alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/hericmendes/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-20 h-20"
            >
              {" "}
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=heric.mendez00@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20"
              title="Email"
            >
              {" "}
              <img src={gmail} alt="gmail icon" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5516993868494"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20"
              title="Whatsapp"
            >
              {" "}
              <img src={whatsapp} alt="gmail icon" />
            </a>
            <a
              href="https://www.facebook.com/heric.mendes/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20"
              title="Facebook"
            >
              {" "}
              <img src={facebook} alt="facebook icon" />
            </a>
            <a
              href="https://steamcommunity.com/id/revimaxinga/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20"
              title="Steam"
            >
              {" "}
              <img src={steam} alt="steam icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;