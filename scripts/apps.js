var display_button = document.querySelector("#display-modal-box");
var modal_container = document.querySelector(".modal-container");
 isEnable = false;

display_button.addEventListener('click', function(){
  model_generator("هدیه ات رو بگیر", "هدیه نوروزی خودت را از وبسایت پارس آکادمی دریافت کن بدون هیچگونه پرداختی کاملا رایگان")
})


function model_generator(subject, text){
  if (isEnable == false){
    document.querySelector(".modal-box span").innerHTML = subject;
    document.querySelector(".modal-box p").innerHTML = text;
    isEnable = true;
    modal_container.style.display = "flex";
  }
}

var close_modal = document.querySelector("#close_button")
    var modal = document.querySelector(".modal-box");
    close_modal.addEventListener('click', function(){
      if (isEnable == true){
        modal.style.animation = "fade 1s 1 forwards";
        isEnable = false;
        setTimeout(function(){
          modal.style.animation = "display-modal 1s 1 forwards";
          modal_container.style.display = "none";
        }, 1200) 
      }
})
