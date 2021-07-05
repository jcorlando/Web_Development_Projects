
import yahooFinance from 'yahoo-finance2';



const query = 'DOGE-USD';
const queryOptions = { period1: '2021-02-01', period2: '2021-02-02' };
const result = await yahooFinance.historical(query, queryOptions);



console.log(result);


