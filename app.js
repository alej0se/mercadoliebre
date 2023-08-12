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