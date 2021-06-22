
// Specify a function to execute when the DOM is fully loaded.
$(document).ready(ready);

function ready()
{
    // Load data from the server using HTTP GET request
    api_addrss = window.location.protocol + "//" + window.location.host + ":3000/";
    $.get(api_addrss, callback);
}

function callback(data)
{

	const return_json = JSON.parse(data);

	// console.log(return_json);


	//----------------------------------Chart 1------------------------------------------------
	let myChart = document.getElementById('myChart').getContext('2d');

    let chart_1 = new Chart(myChart, 
    {
        type: 'line', 
        data:
        {
            labels:return_json.data_1_1_x,
            
            datasets:
            [
				{
                	label: 'Original Data',
                	borderColor: 'violet',
                	backgroundColor: 'violet',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_1_1_y
            	},
				{
                	label: '2 Hr Moving Average',
                	borderColor: 'indigo',
                	backgroundColor: 'indigo',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_1_2_y
            	},
				{
                	label: '4 Hr Moving Average',
                	borderColor: 'blue',
                	backgroundColor: 'blue',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_1_3_y
            	},
				{
                	label: '8 Hr Moving Average',
                	borderColor: 'green',
                	backgroundColor: 'green',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_1_4_y
            	},
				{
                	label: '16 Hr Moving Average',
                	borderColor: 'yellow',
                	backgroundColor: 'yellow',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_1_5_y
            	},
				{
                	label: '32 Hr Moving Average',
                	borderColor: 'orange',
                	backgroundColor: 'orange',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_1_6_y
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


	//----------------------------------Chart 2------------------------------------------------
	let myChart_2 = document.getElementById('myChart_2').getContext('2d');

    let chart_2 = new Chart(myChart_2, 
    {
        type: 'line', 
        data:
        {
            labels:return_json.data_2_1_x,
            
            datasets:
            [
				{
                	label: 'Original Data',
                	borderColor: 'violet',
                	backgroundColor: 'violet',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_2_1_y
            	},
				{
                	label: '12-Hr Moving Average',
                	borderColor: 'indigo',
                	backgroundColor: 'indigo',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_2_2_y
            	},
				{
                	label: '24-Hr Moving Average',
                	borderColor: 'blue',
                	backgroundColor: 'blue',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_2_3_y
            	},
				{
                	label: '5-Day Moving Average',
                	borderColor: 'green',
                	backgroundColor: 'green',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_2_4_y
            	},
				{
                	label: '10-Day Moving Average',
                	borderColor: 'yellow',
                	backgroundColor: 'yellow',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_2_5_y
            	},
				{
                	label: '25-Day Moving Average',
                	borderColor: 'orange',
                	backgroundColor: 'orange',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_2_6_y
            	},
				{
                	label: '50-Day Moving Average',
                	borderColor: 'red',
                	backgroundColor: 'red',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_2_7_y
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
	//----------------------------------Chart 2------------------------------------------------


	//----------------------------------Chart 3------------------------------------------------
	let myChart_3 = document.getElementById('myChart_3').getContext('2d');

    let chart_3 = new Chart(myChart_3, 
    {
        type: 'line', 
        data:
        {
            labels:return_json.data_3_1_x,
            
            datasets:
            [
				{
                	label: 'Original Data',
                	borderColor: 'violet',
                	backgroundColor: 'violet',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_3_1_y
            	},
				{
                	label: '5-Day Moving Average',
                	borderColor: 'indigo',
                	backgroundColor: 'indigo',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_3_2_y
            	},
				{
                	label: '10-Day Moving Average',
                	borderColor: 'blue',
                	backgroundColor: 'blue',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_3_3_y
            	},
				{
                	label: '25-Day Moving Average',
                	borderColor: 'green',
                	backgroundColor: 'green',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_3_4_y
            	},
				{
                	label: '50-Day Moving Average',
                	borderColor: 'yellow',
                	backgroundColor: 'yellow',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_3_5_y
            	},
				{
                	label: '100-Day Moving Average',
                	borderColor: 'orange',
                	backgroundColor: 'orange',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_3_6_y
            	},
				{
                	label: '200-Day Moving Average',
                	borderColor: 'red',
                	backgroundColor: 'red',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: return_json.data_3_7_y
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
	//----------------------------------Chart 3------------------------------------------------
}


