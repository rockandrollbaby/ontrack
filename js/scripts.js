$(document).ready(function() {
    $("#coding").submit(function(event) {

      var companySize = $("select#companySize").val();
      var webApplications = $("select#webApplications").val();
      var frameWork = $("select#frameWork").val();
      var frontBack = $("select#backEnd").val();
      var macPC = $("select#macPC").val();

      if (companySize === 'large' && webApplications === 'desktop' && frameWork === 'angular' &&  frontBack === 'frontend' && macPC === 'pc') {
          $('#track1').show();

     } else {
       $('#track2').show();
     }

      event.preventDefault();
    });
  });
