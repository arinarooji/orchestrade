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
        name: "Billingsville Elementary School",
        number: "980-343-5520"
    },
    {
        name: "Blythe Elementary School",
        number: "980-343-5770"
    },
    {
        name: "Briarwood Academy",
        number: "980-343-6475"
    },
    {
        name: "Bruns Academy",
        number: "980-343-5495"
    },
    {
        name: "Chantilly Montessori School",
        number: "980-343-0692"
    },
    {
        name: "Clear Creek Elementary School",
        number: "980-343-6922"
    },
    {
        name: "Collinswood Language Academy",
        number: "980-343-5820"
    },
    {
        name: "Cornelius Elementary School",
        number: "980-343-3905"
    },
    {
        name: "Cotswold Elementary School",
        number: "980-343-6720"
    },
    {
        name: "Croft Community School",
        number: "980-343-0370"
    },
    {
        name: "Crown Point Elementary School",
        number: "980-343-6535"
    },
    {
        name: "David Cox Road Elementary School",
        number: "980-343-6540"
    },
    {
        name: "Davidson Elementary School",
        number: "980-343-3900"
    },
    {
        name: "Devonshire Elementary School",
        number: "980-343-6445"
    },
    {
        name: "Dilworth Elementary School",
        number: "980-343-2240"
    },
    {
        name: "Dorothy J. Vaughan Academy of Technology",
        number: "980-343-0030"
    },
    {
        name: "Druid Hills Academy",
        number: "980-343-5515"
    },
    {
        name: "E. E. Waddell Language Academy",
        number: "980-343-5815"
    },
    {
        name: "Eastover Elementary School",
        number: "980-343-5505"
    },
    {
        name: "Elizabeth Lane Elementary School",
        number: "980-343-5700"
    },
    {
        name: "Elizabeth Traditional Elementary School",
        number: "980-343-5475"
    },
    {
        name: "Elon Park Elementary School",
        number: "980-343-1440"
    },
    {
        name: "Endhaven Elementary School",
        number: "980-343-5436"
    },
    {
        name: "First Ward Creative Arts Academy",
        number: "980-343-5485"
    },
    {
        name: "Grand Oak Elementary School",
        number: "980-343-2063"
    },
    {
        name: "Greenway Park Elementary School",
        number: "980-343-5060"
    },
    {
        name: "Hawk Ridge Elementary School",
        number: "980-343-5927"
    },
    {
        name: "Hickory Grove Elementary School",
        number: "980-343-6464"
    },
    {
        name: "Hidden Valley Elementary School",
        number: "980-343-6810"
    },
    {
        name: "Highland Creek Elementary School",
        number: "980-343-1065"
    },
    {
        name: "Highland Mill Montessori Elementary School",
        number: "980-343-5525"
    },
    {
        name: "Highland Renaissance Academy",
        number: "980-343-5511"
    },
    {
        name: "Hornets Nest Elementary School",
        number: "980-343-6110"
    },
    {
        name: "Huntersville Elementary School",
        number: "980-343-3835"
    },
    {
        name: "Huntingtowne Farms Elementary School",
        number: "980-343-3625"
    },
    {
        name: "Idlewild Elementary School",
        number: "980-343-6411"
    },
    {
        name: "Irwin Academic Center",
        number: "980-343-5480"
    },
    {
        name: "J.H. Gunn Elementary School",
        number: "980-343-6477"
    },
    {
        name: "J.V. Washam Elementary School",
        number: "980-343-1071"
    },
    {
        name: "John M. Morehead STEM Academy",
        number: "980-343-5775"
    },
    {
        name: "Joseph W. Grier Academy",
        number: "980-343-5671"
    },
    {
        name: "Lake Wylie Elementary School",
        number: "980-343-3680"
    },
    {
        name: "Lansdowne Elementary School",
        number: "980-343-6733"
    },
    {
        name: "Lawrence Orr Elementary School",
        number: "980-343-9919"
    },
    {
        name: "Lebanon Road Elementary School",
        number: "980-343-3640"
    },
    {
        name: "Long Creek Elementary School",
        number: "980-343-6095"
    },
    {
        name: "Mallard Creek Elementary School",
        number: "980-343-3980"
    },
    {
        name: "Marie G. Davis",
        number: "980-343-0006"
    },
    {
        name: "Matthews Elementary School",
        number: "980-343-3940"
    },
    {
        name: "McAlpine Elementary School",
        number: "980-343-3750"
    },
    {
        name: "McKee Road Elementary School",
        number: "980-343-3970"
    },
    {
        name: "Merry Oaks International Academy",
        number: "980-343-6422"
    },
    {
        name: "Montclaire Elementary",
        number: "980-343-3635"
    },
    {
        name: "Mountain Island Lake Academy",
        number: "980-343-6948"
    },
    {
        name: "Myers Park Traditional Elementary School",
        number: "980-343-5522"
    },
    {
        name: "Nathaniel Alexander Elementary School",
        number: "980-343-5268"
    },
    {
        name: "Nations Ford Elementary School",
        number: "980-343-5838"
    },
    {
        name: "Newell Elementary School",
        number: "980-343-6820"
    },
    {
        name: "Oakdale Elementary School",
        number: "980-343-6076"
    },
    {
        name: "Oakhurst STEAM Academy",
        number: "980-343-6482"
    },
    {
        name: "Oaklawn Language Academy",
        number: "980-343-0400"
    },
    {
        name: "Olde Providence Elementary School",
        number: "980-343-3755"
    },
    {
        name: "Palisades Park Elementary",
        number: "980-343-9895"
    },
    {
        name: "Park Road Montessori School",
        number: "980-343-5830"
    },
    {
        name: "Parkside Elementary School",
        number: "980-343-9915"
    },
    {
        name: "Paw Creek Elementary School",
        number: "980-343-6088"
    },
    {
        name: "Pineville Elementary School",
        number: "980-343-3920"
    },
    {
        name: "Pinewood Elementary School",
        number: "980-343-5825"
    },
    {
        name: "Piney Grove Elementary School",
        number: "980-343-6470"
    },
    {
        name: "Polo Ridge Elementary School",
        number: "980-343-0749"
    },
    {
        name: "Providence Spring Elementary School",
        number: "980-343-6935"
    },
    {
        name: "Rama Road Elementary School",
        number: "980-343-6730"
    },
    {
        name: "Reedy Creek Elementary School",
        number: "980-343-6480"
    },
    {
        name: "Reid Park Academy",
        number: "980-343-5035"
    },
    {
        name: "Renaissance West STEAM Academy",
        number: "980-343-0049"
    },
    {
        name: "River Gate Elementary School",
        number: "980-344-1000"
    },
    {
        name: "River Oaks Academy",
        number: "980-344-1020"
    },
    {
        name: "Sedgefield Elementary School",
        number: "980-343-5826"
    },
    {
        name: "Selwyn Elementary School",
        number: "980-343-5835"
    },
    {
        name: "Shamrock Gardens Elementary School",
        number: "980-343-6440"
    },
    {
        name: "Sharon Elementary School",
        number: "980-343-6725"
    },
    {
        name: "Smithfield Elementary School",
        number: "980-343-6550"
    },
    {
        name: "Starmount Academy of Excellence",
        number: "980-343-3630"
    },
    {
        name: "Statesville Road Elementary School",
        number: "980-343-6815"
    },
    {
        name: "Steele Creek Elementary School",
        number: "980-343-3810"
    },
    {
        name: "Sterling Elementary School",
        number: "980-343-3636"
    },
    {
        name: "Stoney Creek Elementary School",
        number: "980-344-1030"
    },
    {
        name: "Thomasboro Academy",
        number: "980-343-6000"
    },
    {
        name: "Torrence Creek Elementary School",
        number: "980-343-0695"
    },
    {
        name: "Trillium Springs Montessori School",
        number: "980-343-9442"
    },
    {
        name: "Tuckaseegee Elementary School",
        number: "980-343-6055"
    },
    {
        name: "University Meadows Elementary School",
        number: "980-343-3685"
    },
    {
        name: "University Park Creative Arts School",
        number: "980-343-5178"
    },
    {
        name: "Walter G. Byers School",
        number: "980-343-6940"
    },
    {
        name: "Westerly Hills Academy",
        number: "980-343-6021"
    },
    {
        name: "Whitewater Academy",
        number: "980-343-0003"
    },
    {
        name: "Winding Springs Elementary School",
        number: "980-343-5140"
    },
    {
        name: "Windsor Park Elementary School",
        number: "980-343-6405"
    },
    {
        name: "Winget Park Elementary School",
        number: "980-343-1063"
    },
    {
        name: "Winterfield Elementary School",
        number: "980-343-6400"
    },
    {
        name: "Albemarle Road Middle School",
        number: "980-343-6420"
    },
    {
        name: "Alexander Graham Middle School",
        number: "980-343-5810"
    },
    {
        name: "Ashley Park Pre K-8 School",
        number: "980-343-6018"
    },
    {
        name: "Bailey Middle School",
        number: "980-343-1068"
    },
    {
        name: "Berryhill School",
        number: "980-343-6100"
    },
    {
        name: "Bruns Academy",
        number: "980-343-5495"
    },
    {
        name: "Carmel Middle School",
        number: "980-343-6705"
    },
    {
        name: "Cochrane Collegiate Academy",
        number: "980-343-6460"
    },
    {
        name: "Collinswood Language Academy",
        number: "980-343-5820"
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
    }

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