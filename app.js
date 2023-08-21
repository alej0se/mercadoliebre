const express=require("express");
const path=require("path");
const app=express();

app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(3000,()=>{
    console.log("Succes");
})

app.get('/', (req, res) => {
    let htmlpath=path.resolve(__dirname, './views/home.html');
    res.sendFile(htmlpath);
})
app.get('/registro', (req, res) => {
    let htmlpath=path.resolve(__dirname, './views/registro.html');
    res.sendFile(htmlpath);
})
app.get('/login',(req,res)=>{
    let htmlpath=path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlpath);
})