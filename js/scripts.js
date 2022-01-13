$(document).ready(function() {

    $("#design").click(function(){
      $(".design-icon-showing").toggle();
      $(".design-hidden").toggle();
    });


    $("#designpar").click(function(){
        $(".design-icon-showing").toggle();
        $(".design-hidden").toggle();
    });

    $("#dev").click(function(){
        $(".dev-icon-showing").toggle();
        $(".dev-hidden").toggle();
      });

    $("#devpar").click(function(){
        $(".dev-icon-showing").toggle();
        $(".dev-hidden").toggle();
      });

    $("#product").click(function(){
        $(".product-icon-showing").toggle();
        $(".product-hidden").toggle();
      });

    $("#productpar").click(function(){
        $(".product-icon-showing").toggle();
        $(".product-hidden").toggle();
      });

});

$(document).ready(function() {
    
    $("#submitForm").click(function(){
        let Name = (document.getElementById("Name").value )
        let  Email = (document.getElementById("Email").value )
        let Message = (document.getElementById("Message").value )
        // let key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
        if (Name == '' || Email == '' || Message == '') {
            alert('Please fill out the required fields');
        } else {
            alert(' Hi ' + Name + '! ' + ' Thank you for contacting us. We shall respond promptly!');
        }
    });
});

