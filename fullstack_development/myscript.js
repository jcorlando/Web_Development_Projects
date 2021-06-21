
// Specify a function to execute when the DOM is fully loaded.
$(document).ready(ready);

// My own scripts
function ready()
{
    // Load data from the server using HTTP GET request
    api_addrss = window.location.protocol + "//" + window.location.host + ":3000/";
    $.get(api_addrss, callback);
}

function callback(data)
{
    console.log(data);
    chart_start();
}


