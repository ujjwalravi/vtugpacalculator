$(document).ready(function() {
    $('.gpasubmit').click(function() {
        var commaGpa = $('#sgpaplaceholder').val();
        var arrGpa = commaGpa.split(',');
        var credits = [20, 20, 24, 24, 25, 24, 20, 18];
        if (arrGpa.length == 0) {
            $('.calculatecgpa').text('Enter GPAs, this field cannot be blank').css('color', 'red');
        }
        else {
            var finalCGPA = calculatecgpa(arrGpa, credits);
            var cgpatopercent = calculateper(finalCGPA);
            if (finalCGPA == 0) {
                $('.calculatecgpa').text('Enter GPAs, this field cannot be blank or 0').css('color', 'red');
            }
            else {
            $('.calculatecgpa').text('Your overall CGPA is ' + finalCGPA + ' and percentage obtained is ' + cgpatopercent + '%').css('color', 'blue');
            }
        }
    });
});

function calculatecgpa(a, c) {
    var sum = 0;
    var csum = 0;
    var i = 0;
    for (i=0; i<a.length; i++) {
        sum = sum + (+a[i]*c[i]);
        csum = csum + c[i];
    }
    return (sum/csum).toFixed(2);
}

function calculateper(g) {
    return ((g-0.75)*10).toFixed(2);
}