$(document).ready(function () {
    $("#left").click(function () {
        $(this).text(Date());
    });
});



$(document).ready(function () {
    $("#right").hover(function () {
        $("#logo").addClass("imgSize");
    },
        function () {
            $("#logo").removeClass("imgSize");
        });
});



 

// function resizeImage() {
//     const img = document.getElementById("logo");

//     img.classList.toggle("imgSize");
// }
  
