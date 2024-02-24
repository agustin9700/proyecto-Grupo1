const express = require("express");
const app = express();
const port = 3030;
const path = require("path");
const partials = require('express-partials');


app.use(express.static('public'));
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, './views'));
app.use(partials())




const homeRoutes = require ('./routes/home.routes');
const authenticationRoutes = require('./routes/user.routes');
const productCartRoutes = require('./routes/productCart.routes');
const productRoutes = require('./routes/product.routes');
const adminRoutes = require("./routes/admin.routes");


const errorPagina = require("./routes/error.routes")

app.use('/', homeRoutes);
app.use('/user', authenticationRoutes);
app.use('/carrito', productCartRoutes);
app.use('/producto', productRoutes);
app.use('/admin', adminRoutes)




app.use("*", errorPagina)

app.listen(port,() => console.log(`http://localhost:${port}`));

