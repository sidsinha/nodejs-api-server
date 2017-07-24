module.exports = function(app){
    app.get('/data', (req, res) => {
        res.send(
            {
                "data":[
                    {
                        "id": 1,
                        "category" : "Framework",
                        "name" : "ReactJS"
                    },
                    {
                        "id": 2,
                        "category" : "Framework",
                        "name" : "AngularJS"
                    },
                    {
                        "id": 3,
                        "category" : "Framework",
                        "name" : "BackboneJS"
                    },
                    {
                        "id": 4,
                        "category" : "Framework",
                        "name" : "EmberJS"
                    },
                    {
                        "id": 5,
                        "category" : "Framework",
                        "name" : "NodeJS"
                    },
                    {
                        "id": 6,
                        "category" : "Build Tool",
                        "name" : "Webpack"
                    },
                    {
                        "id": 7,
                        "category" : "Build Tool",
                        "name" : "Grunt"
                    },
                    {
                        "id": 8,
                        "category" : "Build Tool",
                        "name" : "Gulp"
                    },
                    {
                        "id": 9,
                        "category" : "Build Tool",
                        "name" : "Yeoman"
                    },
                    {
                        "id": 10,
                        "category" : "Build Tool",
                        "name" : "Browserify"
                    }
                ]
            }
        );
    });
}