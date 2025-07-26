import express from "express"
import cors from 'cors';
import bcrypt from "bcrypt"


const app= express()
const PORT = 3000 || process.env.PORT

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post("/signup", async(req,res)=>{
    try{
        let {userName, password}=req.body
        if(!userName){
            return res.json({
                message:"userName is required"
            })

        }

        if(!password){
            return res.json({
                message:"password is require",
                data:[],
                success:false
            })
        }

        let result= await bcrypt.hash(password, 10);
        console.log(result)

    }catch(error){
        return res.json({
            message: error.message,
            data:[],
            success:false
        })
    }
})


app.get("/health", (req,res)=>{
    res.json({
        message :"server is live..",
        date:[],
        success: true
    })
})

app.listen(PORT, ()=>{
    console.log(`server listen on the port : ${PORT}`);
    
})