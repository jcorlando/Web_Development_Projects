// Specify a function to execute when the DOM is fully loaded.
$(document).ready(ready);

// Once DOM is loaded
function ready()
{
    // Load data from the server using HTTP GET request
    api_addrss = window.location.protocol + "//" + window.location.host;
    $.get(api_addrss, callback);
}


function callback(data)
{
	//----------------------------------Chart 1------------------------------------------------
	let myChart = document.getElementById('myChart').getContext('2d');

    let chart_1 = new Chart(myChart, 
    {
        type: 'line', 
        data:
        {
			labels:data.date.slice(2007, data.date.length),
            
            datasets:
            [
				{
                	label: 'Original Data',
                	borderColor: 'blue',
                	backgroundColor: 'blue',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: data.close.slice(2007, data.close.length)
            	},
				{
                	label: '5-Day Moving Average',
                	borderColor: 'green',
                	backgroundColor: 'green',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: data.five_day_moving_average.slice(2007, data.five_day_moving_average.length)
            	},
				{
                	label: '10-Day Moving Average',
                	borderColor: 'yellow',
                	backgroundColor: 'yellow',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: data.ten_day_moving_average.slice(2007, data.ten_day_moving_average.length)
            	},
				{
                	label: '20-Day Moving Average',
                	borderColor: 'orange',
                	backgroundColor: 'orange',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: data.twenty_day_moving_average.slice(2007, data.twenty_day_moving_average.length)
            	},
				{
                	label: '50-Day Moving Average',
                	borderColor: 'red',
                	backgroundColor: 'red',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: data.fifty_day_moving_average.slice(2007, data.fifty_day_moving_average.length)
            	}
			]
        },
        options:
        {
            responsive: true,
            plugins:
            {
                title: 
                {
                    display: true,
                    text: 'Dogecoin Stats',
                    font: {size: 17}
                },
				legend: { position: "right" }

            },
            scales:
            {
                x:
                {
                    display: false
                }
            }
        }
    });
	//----------------------------------Chart 1------------------------------------------------

}
