
import yahooFinance from 'yahoo-finance2';



const query = 'DOGE-USD';
const queryOptions = { period1: '2021-07-01', /* ... */ }; // From current date until "period1"
const result = await yahooFinance.historical(query, queryOptions);



console.log(result);


