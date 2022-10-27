const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    res.render('index.html');
   // res.sendFile(path.join(__dirname, 'views/index.html'));
    //console.log(__dirname + '/views/index.html')
    //console.log();
});

router.get('/productos', (req, res) => { 
    res.render('productos.html');
   
});

router.get('/contacto', (req, res) => { 
    res.render('contacto.html');
   
});

module.exports = router;