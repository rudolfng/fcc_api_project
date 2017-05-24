"use strict";
var express = require('express')
var app = express()
var PORT = process.env.PORT || 8080

app.get('/:timestamp', (req, res) => {
    let timestamp = req.params.timestamp,
        date = Number(timestamp) ? new Date(Number(timestamp) * 1000) : new Date(timestamp),
        time = {
            unix: null,
            natural: null
        }
        
    if (date != 'Invalid Date') {
        time.unix = date.getTime() / 1000
        time.natural = naturalize(date)
    }

    res.json(time)

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

function naturalize(dateObj) {
    let month = (() => {
        switch (dateObj.getUTCMonth()) {
            case 0:
                return 'January'
            case 1:
                return 'February'
            case 2:
                return 'March'
            case 3:
                return 'April'
            case 4:
                return 'May'
            case 5:
                return 'June'
            case 6:
                return 'July'
            case 7:
                return 'August'
            case 8:
                return 'September'
            case 9:
                return 'October'
            case 10:
                return 'November'
            case 11:
                return 'December'
        }
    })()
    let date = dateObj.getUTCDate()
    let year = dateObj.getUTCFullYear()
    return `${month} ${date}, ${year}`
}