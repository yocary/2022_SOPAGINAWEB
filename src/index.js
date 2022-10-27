const express = require('express');
const { restart } = require('nodemon');
const app =  express();
const path = require('path');

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs' )

//rutas
app.use(require('./routes/index'));

//escuchando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
