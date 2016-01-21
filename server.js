/**
 * Created by HaiderNazir on 1/20/2016.
 */
var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;

app.get('/',function(req,res){
   res.send('hello heroku');
});

app.listen(PORT,function(){
    console.log('Express started Listening on PORT ' + PORT);
});