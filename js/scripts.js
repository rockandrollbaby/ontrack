$(document).ready(function() {
  $("form#coding").submit(function(event) {

    var companySize = $("select#companySize").val();
    var webApplications = $("select#webApplications").val();
    var frameWork = $("select#frameWork").val();
    var backEnd = $("select#backEnd").val();
    var macPC = $("select#macPC").val();

    var career = (companySize + webApplications + frameWork + backEnd + macPC);

    $("#track").empty().append(career);
    $("#career").show();

    event.preventDefault();
  });
});
