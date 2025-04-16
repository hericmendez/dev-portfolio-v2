/* eslint-disable @typescript-eslint/no-explicit-any */
import emailjs from '@emailjs/browser';

// Função para enviar o formulário
export const sendEmail = (form: HTMLFormElement): Promise<any> => {
  return emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID as string, // ID do serviço
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string, // ID do template
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string // ID do usuário
    )
    .then(
      (response) => {
        console.log('E-mail enviado com sucesso!', response);
        return response;
      },
      (error) => {
        console.error('Erro ao enviar e-mail:', error);
        throw error;
      }
    );
};
