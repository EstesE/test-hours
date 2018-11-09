let property = {
    "officeHours": [
        {
            "openTime": "1:30 AM",
            "day": "Sunday",
            "closeTime": "11:30 AM",
            "closed": true,
            "appointment": false
        },
        {
            "openTime": "8:00 AM",
            "day": "Monday",
            "closeTime": "5:00 PM",
            "closed": false,
            "appointment": false
        },
        {
            "openTime": "8:00 AM",
            "day": "Tuesday",
            "closeTime": "5:00 PM",
            "closed": false,
            "appointment": false
        },
        {
            "openTime": "8:00 AM",
            "day": "Wednesday",
            "closeTime": "5:00 PM",
            "closed": false,
            "appointment": false
        },
        {
            "openTime": "8:00 AM",
            "day": "Thursday",
            "closeTime": "5:00 PM",
            "closed": false,
            "appointment": false
        },
        {
            "openTime": "8:00 AM",
            "day": "Friday",
            "closeTime": "5:00 PM",
            "closed": false,
            "appointment": false
        },
        {
            "openTime": "10:00 AM",
            "day": "Saturday",
            "closeTime": "4:00 PM",
            "closed": true,
            "appointment": false
        }
    ]
};

function getBusinessDays(property, numOfDays) {
    let nextXDays = [];
    const moment = require('moment');
    if (property && numOfDays && numOfDays > 0 && numOfDays < 7) {
        let hours = property.officeHours;
        let days = [];
        for (let i = 0; i <= 30; i++) {
            days.push({date: moment().add(i-1, 'day').format('YYYY-MM-DD'), day: moment().add(i-1, 'day').format('dddd')});
        }

        let h = 0;
        let today = { date: moment().format('YYYY-MM-DD'), day: moment().format('dddd') };

        let startPosition = null;
        for(let i = 0; i < days.length; i++) {
            if (days[i].date === today.date) {
                startPosition = i;
                break;
            }
        }

        for (let i = 0; i < hours.length; i++) {
            if (hours[i].day === moment().format('dddd')) {
                h = i;
            }
        }

        for (let i = startPosition; i < days.length; i++) {
            if (hours[h].closed === false && days[i].day === hours[h].day && days[i].date !== moment().format('YYYY-MM-DD')) {
                console.log(days[i]);
                nextXDays.push(days[i].date);
            }
            if (nextXDays.length === 3) {
                console.log(nextXDays);
                return nextXDays;
            }
            h++;
            if (h > 6) {
                h = 0;
            }
        }
    }
    return nextXDays;
};


let x = getBusinessDays(property, 3);


