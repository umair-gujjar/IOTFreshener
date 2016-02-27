//Device ID: 51ff6f065082554910260887
//Access Code: 2228662ce1e5a04e7fb21f9b81aa3bc390b72506

$(document).ready(function () {
    var x = $('#onOff').prop('checked')
    console.log(x);

    $("#onOff").change(function () { //When the switch is activated
        var x = $('#onOff').prop('checked')
        console.log(x);

        if (x == false) {
            $(".card").fadeOut();
            $.get("http://192.168.0.104:8181/?params=0,0", function (data) { //Device 0 turns off, 0 times an hour.
                console.log(data);
            });
            $.get("http://192.168.0.104:8181/?params=0,1", function (data) { //Device 1 turns off, 0 times an hour.
                console.log(data);
            });
        } else {
            $(".card").fadeIn();
            $.get("http://192.168.0.104:8181/?params=20,0", function (data) { //Device 0 turns on, 3 times an hour. (every 20mins)
                console.log(data);
            });
            $.get("http://192.168.0.104:8181/?params=20,1", function (data) { //Device 1 turns on, 3 times an hour.
                console.log(data);
            });
        }

    });
});

function printValue() {
    var x = $('#onOff').prop('checked')
    console.log(x);
}

function freshener1Submit() {
    var onOff = $('#onOff1').prop('checked');
    var frequency = 0;
    var device = 1;

    frequency = 60 / ($('#f1DDValues').val());
    if (onOff && frequency != Infinity) {

        console.log(device, frequency);
        var url = "http://192.168.0.104:8181/?params=" + frequency + "," + device;
        console.log(url);
        $.get(url, function (data) {
            console.log(data);
        });
    }
}

function freshener2Submit() {
    var onOff = $('#onOff2').prop('checked');
    var frequency = 0;
    var device = 2;

    frequency = 60 / ($('#f2DDValues').val());
    if (onOff && frequency != Infinity) {
        console.log(device, frequency);
        var url = "http://192.168.0.104:8181/?params=" + frequency + "," + device;
        console.log(url);
        $.get(url, function (data) {
            console.log(data);
        });
    }
}

function send() {
    $.get("http://192.168.0.104:8181/?params=5,11", function (data) {
        console.log(data);
        Materialize.toast('Sent', 4000);
    });
}