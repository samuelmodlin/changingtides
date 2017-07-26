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
  $.ajax({
    url: '/contact/submit',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(
      {
        name: $("#inputName").val(),
        email: $("#inputEmail").val(),
        message: $("#textArea").val(),
        reason: $("#select").val()
      }
    )
  });
});
