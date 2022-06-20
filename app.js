const express = require("express");
require('dotenv').config()
const PORT = process.env.PORT;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session')
const cookieParser = require('cookie-parser')
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const {sequelize}=require('./db')
const Warehouse = require('./models/warehouse');
const Pallet = require('./models/pallet');
const Box = require('./models/box');
const Employee = require('./models/employee')

//const initialiseDb = require('./initialiseDb');
//initialiseDb();
Warehouse.hasMany(Pallet)

Pallet.belongsTo(Warehouse)
Pallet.hasMany(Box)
Box.belongsTo(Pallet)
Warehouse.hasMany(Employee)
Employee.belongsTo(Warehouse)

const port = 3000;
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.use(cookieParser());
app.use(session({
//    secret: process.env.SECRET_KEY,
    secret: "SECRET",
    resave: false,
    saveUninitialized: true,
}));
const handlebars = expressHandlebars({
    handlebars : allowInsecurePrototypeAccess(Handlebars)
})

app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

app.get('/',(req,res)=>{
    res.redirect('/warehouses')
})
app.get('/warehouses', async (req, res) => {
    const warehouses = await Warehouse.findAll();
    res.render('warehouses',{warehouses});
    
});

app.get('/warehouses/:id', async (req, res) => {
    
    const warehouse = await Warehouse.findByPk(req.params.id, {include: {
            model: Pallet,
            include: Box
        }
    });
     res.render('warehouse',{warehouse});
    //res.json(warehouses);
});
app.get('/pallet', async (req, res) => {
    const warehouse = await Warehouse.findAll();
     //res.render('pallets',{pallets});
     res.render('pallet')
});
app.get('/pallet/:id', async (req, res) => {
     const warehouse = await Warehouse.findByPk(req.params.id,
        {include: {
           model: Pallet,
           include: Box}
       })
    
     res.render('pallet',{warehouse});
     

});
app.get('/pallets', async (req, res) => {
    const pallets = await Pallet.findAll();
    res.render('pallets',{pallets});
    
});
// app.get('/newpalletform', async (req, res) => {
//     //const warehouses = await Warehouse.findAll();
//     res.render('newpalletform');
    
// });
app.get('/newboxform', async (req, res) => {
    //const warehouses = await Warehouse.findAll();
    res.render('newboxform');
    
});

app.get('/newwarehouseform', async (req, res) => {
    const warehouse = await Warehouse.findAll();
     res.render('newwarehouseform',{warehouse});
    //  res.json(warehouse)
});
app.get('/newwarehouseform/:id', async (req, res) => {
     const warehouse = await Warehouse.findByPk(req.params.id,
        {include: {
           model: Pallet,
           include: Box}
       })
     res.render('newwarehouseform',{warehouse});

});
app.get('/newpalletform/:id', async (req, res) => {
    const warehouse = await Warehouse.findByPk(req.params.id,
        {include: {
           model: Pallet,
           include: Box}
       })
     res.render('newpalletform',{warehouse});
   
});
app.post('/newwarehouseform', async (req, res) => {
    const newWarehouse = await Warehouse.create(req.body) 
    let warehouseAlert = `${newWarehouse.name} created and added to your database`
    const foundWarehouse = await Warehouse.findByPk(newWarehouse.id)
    if(foundWarehouse){
        res.render('newwarehouseform',{warehouseAlert})
    } else {
        warehouseAlert = 'Failed to add Warehouse'
        res.render('newwarehouseform',{warehouseAlert})
    } 
});

app.post('/newpalletform/:id', async (req, res) => {
    let palletAlert=''
   const newPallet= await Pallet.create({capacity_of_pallet:req.body.capacity_of_pallet, WarehouseId: req.params.id}) 
    
      palletAlert = `Pallet created and added to your database`
     const foundPallet = await Pallet.findByPk(newPallet.id)
    if(foundPallet){
        res.render('newpalletform',{palletAlert})
    } else {
        palletAlert = 'Failed to add Pallet'
        res.render('newpalletform',{palletAlert})
        
    } 
       
        // res.redirect(`/warehouses`)

});


app.get('/newboxform/:id', async (req, res) => {
    const pallet = await Pallet.findByPk(req.params.id
    ,
        {include:  Box
         
       })
     res.render('newboxform',{pallet});
    //  res.json(warehouse)
});
app.post('/newboxform/:id', async (req, res) => {
    let boxAlert=''
   const newBox= await Box.create({box_name:req.body.box_name, PalletId:req.params.id}) 
    
   boxAlert = `Box created and added to your database`
     const foundBox = await Box.findByPk(newBox.id)
    if(foundBox){
        res.render('newboxform',{boxAlert})
    } else {
        boxAlert = 'Failed to add Box'
        res.render('newboxform',{boxAlert})
        
    } 
       
        // res.redirect(`/warehouses`)

});


app.get('/box/:id', async (req, res) => {
     const pallet = await Pallet.findByPk(req.params.id,
        {
           include: Box
       })
   console.log(pallet)
     res.render('box',{pallet});
     

});

app.delete('/pallet/:id', async (req,res) => {
    const deletePallet = await Pallet.destroy({
        where: {id:req.params.id}
    })

    const pallets = await Pallet.findAll();
    res.render('pallet', {pallets})
});


app.delete('/warehouses/:id', async (req,res) => {
    const deleteWarehouse= await Warehouse.destroy({
        where: {id:req.params.id}
    })

    const warehouses = await Warehouse.findAll();
    res.render('warehouses', {warehouses})
});



app.delete('/box/:id', async (req,res) => {
    const deleteBox = await Box.destroy({
        where: {id:req.params.id}
    })

    const boxs = await Box.findAll();
    res.render('box', {boxs})
});

//00000000000000000000000singup and login000000000000000000000000000000000000000000000
//GET new Employee signup form
app.get('/signup', async (req, res) => {
    //render signup form template
    res.render('signup')
})

//GET user logout
app.get('/logout', async (req, res) => {
    req.session.destroy(function(err) {
        res.redirect('/warehouses')
      })
})

//Post Route triggered by signup form submit action
app.post('/signup', async (req,res) =>{
    //access the username, password, and confirmPassword from the form
    const username = req.body.username
    const password = req.body.password
    const confirm = req.body.confirm
    //check that the two password entries match
    if(password!==confirm){
        //if not, signup fails
        let userAlert = 'Signup Failed'
        res.render('signup',{userAlert})
    } else {
        bcrypt.hash(password, saltRounds, async function (err,hash){
            //Add Employee to db based on html form data with hashed password
            const newUser = await Employee.create({'username':username, 'password':hash})
            //Create a userAlert to pass to the template
            let userAlert = `Welcome, ${newUser.username}!`
            //Find newUser in db by id
            const foundUser = await Employee.findByPk(newUser.id)
            if(foundUser){
                //set session user to match username from db
                req.session.userid = foundUser.id
                req.session.username = foundUser.username
                //re-render template
                res.render('signup',{userAlert})
            } else {
                userAlert = 'Signup Failed'
                res.render('signup',{userAlert})
            }
        })
    }
})

//GET Returning Employee Sign in form
app.get('/login', async (req, res) => {
    res.render('login')
})

//Post Route triggered by form submit action
app.post('/login', async (req,res) =>{
    const thisUser = await Employee.findOne({
        where: {
            username: req.body.username
        }
    })
    if(!thisUser){
        let userAlert = 'Sign-in Failed'
        res.render('login',{userAlert})
    } else {
        bcrypt.compare(req.body.password, thisUser.password, async function (err,result){
            if (result){
                //set session user
                req.session.userid = thisUser.id
                req.session.username = thisUser.username
                //re-render template
                let userAlert = `Welcome back, ${thisUser.username}`
                res.render('login',{userAlert})
            } else {
                let userAlert = 'Sign-in Failed'
                res.render('login',{userAlert})
            }
        })
    }
})

//0000000000000000000000000000000000000000000000000000000000000000000
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});