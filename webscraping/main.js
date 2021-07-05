
import yahooFinance from 'yahoo-finance2';

// Construct date-time string
const delta_date = new Date();
// Sets the Date Delta Difference
delta_date.setDate(delta_date.getDate() - 6);

const query = 'DOGE-USD';
const queryOptions = { period1: delta_date.toISOString().split('T')[0], /* ... */ }; // From current date until "period1"
const result = await yahooFinance.historical(query, queryOptions);


for(var i = 0; i < result.length; i++)
{
	var frame = result[i];
	var date = frame.date;
	var close = frame.close;
	console.log(date, close);
}




