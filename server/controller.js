const {User,Product} = require('./model');

// export an object that contains logics
module.exports = {
    // Users
    allUsers: (req,res) => User.find({})
                                .then(users=>console.log("Backend returned users", users)||res.json(users))
                                .catch(err=>console.log("Backend err", err)||res.json(err)),
    getUser: (req,res) => User.findById(req.params.id)
                              .then(user=>console.log("Backend returned user", user)||res.json(user))
                              .catch(err=>console.log("Backend err", err)||res.json(err)),
    createUser: (req,res) => User.create(req.body)
                                 .then(user=>console.log("Backend created user", user)||res.json(user))
                                 .catch(err=>console.log("Backend err", err)||res.json(err)),
    deleteUser: (req,res) => User.findByIdAndRemove(req.params.id)
                                 .then(user=>console.log("Backend deleted user", user))
                                 .catch(err=>console.log("Backend err", err)||res.json(err)),
    updateUser: (req,res) => User.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
                                 .then(user=>console.log("Backend updated user", user)||res.json(user))
                                 .catch(err=>console.log("Backend err", err)||res.json(err)),
    // Products
    allProducts: (req,res) => User.find({}, { products: 1 })
                                   .then(products=>console.log("Backend returned products", products)||res.json(products))
                                   .catch(err=>console.log("Backend err", err)||res.json(err)),
    getProduct: (req,res) => User.find({"products._id": req.params.id}, {"products.$": 1})
                                 .then(product=>console.log("Backend got product", product)||res.json(product))
                                 .catch(err=>console.log("Backend err", err)||res.json(err)),
    createProduct: (req,res) => User.findByIdAndUpdate( req.params.id, {
                                     $push: {products:req.body} }, {runValidators:true, new:true})
                                    .then(product=>console.log("Backend made product", product)||res.json(product))
                                    .catch(err=>console.log("Backend err", err)||res.json(err)),
    deleteProduct: (req,res) => User.findOneAndRemove({"products._id": req.params.product_id}, { 
                                    $pull: { "products":{ "_id": req.params.id } } }, {new: true})
                                    .then(product=>console.log("Backend delete product", product), res.json(product))
                                    .catch(err=>console.log("Backend err", err)||res.json(err)),
    updateProduct: (req,res) => User.findOneAndUpdate({"products._id": req.params.product_id}, req.body, 
                                {runValidators: true, new:true})
                                .then(product=>console.log("Backend updated product", product)||res.json(product))
                                .catch(err=>console.log("Backend err")||res.json(err))
}