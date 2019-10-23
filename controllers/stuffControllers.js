const Thing = require('../models/thing')


exports.createStuff =(async (req, res, next)=>{
    const thing = new Thing({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId
  }); //protoype for retrieving data sent with post api call
  
  await thing.save().then(
    ()=>{
      res.status(201).json({
          message: 'post saved successfully'
      })
  }).catch(
    (error=>{
      res.status(400).json({
          error
      });
  })); // saving data... and sending response if successfully saved
  console.log(req.body)
  next();
  });

  
exports.getStuffs = (async (req, res, next)=>{
   await Thing.find().then(
      (things=>{
      return  res.status(200).json(things)
    })).catch(
      (error=>{
      return res.status(400).json({
        error
      })
    }))
  
  });
  
exports.getStuff = (async (req, res, next)=>{
    
     await Thing.findOne({
      _id: req.params.id
    }).then((thing)=>{
      return res.status(200).json(thing)
    }).catch((error)=>{
      return res.status(404).json({
          error
        })
    });
    next();

  });


  //delete createStuff


exports.deleteStuff = ( async (req, res, next)=>{
  
    await Thing.deleteOne({_id: req.params.id}).then(()=>{
      res.status(200).json({
        message: 'Thing Deleted Successfully'
      }).catch((error)=>{
        res.status(400).json({
          error: error
        })
      })
    })
    next();
  });

  

exports.updateStuff = (async (req, res, next)=>{
    const thing = new Thing({
      _id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId
  });
  
    await Thing.updateOne({_id: req.params.id}, thing).then(()=>{
      res.status(201).json({
        message: 'Thing updated successfully'
      })
    }).catch((error)=>{
      res.status(400).json({
        error: error
      });
    })

    next();
  });
  