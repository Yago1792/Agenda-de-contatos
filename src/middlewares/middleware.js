exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
}

// exports.outroMiddleware = (req, res, next) => {
//     console.log('sou seu outro MW');
//     next();
// }  

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        console.log(err);
        return res.render('404');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
        req.flash('errors', 'Voce precisa fazer login');
        req.session.save(() => res.redirect('/login/index'));
        return;
    }
    next();
};   