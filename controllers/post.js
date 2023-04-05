const blogdb = require('../models/blogdb');
const Blog = require('../models/blogdb');

exports.createpost = ((req, res, next) => {
    //taking a post
    let { title,  description, createdAt, updatedAt} = req.body;
    if (!title) {
        errors.push("title required");
      }
      if (!description) {
        errors.push("description required");
      }
    Blog.findOne({ title: title})
    .then(( data) => {
        if(data) {
            res.status(200).json('title is already present')
        }
        else {
            const blog = new Blog({
                title: title,
                description: description,
                createdAt: createdAt,
                updatedAt: updatedAt
            })
            blog.save().then((result) => {
                res.status(200).json(result)
            })
        }
    })
});

exports.readposts = ((req, res, next) => {
    // res.send(blog);
    Blog.find((err, val)=>{
        if (err) {
            console.log(err)
        }
        else { 
            res.json(val)
        }        
        })
});

exports.readsinglepost = ((req, res, next) => {
    Blog.findOne({ _id: req.params.id}, 
        function(err, data) {
            console.log(data);
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });    
});

exports.updatesinglepost = ((req, res, next) => {
    Blog.findByIdAndUpdate(req.params.id, 
        {title: req.body.title, description: req.body.description}, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data updated!");
            }
        });
});

exports.deletesinglepost = ((req, res, next) => {
    Blog.deleteOne({ _id: req.params.id}, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        }); 
});

exports.deletemanypost = ((req, res, next) => {
    Blog.find(
    //     {
    //     _id: {
    //       $in: [
    //         "63ad80d7315d368a58dfdc28",
    //         "63ad8597241ef72597b8c6af",
    //         "63ad8566241ef72597b8c6ac"
    //       ]
    //     }
    //   },
        //{ _id: req.params.id}, 
        { title: /^typescript/},
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        }); 
});