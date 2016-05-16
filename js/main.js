var total = "";
var val = "";
var op;
var first = true;

var operate = function(oper){
    if (val=="") return;

    if(total==""){

        if(oper == "+" || oper == "-"){
            total =0;
        } else {
            total=1;
        }
    }

    if(oper =="+"){
        total += parseInt(val);
    }
    if(oper =="-"){
        total -= parseInt(val);
    }
    if(oper == "*"){
        total *= parseInt(val);
    }

    val = " ";
    $(".ans").html("&nbsp");

    op = oper;
}

$( document ).ready(function() {

    $(".no").click(function(){
         val += $(this).text();
         $(".ans").html(val);
    });

    $(".op").click(function() {
        operate($(this).text());
    });


    $(".clear").click(function(){
        $(".ans").html("&nbsp;");
        total = "";
        val = "";
    });

    $(".result").click(function(){
        operate(op);
        $(".ans").html(total);
        total = "";
        val = "";
    });


});
