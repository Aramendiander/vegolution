import jwt from "jsonwebtoken";


const isAuthenticated = (req,res,next) => 
{
    if(req.session.user_id){
        res.locals.isAuthenticated = true;
        res.locals.username = req.session.username;
        next();
    }
    else{
        res.locals.isAuthenticated = false;
        next();
    }
}

const authWall = (req,res,next) => 
{
    if(req.session.user_id){
        next();
    }
    else{
        res.redirect("/login");
    }
}

const isAdmin = async (req,res,next) =>{
    if(req.session.role !== "admin"){
            res.redirect("/admin/login");
    }
    else{
        next();
    }
}


const isAuthenticatedApi = (req,res,next) =>{
    try{
    console.log("cookies",req.headers.cookie);
    const cookie = req.headers.cookie;
    const token = cookie.split("=")[1];
    console.log("token",token);

    if(!token){
        return res.status(401).json({error:"authentication failed" });
    }
    
        const {email} = jwt.verify(token,process.env.JWT_SECRET);
        console.log(email);
        req.email = email;
        next();
    }
    catch(error){
        console.log(error)
        res.status(401).json({error:"authentication failed" });
    }
}

export  {
    isAuthenticated,
    authWall,
    isAdmin,
    isAuthenticatedApi,
};