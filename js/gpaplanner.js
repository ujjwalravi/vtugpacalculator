$(document).ready(function() {
    $('.plansubmit').click(function() {
        var targetGpa = $('#targetgpaplaceholder').val();
        var endGpa = $('#endholder').val();
        var knownGpa = $('#gpaplaceholder').val();
        var commaGpa = $('#typegpaplaceholder').val();
        var sepGpa = commaGpa.split(',');
        var credits = [20, 20, 24, 24, 25, 24, 20, 18];

        console.log(sepGpa);
        if (sepGpa.length != +knownGpa) {
            $('.plannedgpa').text('The known GPA and input GPA values did not match. Try again with correct inputs.').css('color', 'red');
        }
        else {
        var cgpa = cumulativeGPA(sepGpa, +knownGpa, credits);
        var finalResult = calculatefinal(cgpa, +targetGpa, +endGpa, +knownGpa);
        console.log(finalResult);

        $('.plannedgpa').text('You need to score atleast '+ finalResult.toFixed(2) + ' GPA in next ' + (+endGpa-+knownGpa) + ' semesters each.').css('color', 'blue');
        }
    });
});

function calculatefinal(cgpa, t, eg, kg) {
    var final = ((t*(eg-kg+1))-cgpa)/(eg-kg);
    //console.log(final);
    return final;
}

function cumulativeGPA(c, k, cr) {
    var gpasum = 0;
    var creditsum = 0;
    var i = 0;
    for (i=0; i<k; i++) {
        gpasum = gpasum + (+c[i]*cr[i]);
        creditsum = creditsum + cr[i];
    }
    //console.log(gpasum/creditsum);
    return gpasum/creditsum;
}