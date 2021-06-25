console.log('it works')

$(document).ready(function () {
    $('.button-primary contact_btn').click(function (event){
           event.preventDefault()
           console.log('.Clicked button')
   
   let name = $('.form-control').val()
   let email = $('.form-control').val()
   let company = $('.form-control').val()
   let link = $('.form-control').val()
   let message = $('.form-control').val()
   var statusElm = $('.status')
   statusElm.empty()
   if(email.lenght > 5 && email.includes('@')&& email.includes('.')){
    statusElm.append('<div>Email is vaild </div>')
   }else {
    statusElm.append('<div>Email is not vaild </div>')
   }

   if(message.lenght < 10){
    statusElm.append('<div>message is vaild </div>')   
   }else{
    statusElm.append('<div>message is not vaild </div>')
   }
        })


})