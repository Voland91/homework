let x = `[
    {
        "index": 0,
        "_id": "5c01097e566bb68fe9611b25",
        "cost": "434.25",
        "detailsOfPayent": {
            "Type": 3,
            "company": "ECSTASIA",
            "date": "09-07-2014"
        }
    },
    {
        "index": 1,
        "_id": "5c01097e9064d87c919ab54e",
        "cost": "665.39",
        "detailsOfPayent": {
            "Type": 2,
            "company": "MANGELICA",
            "date": "28-04-2014"
        }
    }]`;

let y = JSON.parse(x);

let dayOfWeek = (new Date(Date.parse(y{ 1}.detailsOfPayent.date))).getDay();

console.log(dayOfWeek);