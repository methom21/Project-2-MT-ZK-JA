// search db for all cards registered to active user
// manage button listener runs delete or sideline option
const handlebars = require('express-handlebars');
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
    layoutsDir: `${__dirname}/views/layouts`
}));
app.use(express.static(`public`));
app.get('/',(req, res)=>{
    res.render('main', {layout: 'roster'});
});

// Retrieve the template data from the HTML (jQuery is used here).
var template = document.getElementById('#handlebars-demo').html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = { "name" : "Ritesh Kumar", "occupation" : "developer" };

// html = 'My name is Ritesh Kumar. I am a developer.'
var html = templateScript(context);


// Insert the HTML code into the page
$(document.body).append(html);