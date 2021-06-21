
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

    let myChart = document.getElementById('myChart').getContext('2d');

    let chart_1 = new Chart(myChart, 
    {
        type:'line', 
        data:
        {
            labels:return_json.data_1_1_x,
            
            datasets:
            [{
                label:'Original Data',
                borderColor: 'violet',
                backgroundColor: 'violet',
                pointRadius: 0,
                borderWidth: 1,

                data:return_json.data_1_1_y
            }]
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
                }
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
}


