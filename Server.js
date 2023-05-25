const express = require('express')

const app = express()


const port =5000
const CheckTime=(req,res,next)=>{
    const currentDate = new Date()
    const currentDay = currentDate.getDay()
    const currentHours = currentDate.getHours()

    if(currentDay == 3 || currentDay == 0 || currentHours<9 || currentHours>17){
        return res.sendFile(__dirname+'/Public/Error.html')
    }

    next()
  

}

app.use(CheckTime)

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/Public/Homepage.html")
})


app.get('/services', (req, res) => {
    res.sendFile(__dirname+"/Public/OurServices.html")
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname+"/Public/Contacts.html")
})

app.listen(port,console.log(`Server running at ${port}`))


app.get('/style.css',(req,res)=>{

    res.sendFile(__dirname+"/Public/style.css")
})