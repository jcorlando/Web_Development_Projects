import yahooFinance from 'yahoo-finance2';
import express from 'express';


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
	
	return { date, close }
}


const app = express()
const port = 3000

app.get('/', async (req, res) => 
{
	let results = await getdata();
	res.send(results);
})

app.listen(port, () => { })








