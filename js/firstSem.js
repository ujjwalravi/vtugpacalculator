$(document).ready(function() {
  $('.submit').click(function() {
    var totalScore = 0;
    var totalCredit = 0;
    var x = $(".myForm").serializeArray();
    $.each(x, function(i, field) {
      if (((+field.value)== null)|| ((+field.value)==0)){
        console.log('No input/Invalid Input');
      }
      else {
        totalScore = totalScore + findGrade(+field.value, +field.name);
        totalCredit = totalCredit + (+field.name);
      }
    });
    var sgpa = totalScore/totalCredit;
    $('#result').text(sgpa.toFixed(2));
  });
});

function findGrade(y,c) {
  if ((y>=90) && (y<=100))
    return 10*c;
  else if ((y>=80)&&(y<90))
    return 9*c;
  else if ((y>=70)&&(y<80))
    return 8*c;
  else if ((y>=60)&&(y<70))
    return 7*c;
  else if ((y>=45)&&(y<60))
    return 6*c;
  else if ((y>=40)&&(y<45))
    return 4*c;
  else if (y<40)
    return 0;
  else {
    $('#result').text('Some error occured please check the values');
    exit(0);
  }
}
