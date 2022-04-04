var express = require("express")
var app = express()
const bodyParser=require('body-parser');

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());




const dummyProject={
    auther:'aliraza',
    imageUrl:'https://getwallpapers.com/wallpaper/full/f/3/a/807159-download-funny-cats-wallpapers-1920',
    videoUrl:'https://youtu.be/SkgTxQw9DWM',
    uniqueID:'4',
    description:'We want to create an environmental and dogs free farm for cats',
    title:'CatsFarm'
}
let dummyData=[dummyProject,dummyProject]

app.get("/api/projects",(req,res) => {
    console.log('projects requested')


    res.send(dummyData)
});




const addNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 + num2;
    return result;
}

app.get("/addTwoNumbers",(req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1,number2)
    res.json({statusCode: 200, data: result, message:"Success"})
})

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
})