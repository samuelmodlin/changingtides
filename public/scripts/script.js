function openNav() {
  if ($(window).width() <= 760) {
    $("#mySidenav").css('width', '100%');
  }
  else {
    $("#mySidenav").css('width', '250px');
    $(".content").css('marginLeft', '250px');
  }
  $("#topnav").css('transparancy', '0');
}
function closeNav() {
  $("#mySidenav").css('width', '0');
  if ($(".content").css('marginLeft') != "0"){
    $(".content").css('marginLeft', '0');
  }
  $("#topnav").css('transparancy', '100');
}
$(".video").click(function(){
  $("#videoModal").modal('show');
});
$('#videoModal').on('hidden.bs.modal', function (e) {
  var leg=$("#vid-iframe").attr("src");
  $("#vid-iframe").attr("src", leg)
});
$("#submit").click(function(){
  var name = $("#inputName").val();
  var email = $("#inputEmail").val();
  var text = $("#textArea").val();
  var reason = $("#select").val();
  if (!(name == "" || email == "" || text == "")){
    $("#inputName").val('');
    $("#inputEmail").val('');
    $("#textArea").val('');
    $("#select").val('');
    $("#success-alert").css('display', 'block');
    $.ajax({
      url: '/contact/submit',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          name: name,
          email: email,
          message: text,
          reason: reason,
        }
      )
    });
  }
});
