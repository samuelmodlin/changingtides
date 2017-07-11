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
  $("#vid").get(0).pause();
})

/*$(document).scroll(function(){
    if($(document).scrollTop()>10){
      $(".navbar").css('backgroundColor', 'rgba(0, 0, 0, 0.5)')
    } else {
      $(".navbar").css('backgroundColor', 'rgba(0, 0, 0, 0)')
    }
});*/
