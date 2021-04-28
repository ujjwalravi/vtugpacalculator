$(document).ready(function() {
    $('.gpasubmit').click(function() {
        var gpa = $('#sgpaorcgpaplaceholder').val();
        var final = ((+gpa-0.75)*10);
        if (final <=0) {
            final = 0;
        }
        $('.calculateper').text(final + '%').css('color', 'blue');
    });
});