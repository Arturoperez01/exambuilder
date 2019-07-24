const express = require('express'),
    path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,'./dist/angular-forms-example')));

app.use('/',function(req,res){
  res.sendFile(path.join(__dirname,'./dist/angular-forms-example','index.html'))
});
const port = process.env.PORT || 80;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});