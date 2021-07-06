// Specify a function to execute when the DOM is fully loaded.
$(document).ready(ready);

// Once DOM is loaded
function ready()
{
    // Load data from the server using HTTP GET request
    api_addrss = window.location.protocol + "//" + window.location.host;
    $.get(api_addrss, callback);
}


function calculate_moving_average(data)
{
	console.log(data);
}


function callback(data)
{
	
	 calculate_moving_average(data);

	//----------------------------------Chart 1------------------------------------------------
	let myChart = document.getElementById('myChart').getContext('2d');

    let chart_1 = new Chart(myChart, 
    {
        type: 'line', 
        data:
        {
            labels:data.date,
            
            datasets:
            [
				{
                	label: 'Original Data',
                	borderColor: 'violet',
                	backgroundColor: 'violet',
                	pointRadius: 0,
                	borderWidth: 1,
                	data: data.close
            	},
//				{
//                	label: '2 Hr Moving Average',
//                	borderColor: 'indigo',
//                	backgroundColor: 'indigo',
//                	pointRadius: 0,
//                	borderWidth: 1,
//                	data: return_json.data_1_2_y
//            	},
//				{
//                	label: '4 Hr Moving Average',
//                	borderColor: 'blue',
//                	backgroundColor: 'blue',
//                	pointRadius: 0,
//                	borderWidth: 1,
//                	data: return_json.data_1_3_y
//            	},
//				{
//                	label: '8 Hr Moving Average',
//                	borderColor: 'green',
//                	backgroundColor: 'green',
//                	pointRadius: 0,
//                	borderWidth: 1,
//                	data: return_json.data_1_4_y
//            	},
//				{
//                	label: '16 Hr Moving Average',
//                	borderColor: 'yellow',
//                	backgroundColor: 'yellow',
//                	pointRadius: 0,
//                	borderWidth: 1,
//                	data: return_json.data_1_5_y
//            	},
//				{
//                	label: '32 Hr Moving Average',
//                	borderColor: 'orange',
//                	backgroundColor: 'orange',
//                	pointRadius: 0,
//                	borderWidth: 1,
//                	data: return_json.data_1_6_y
//            	}
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
