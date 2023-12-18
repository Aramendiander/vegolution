import jwt from "jsonwebtoken";






const isAdmin = async (req,res,next) =>{
    const cookie = req.headers.cookie;
        const token = cookie.split("=")[1];
        const {role} = jwt.verify(token,process.env.JWT_SECRET);
        if (role === 'admin') {
            next();
        } else {
            return res.status(401).json({ error: 'Only for admins' });
        }
}


const isAuthenticatedApi = (req,res,next) =>{
    try{
    console.log("cookies",req.headers.cookie);
    const cookie = req.headers.cookie;
    if (!cookie) {
        return res.status(401).json({error:"authentication failed" });
    }
    const token = cookie.split("=")[1];
    console.log("token",token);

    if(!token){
        return res.status(401).json({error:"authentication failed" });
    }
    
        const {email, role, id} = jwt.verify(token,process.env.JWT_SECRET);
        console.log(email);
        console.log(role)
        req.email = email;
        next();
    }
    catch(error){
        console.log(error)
        res.status(401).json({error:"authentication failed" });
    }
}

export  {
    isAdmin,
    isAuthenticatedApi,
};