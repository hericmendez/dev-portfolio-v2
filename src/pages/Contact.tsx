// Contact.tsx
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Futuro: enviar via emailjs ou back-end
    alert("Mensagem enviada com sucesso!");
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

        <div className="mt-8">
          <h2 className="text-xl mb-2">
            📡 Você consegue me encontrar nessas tavernas (vulgo redes sociais):
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              className="rpgui-icon sword"
              title="GitHub"
            />
            <a
              href="https://linkedin.com/in/seuusuario"
              target="_blank"
              className="rpgui-icon shield"
              title="LinkedIn"
            />
            <a
              href="mailto:voce@email.com"
              className="rpgui-icon potion-red"
              title="Email"
            />
            <a
              href="mailto:voce@email.com"
              className="rpgui-icon potion-blue"
              title="Email"
            />
            <a
              href="mailto:voce@email.com"
              className="rpgui-icon potion-green"
              title="Email"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
