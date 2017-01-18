API
===

All endpoints return a JSON object containing the arguments passed to the API and the keys `result` and `status`. `result` is set to the result of the operation, `status` always says "OK".

Arguments are to be passed in the query string.

/api/add
--------

Expects arguments `augend` and `addend`

/api/subtract
--------

Expects arguments `minuend` and `subtrahend`

/api/multiply
--------

Expects arguments `multiplier` and `multiplicand`

/api/divide
--------

Expects arguments `dividend` and `divisor`

