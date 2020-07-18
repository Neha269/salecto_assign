define([
    'jquery',
    'mage/translate'
], $ => {
    $(document).ready(function(){
        $(".block.newsletter .action.subscribe").click(function(e){
            alert("This is just a test");
            e.preventDefault();
        });
    });
});
