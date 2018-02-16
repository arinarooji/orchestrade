const mongoose = require("mongoose");
const db = require("../models");
// mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/orchestradeDB",
    {
        useMongoClient: true
    }
);

//Sample data here...
const instrumentTemplates = [
    //BRASS
    {
        instrumentName: "Alto/Tenor Horn",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/YAH-203-Series-Eb-Alto-Horn-Silver-Plated/471289000946000-00-500x500.jpg",
    },
    {
        instrumentName: "Baritone Horn",
        type: "Brass",
        image: "https://media.wwbw.com/is/image/MMGS7/ABH-321-Series-Bb-Baritone-Horn-ABH-321-Lacquer/J15564000002000-00-500x500.jpg",
    },
    {
        instrumentName: "Bugle",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/ABG-201II-Series-Bb-Bugle/463164000000000-00-500x500.jpg",
    },
    {
        instrumentName: "Cornet",
        type: "Brass",
        image: "https://media.wwbw.com/is/image/MMGS7/YCR-2310III-Standard-Bb-Cornet-Bb-Cornet/H82867000001000-00-500x500.jpg",
    },
    {
        instrumentName: "French Horn",
        type: "Brass",
        image: "https://media.wwbw.com/is/image/MMGS7/JHR1110-Performance-Series-French-Horn/J40000000000000-00-500x500.jpg",
    },
    {
        instrumentName: "Mellophone",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/JMP1100M-Quantum-Series-F-Marching-Mellophone-Silver/J37227000002000-00-500x500.jpg",
    },
    {
        instrumentName: "Saxophone",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/Prelude-by-Conn-Selmer-AS711-Student-Model-Alto-Saxophone/585558000000000-00-500x500.jpg",
    },
    {
        instrumentName: "Trombone",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/351-Series-Student-Trombone/461322000000000-00-500x500.jpg",
    },
    {
        instrumentName: "Trumpet",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/2055-Silver-Flair-Series-Bb-Trumpet-2055T-Silver-1st-Valve-Thumb-Trigger/483590000999090-00-500x500.jpg",
    },
    {
        instrumentName: "Tuba",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/BE981-Sovereign-Series-Compensating-EEb-Tuba-Silver/468436000921000-00-500x500.jpg",
    },
    //BRASS

    //KEYBOARD
    {
        instrumentName: "Accordion",
        type: "Keyboard",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/Accordion-AL3112-Red-with-Case-GCF/J21333000001000-00-500x500.jpg",
    },
    {
        instrumentName: "Electronic Keyboard",
        type: "Keyboard",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/E-09-Interactive-Arranger-Electronic-Keyboard--Factory/701860000000000-00-500x500.jpg",
    },
    {
        instrumentName: "Piano",
        type: "Keyboard",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/MDG-330-Mini-Grand-Digital-Piano/J19266000000000-00-500x500.jpg",
    },
    //KEYBOARD
]
const limit = 1;

function getNewData() {
    db.Templates.find({}).limit(limit).exec(function(err, collection) {
        if (collection.length === 0) {
            // iterate over the set of agents for initialization and create entries
            instrumentTemplates.map(function(user) {
                let newIns = new db.Templates(user)
                newIns.save(function(err, data) {
                    if (err) {
                        console.log(err);
                    // return res.status(500).json({
                    //     msg: 'internal server error'
                    // });
                    }
                })
            })
            console.log('Test Instruments Initialized in MongoDB')
            return
        } else {
            console.log('Instruments Exist in MongoDB')
        }
    })
}

getNewData()