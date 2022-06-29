const express = require("express")

const app = express()

app.get("/posts",(req,res)=>{

})

app.listen(3000,()=>{
    console.log(`app is listening at port 3000`)
})