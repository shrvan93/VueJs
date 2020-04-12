$.getJSON(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    function(data) {
        $('#rate').html(data.bpi.EUR.date.rate_float);
    }
);