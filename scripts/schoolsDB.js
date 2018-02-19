const mongoose = require("mongoose");
const db = require("../models");


//cd into /scripts and run this file to add the schools collection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/orchestradeDB",
    {
        useMongoClient: true
    }
);

//Schools used to verify new user are from legitamit school
const schoolsList = [

    {
        name: "Albemarle Road Elementary",
        number: "980-343-6414"
    },
    {
        name: "Allenbrook Elementary School",
        number: "980-343-6004"
    },
    {
        name: "Ashley Park Pre K-8 School",
        number: "980-343-6018"
    },
    {
        name: "Bain Elementary School",
        number: "980-343-6915"
    },
    {
        name: "Ballantyne Elementary School",
        number: "980-343-0413"
    },
    {
        name: "Barnette Elementary School",
        number: "980-343-0372"
    },
    {
        name: "Barringer Academic Center",
        number: "980-343-5533"
    },
    {
        name: "Berewick Elementary School",
        number: "980-344-1010"
    },
    {
        name: "Berryhill School",
        number: "980-343-6100"
    },
    {
        name: "Beverly Woods Elementary School",
        number: "980-343-3627"
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },
    {
        name: "",
        number: ""
    },

]
const limit = 1;

function getNewData() {
    db.Schools.find({}).limit(limit).exec(function(err, collection) {
        if (collection.length === 0) {
            // iterate over the set of schools for initialization and create entries
            schoolsList.map(function(user) {
                let newIns = new db.Schools(user)
                newIns.save(function(err, data) {
                    if (err) {
                        console.log(err);
                    // return res.status(500).json({
                    //     msg: 'internal server error'
                    // });
                    }
                })
            })
            console.log('Schools Initialized in MongoDB')
            return
        } else {
            console.log('Schools Exist in MongoDB')
        }
    })
}

getNewData()