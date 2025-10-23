function enviarMensagemWhatsApp(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !mensagem) {
        alert("Por favor, preencha todos os campos antes de enviar!");
        return;
    }

    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const numeroWhatsApp = '5528999200777';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(urlWhatsApp, '_blank');

    document.getElementById('nome').value = '';
    document.getElementById('mensagem').value = '';
}
