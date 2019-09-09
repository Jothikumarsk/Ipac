'use-strict'
const default_value_base_rate = 0.83;
const book_premium=1.38;
const act_min_premium = 250;
const activity={
    "Commercial_film_producer":0.250,
    "Database_list_broking":0.750,
    "Telemarketing":0.750
}
const SizeFactor={
    "49999.99":1.00,
    "99999.99":0.95,
    "149999.99":0.90,
    "199999.99":0.85,
    "249999.99":0.80,
    "499999.99":0.75,
    "749999.99":0.70,
    "999999.99":0.68,
    "999999999.99":0.65
}
module.exports = {activity,default_value_base_rate,SizeFactor,book_premium,act_min_premium}
