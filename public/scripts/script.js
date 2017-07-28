function openNav() {
  $("#mySidenav").css('width', '250px');
  $("#main").css('marginLeft', '250px');
  $("#topnav").css('display', 'none');
}
function closeNav() {
  $("#mySidenav").css('width', '0');
  $("#main").css('marginLeft', '0');
  $("#topnav").css('display', 'block');
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
});
