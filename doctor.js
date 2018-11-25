exports.demo=function(req,res){
    res.end("working");
}

exports.add=function(req,res){
 
    console.log("post is "+req.body.varname);
    req.session.name=req.body.varname;
    res.redirect('/keyy');
}


exports.login=function(req,res){
    res.render('login_doctor');
}


