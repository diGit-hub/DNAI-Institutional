function AIChat() {
  return (
    <section className="max-w-4xl mx-auto px-6 mt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-headline font-bold text-on-primary-fixed mb-3">
          Converse com sua Saúde
        </h2>
        <p className="text-on-secondary-container max-w-2xl mx-auto text-base">
          Tire dúvidas sobre seus exames, entenda resultados e receba insights personalizados
          do nosso assistente de IA.
        </p>
      </div>

      <div className="glass rounded-3xl p-6 md:p-8">
        <div className="space-y-5">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-white text-sm">smart_toy</span>
            </div>
            <div className="bg-surface-container rounded-2xl rounded-tl-sm p-4 max-w-[80%]">
              <p className="text-sm text-on-primary-fixed">
                Olá! Analisei seus últimos exames. Seu LDL está em 95mg/dL, que está
                dentro da faixa ideal. Quer que eu explique mais sobre seus resultados?
              </p>
            </div>
          </div>

          <div className="flex gap-3 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-blue-600 text-sm">person</span>
            </div>
            <div className="bg-on-tertiary-container text-white rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
              <p className="text-sm">
                Sim! O que significa esse resultado do LDL? Deveria me preocupar?
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-white text-sm">smart_toy</span>
            </div>
            <div className="bg-surface-container rounded-2xl rounded-tl-sm p-4 max-w-[80%]">
              <p className="text-sm text-on-primary-fixed">
                LDL é o colesterol "ruim". Seu resultado de 95mg/dL está excelente!
                A faixa ideal é abaixo de 100mg/dL. Continue com sua alimentação equilibrada
                e exercícios regulares. 😊
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-outline-variant/20">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Digite uma mensagem..."
              className="flex-1 bg-white/80 rounded-full px-4 py-3 text-sm text-on-primary-fixed placeholder:text-on-surface-variant/50 border border-white/20 outline-none"
            />
            <button className="bg-primary-container text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIChat
