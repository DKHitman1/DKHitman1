### Hi there 👋

<!--
**DKHitman1/DKHitman1** `README.md
{
    "keywords": ["timings","time","when","timing","schedule","open","close"], // the keywords to identify an intent
    "answer": "*Timings for {{entity.key}} are:*\n {{entity.value}}", // the answer for this intent
    "entities": { // list of things the bot can answer for the `timings` intent
        "I'm online": "6:00AM-00:00AM",
        "Bot": "12:15PM-02:30PM",
        "breakfast": "08:00AM-10:30AM",
        "snacks": "04:45PM-06:15PM",
        "dinner": "07:30PM-10:15PM",
        "laundry": "dropoff: Mon & Thu 08:00AM-02:00PM\npickup: Wed & Sat 04:30PM-06:00PM",
        "library": "all the time fren, except friday",
        "salon": {
            "alternates": ["parlour", "parlor", "saloon"], // alternate names for the same entity
            "value": "11:00AM-7:00PM, closed on tuesdays"
        },
        "asg": "shuts at 11:30PM"
    },
    "meta": { // some optional metadata to maybe create user facing documentation, see Example/intents/help.js
        "userFacingName": ["timings"],
        "description": "Timings for facilities",
        "examples": ["mail room timings", "timing 4 dinner", "yo bro, when can i get lunch"]
    }
}
