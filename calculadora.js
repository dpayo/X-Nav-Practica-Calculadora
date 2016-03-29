
var acumulador="";
$(document).ready(function(){
    $("#C").click(function(){
      reset()
    })
    $(" .numeros button ").click(function(){
        var val = $(this).val()
        acumulador=acumulador.concat(val)
        $("#display").val(acumulador)
      });

    $(" .ops button  ").click(function(){
      var dis = $("#display").val()
      var value = $(this).val()
      acumulador=acumulador+value;
      if(value=="="){
        $("#display").val(eval(dis));
        acumulador=""
      }else{
        $("#display").val(acumulador);
      }
    });

    function reset(){
        $("#display").val(" ")
        acumulador=""
    }
})
