import { useState } from "react";
import { sendEmail } from "@/utils/emailjs";
import { socialLinks } from "@/constants/socialLinks";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "O nome é obrigatório.";
    if (!formData.email.trim()) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido.";
    }
    if (!formData.message.trim())
      newErrors.message = "A mensagem é obrigatória.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // limpa erro ao digitar
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setStatus("Por favor, corrija os erros no formulário.");
      return;
    }

    setStatus("Enviando...");
    const form = e.target as HTMLFormElement;

    try {
      await sendEmail(form);
      setStatus("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      setStatus(`Ocorreu um erro ao enviar sua mensagem: ${error}`);
    }
  };

  return (
    <div className="px-0 md:px-4 mx-auto">
      <div className="flex flex-col text-left">
        <h1 className="!text-4xl font-bold !mb-0 !text-left">Contato</h1>
        <h2>Ver este portfólio retrô te enche de determinação.</h2>
        <hr className="golden mb-4" />
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
          className="rpgui-container framed-golden space-y-4 w-full flex flex-col items-center md:!p-10"
          noValidate
        >
          <div className="rpgui-container framed-grey w-full">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              className={`rpgui-input ${errors.name && "border-red-500"}`}
            />
            {errors.name && (
              <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="rpgui-container framed-grey w-full">
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              className={`rpgui-input w-full ${
                errors.email && "border-red-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="rpgui-container framed-grey w-full">
            <textarea
              name="message"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleChange}
              rows={50}
              style={{ height: "15em" }}
              className={`rpgui-textarea w-full ${
                errors.message && "border-red-500"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="rpgui-button text-white !text-2xl w-[100%] md:w-[50%]"
          >
            <strong>Enviar Mensagem</strong>
          </button>
        </form>

        {status && <p className="mt-4 text-center text-xl">{status}</p>}

        <div className="mt-8">
          <h2 className="text-xl mb-2">
            📡 Você consegue me encontrar nessas tavernas (vulgo redes sociais):
          </h2>
          <div className="flex space-x-4 ml-5">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20"
                title={item.title}
              >
                <img src={item.icon} alt={`${item.title} icon`} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
