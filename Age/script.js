new FinisherHeader({
    "count": 10,
    "size": {
        "min": 1300,
        "max": 1500,
        "pulse": 0
    },
    "speed": {
        "x": {
            "min": 0.1,
            "max": 0.6
        },
        "y": {
            "min": 0.1,
            "max": 0.6
        }
    },
    "colors": {
        "background": "#000000",
        "particles": [
            "#864cff",
            "#000000",
            "#000000",
            "#864cff"
        ]
    },
    "blending": "overlay",
    "opacity": {
        "center": 0.5,
        "edge": 0.05
    },
    "skew": 0,
    "shapes": [
        "c"
    ]
});


function taha() {
    var day = document.getElementById("input_day").value;
    var months = document.getElementById("input_months").value;
    var years = document.getElementById("input_years").value;




    var sal = '1404';
    var moh = '07';
    var roz = '08';





    day = roz - day;
    months = moh - months;
    years = sal - years;






    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = day;


}