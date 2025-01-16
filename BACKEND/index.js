const express = require('express')

require('./connect')
require('./models/employee')
const emp=require('./models/employee')

const app= express()
app.use(express.json())
// 3 api creation

app.get('/', function (req, res) {
  res.send('Hello World')

})
app.get('/trail', function(reg,res)
{
    res.send('Nannii Ondee')
})
app.post('/add',async(req,res)=>{
  try{
    await emp(req.body).save()
    res.send({message:"Data added"})
  }catch{error}
    {console.log(error)}
    }
    )



app.listen(3006)