const ResumePage = () => {
  return (
    <div className="px-4 mx-auto">
      <div className="flex flex-col text-left">
        <h1 className="!text-4xl font-bold !mb-0 !text-left">
          Meu Currículo Dev
        </h1>
        <h2>
          Por favor, aceite estes pergaminhos de sabedoria.
        </h2>
        <hr className="golden mb-4" />
      </div>



      <section className="mb-6 ">
        <div className="flex flex-col flex-mb-row gap-3">
        <a href="/resume/HERIC_VINICIUS-MENDES_DEV_RESUME(PT).pdf" download="HERIC_VINICIUS-MENDES_DEV_RESUME(PT).pdf"
          target="_blank">
          <button className="rpgui-button text-white min-h-[100px] md:min-h-[70px] w-full md:w-[500px] mt-3">
            {" "}
            <strong>⬇️ Baixar CV em Português</strong>
          </button>
        </a>
        <a href="/resume/HERIC_VINICIUS-MENDES_DEV_RESUME(PT).pdf" download="HERIC_VINICIUS-MENDES_DEV_RESUME(EN).pdf"
          target="_blank">
          <button className="rpgui-button text-white min-h-[100px] md:min-h-[70px] w-full md:w-[500px] mt-3">
            {" "}
            <strong>⬇️ Download Resume in English </strong>
          </button>
        </a>
        </div>

      </section>
    </div>
  );
};

export default ResumePage;
