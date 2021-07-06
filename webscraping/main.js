import yahooFinance from 'yahoo-finance2';
import express from 'express';
import { ma as mov_avg } from 'moving-averages';

async function getdata()
{
	// Construct date-time string
	const delta_date = new Date();
	// Sets the Date Delta Difference
	delta_date.setDate(delta_date.getDate() - 2190); // Six years is 2190 days
	
	const query = 'DOGE-USD';
	const queryOptions = { period1: delta_date.toISOString().split('T')[0], /* ... */ }; // From current date until "period1"
	const result = await yahooFinance.historical(query, queryOptions);
	
	
	// Declare empty arrays for data
	let date = [];
	let close = [];
	
	for(var i = 0; i < result.length; i++)
	{
		date.push(result[i].date.toISOString().split('T')[0]);
		close.push(result[i].close);
	}

	let five_day_moving_average        = mov_avg(close, 5);
	let ten_day_moving_average         = mov_avg(close, 10);
	let twenty_day_moving_average      = mov_avg(close, 20);
	let fifty_day_moving_average       = mov_avg(close, 50);
	let hundred_day_moving_average     = mov_avg(close, 100);
	let two_hundred_day_moving_average = mov_avg(close, 200);

	return { date, close, five_day_moving_average, ten_day_moving_average, twenty_day_moving_average, fifty_day_moving_average, hundred_day_moving_average, two_hundred_day_moving_average }
}


const app = express()
const port = 3000

app.get('/', async (req, res) => 
{
	var results = await getdata();
	res.send(results);
});

app.use(express.static('./www/html/'));

app.listen(port);



