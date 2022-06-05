const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const parks = {
    'Flaming Gyser' : {
        'beach access' : false,
        'river access' : true,
        'lake' : false,
        'hiking trails' : true,
        'campground' : false,
        'best season to visit' : 'summer',
    },
    'Kanasket-Palmer' : {
        'beach access' : false,
        'river access' : false,
        'lake' : true,
        'hiking trails' : true,
        'campground' : false,
        'best season to visit' : 'summer',
    },
    'Saint Edward' : {
        'beach access' : false,
        'river access' : false,
        'lake' : true,
        'hiking trails' : true,
        'campground' : false,
        'best season to visit' : 'summer',
    },
    'Saltwater' : {
        'beach access' : true,
        'river access' : false,
        'lake' :false,
        'hiking trails' : false,
        'campground' : false,
        'best season to visit' : 'summer',
    },
    'unknown' : {
        'beach access' : false,
        'river access' : false,
        'lake' :false,
        'hiking trails' : false,
        'campground' : false,
        'best season to visit' : 'unknown',
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const parkName = request.params.name.toLowerCase()
    if(parks[parkName]){
        response.json(parks[parkName])
    }else {
        response.json(parks['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Your server is running on port ${PORT} - better go catch it!`)
})