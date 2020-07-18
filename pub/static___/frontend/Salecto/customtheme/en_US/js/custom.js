require(['jquery', 'mage/storage', 'jquery/ui'], function($,storage){

    $(document).ready(function(){
        $(".block.newsletter .action.subscribe").on("submit", function(e){
            alert("This is just a test.");
            e.preventDefault();
        });
    });

});


