/**
 * Created by HaiderNazir on 1/20/2016.
 */
var miidleware={
  requireAuthentication:function(req,res,next) {
      console.log('private Rout hit');
      next();
  },
    logger:function(req,res,next){
        console.log('Request : ' + req.method + ' ' + new Date().toString());
        next();
    }
};

module.exports=miidleware;