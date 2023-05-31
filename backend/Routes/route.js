const { Router } = require("express");
// const moment = require("moment")


const router = Router();

// Models
const UserModel = require('../model/logRegmodel')
const AgentModel = require('../model/agentmodel')
const AppoModel = require('../model/appointment')
const CatModel = require('../model/categoryModel')
const ctModels = require('../model/contactmodel')





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// get data for dashboard
router.get("/dashboard/get",async (req, res) => {
    try {
        const userData = await UserModel.find({});
        res.send({ status: "ok", userData: userData})
    
    } catch (error) {
        console.log(`BED error : ${error}`);
    }
});


// Update
router.put("/:id", async (req, res) => {
    try {
      const post = await UserModel.findByIdAndUpdate(
        req.params.id,
        {  name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
          address: req.body.address },
        { new: true }
      );
      if (!post) 
      {return res.status(404).send("Data not found");}
      else
      {res.send(post);}
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Get a single post by id
  router.get("/:id", async (req, res) => {
    try {
      const post = await UserModel.findById(req.params.id);
      if (!post) {
        return res.status(404).send("Data not found");
      }
      else{
        res.send(post);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Delete 
  router.delete("/:id", async (req, res) => {
    try {
      const post = await UserModel.findByIdAndRemove(req.params.id);
      if (!post){
        return res.status(404).send("Data not found");
      } 
      else{
        res.send(post);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
  


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//root route
router.get('/',(req,res)=>{
    res.send('Server is running happily..!')
})


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//register
router.post('/register',async(req,res)=>{
    let {name, username, email, password, phone, address, role, agentusername,agentimage,agentdescription} = req.body;
    // res.json(user);
    try {
        const newUser = new UserModel({
            name:name,
            username:username,
            email:email,
            password:password,
            phone:phone,
            address:address,
            role:role,
            agentusername:agentusername,
            agentimage:agentimage,
            agentdescription:agentdescription
        })
        const result = await newUser.save()
        res.send(result);
        
    } catch (error) {
        res.send(error)
    }
})


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//login
router.post('/login',async(req,res)=>{
    // console.log(req.body);
    let userData = req.body;

    const{username, password} = userData;

    const result = await UserModel.find({username:username})
    
    // res.send({msg:'Data Rcvd'})
    if(result === null){
        res.send({msg:'User not found..!'})
        console.log(`Result : ${result}`);
    }
    else{
        console.log(`Result : ${result}`);
        console.log(result[0].password, password);

        if(result[0].password===password){
            // res.send({msg:'Login Success'});
            if(result[0].role==='admin'){
                res.send({msg:'Admin Logged Successfully'})
            }
            else if(result[0].role==='agent'){
                res.send({msg:'Agent Logged Successfully',agentId:result[0].agentusername})
            }
            else{
                res.send({msg:'User-Login Success'})
            }
        }
        else{
            res.send({msg:'Wrong Credentials'})
        }
    }
})


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// add category
router.post("/category/add", (req, res) => {
    const categoryDetail = req.body;

    // console.log("Category Detail >>>>", categoryDetail);

    CatModel.create(categoryDetail)
    .then(() => {
        res.status(201).send(categoryDetail);
    })
    .catch((err) => {
        res.status(500).send(err.message);
            console.log(err);
    });

});

// get category
router.get("/category/get",async (req, res) => {
    try {
        const catPro = await CatModel.find({});
        res.send({ status: "ok", catdata: catPro})
    
    } catch (error) {
        console.log(`BED error : ${error}`);
    }
});


// Delete category
router.delete("/category/:id", async (req, res) => {
    try {
      console.log('delete route hit hogya...');
      const post = await CatModel.findByIdAndDelete(req.params.id);
      if (!post){
        return res.send({msg:"Data heniiiiii"});
      } 
      else{
        res.send(post);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
  


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// add property
router.post("/properties/add", (req, res) => {
    const propertyDetail = req.body;
  
    console.log("Product Detail >>>>", propertyDetail);

    AgentModel.create(propertyDetail)
    .then(() => {
        res.status(201).send(propertyDetail);
    })
    .catch((err) => {
        res.status(500).send(err.message);
            console.log(err);
    });

  });


// get property
router.get("/property/get",async (req, res) => {
    try {
        const alPro = await AgentModel.find({});
        res.send({ status: "ok", data: alPro})
    
    } catch (error) {
        console.log(error);
    }
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// get agent property
router.get("/agentproperty/get/:id",async (req, res) => {
    try {
        let agentId = req.params.id;
        const alPro = await AgentModel.find({agentusername:agentId});
        res.send({ status: "ok", data: alPro})
    
    } catch (error) {
        console.log(error);
    }
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Book Appointment
router.post('/bookappointment',async(req,res)=>{
    const {name, email, phone, message, propertyDetails } = req.body.body  //propertyDetail
    console.log(req.body.body);
    const appoint = new AppoModel({
        name,
        email,
        phone,
        message,
        propertyDetails
    })
    try {
        const result = await appoint.save();
        res.send({message: "Appointment Booked Successfully"});
        console.log(result);
    } catch (error) {
        res.send(error);
    }
        
})


// get data for bookappointment

router.get("/bookappo/:id", async (req, res) => {
  try {
    const post = await AgentModel.findById(req.params.id);
    if (!post) {
      return res.status(404).send("Data not found");
    }
    else{
      res.send(post);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// get appointment data for agent
// router.get("/book/getdata",async (req, res) => {
//   try {
//     const data = await AppoModel.findById(req.params.id);

//       const userData = await AppoModel.find({"propertyDetails.agentusername":data});
//       res.send({ status: "ok", userData: userData})
  
//   } catch (error) {
//       console.log(`BED error : ${error}`);
//   }
// });


router.get("/book/getdata/:id",async (req, res) => {
  try {
      let agentId = req.params.id;
      const alPro = await AppoModel.find({});
      res.send({ status: "ok", data: alPro})
  
  } catch (error) {
      console.log(error);
  }
});



router.get('/agent/getagent', async (req, res) => {

    try {
        const allagent = await UserModel.find({role: 'agent'});
        res.send({ status: "ok", data: allagent})

    } catch (error) {
        console.log(error);
    }

})

router.get('/checkagent/appo', async (req, res) => {

  try {
      const allagent = await AppoModel.find({});
      res.send({ status: "ok", data: allagent})

  } catch (error) {
      console.log(error);
  }

})




// get data for agentDetails

router.get("/agentdetails/:id", async (req, res) => {
  try {
    const post = await UserModel.findById(req.params.id);
    if (!post) {
      return res.status(404).send("Data not found");
    }
    else{
      res.send(post);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// contact
router.post("/contact", (req, res) => {
    const contactDetail = req.body;
  
    console.log("Contact Detail >>>>", contactDetail);

    ctModels.create(contactDetail)
    .then(() => {
        res.status(201).send(contactDetail);
    })
    .catch((err) => {
        res.status(500).send(err.message);
            console.log(err);
    });

  });


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



const multer = require("multer");


// img storage path
const imgconfig = multer.diskStorage({
  destination:(req,file,callback)=>{
      callback(null,"./uploads")
  },
  filename:(req,file,callback)=>{
      callback(null,file.originalname)
  }
})


// img filter
const isImage = (req,file,callback)=>{
  if(file.mimetype.startsWith("image")){
      callback(null,true)
  }else{
      callback(new Error("only images is allowd"))
  }
}

const upload = multer({
  storage:imgconfig,
  fileFilter:isImage
});


// Multer add property
router.post("/property/multeradd",upload.single("photo"), async (req, res) => {

  const {filename} = req.file;

  let { name, category, address, area, price, description, availability,agentusername } = req.body    
  // res.json(user);
    try {
      const newUser = new AgentModel({
                image:filename,
                name:name,
                category:category,
                address:address,
                area:area,
                price:price,
                description:description,
                availability:availability,
                agentusername:agentusername
            });
        const result = await newUser.save()
        res.send(result);
        
    } catch (error) {
        res.send(error)
    }
})



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


module.exports = router;