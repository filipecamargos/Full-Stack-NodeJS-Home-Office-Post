/*************************************************
 * GET CONTROLER FOR HOME | LOGIN | SING UP
 * ***********************************************/
//This controller will handle the home page
exports.home = (req, res, next) => {
    res.render('pages/home', {
        title: 'HOME OFFICE POST | Home',
        home: true,
        login: false,
        singUp: false
    });
};

//This controller will handle the GET Login Page
exports.getLogin = (req, res, next) => {
    res.render('pages/login', {
        title: 'HOME OFFICE POST | Login',
        home: false,
        login: true,
        singUp: false
    });
};

//This controller will handle the GET Sing Up page
exports.getSignUp = (req, res, next) => {
    res.render('pages/signup', {
        title: 'HOME OFFICE POST | Sign Up',
        home: false,
        login: false,
        singUp: true
    });
};

/*************************************************
 * POST CONTROLER FOR LOGIN | SING UP
 * ***********************************************/
//This controller will handle the POST Login Page
exports.postLogin = (req, res, next) => {
    res.redirect('/')
};

//This controller will handle the POST Login Page
exports.postSingUp = (req, res, next) => {
    res.redirect('/')
};