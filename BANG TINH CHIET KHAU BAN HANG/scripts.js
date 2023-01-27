
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    var prevRowHeight = 0;
        $(".item-tr").each(function(){
            // console.log($(this).height());
            var maxHeight = 1000;
            var eachRowHeight = $(this).height();
            if((prevRowHeight + eachRowHeight) > maxHeight){
                $(this).before('<div style="page-break-after:always"></div>');
                console.log("add page break before");
            }
            prevRowHeight = $(this).height();
        });
});