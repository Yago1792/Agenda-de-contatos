const Contato = require('../models/ContatoModel');


exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    const loggedAs = req.session.user.email;
    res.render('index', { contatos, loggedAs });
}