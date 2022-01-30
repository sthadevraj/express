const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

// View Engine Setup
const viewsPath=path.join(__dirname,"./templetes")
const staticPath = path.join(__dirname, "./public");
const partialPath=path.join(__dirname,"./templetes/partials")
// app.use(express.static(staticPath))
app.set('views',viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)
app.get('/', function(req, res){
	res.render('index',{
		name:"devraj stha"
	})
})
app.set('title',"express")
app.listen(8080, function(error){
	if(error) throw error
	console.log("Server created Successfully")
})
