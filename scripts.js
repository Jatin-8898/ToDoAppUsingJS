$(function(){
   
    $('.box').draggable();
    
    $('#box1').draggable({
       scroll: true, 
        revert:"invalid",    /*revert true TO COME BACK TO ITS ORIGINAL POS*/
    });
    
    $('#box2').draggable({
        axis:'x',
    });
    
    $('#box3').draggable({
        axis:'y',
    });
    
    $('#box4').draggable({
        containment: ".container",
        revert:"invalid",
    });
    
    
    
    /************************************************/
    /************DROPPABLE*********************/
    /**************************************/
    $('#droppable').droppable({
       accept: "#box1",         /*KISKO ACCEPT KARNA KA*/
        //tolerance:"fit",
        drop:function(){    
            window.alert("DROPPED ON ME");
            $(this).text("Something who has attitude is dropped here!!");
        }
    });
    
    
    /**************************************/
    /************SORTABLE*********************/
    /**************************************/
    $('#sortable').sortable({
        placeholder: "placeholderBox",
        connectWith: "#sortableToo",        /*LEFT LIST CONNECTED WITH RIGHT LIST*/
    });
    $('#sortableToo').sortable({
        placeholder: "placeholderBox",
        connectWith: "#sortable",           /*RIGHT LIST CONNECTED WITH LEFT LIST*/
    });
    
     /**************************************/
    /************TO DO LIST*********************/
    /**************************************/
    $('#todoList ul').sortable({
        connectWith:"ul",                   /*SAB UL SE CONNECT HOGA*/
        placeholder:"emptySpace",           /*EMPTYSPACE CLASS H CSS MEI*/
        item:"li:not('.listTitle, .addItem')",      /*pseudo element not lagaya*/
        
    });
    
    $('input').keydown(function(e){
       if(e.keyCode == 13){             /*ENTER KEY KA ASCI*/
           var item = $(this).val();        /*JO TYPE KIYA WOH AAYA*/
           //alert(item); 
           $(this).parent().parent().append('<li>'+ item + '<li>');/*CURRENT ke PArent ka Parent*/
           $(this).val("");     /*BLANK KARO*/
       }
        
    });
    
    $("#trash").droppable({ /*TO DROP THE FILE*/
        drop:function(event, ui){   //FUNCTION
            ui.draggable.remove();  /*JO ELEMENT DROP KIYA USKA DRAGGABLE PROPERTY REMOVE KARO*/
        }
    });
    
    
    /**************************************/
    /************ACCORDIAN*********************/
    /**************************************/
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });
    
    
    
    
    
});