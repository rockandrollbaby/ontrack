$(document).ready(function() {
  $("form#coding").submit(function(event) {

    var companySize = $("select#companySize").val();
    var webApplications = $("select#webApplications").val();
    var frameWork = $("select#frameWork").val();
    var backEnd = $("select#backEnd").val();
    var macPC = $("select#macPC").val();




    $("#rate").empty().append(quote);
    $("#track").show();

    event.preventDefault();
  });
});
