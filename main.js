window.onload=function(){
    //document.write("HelloJavaScript");
};
$(function(){
    $("input").on("click",function(){
        alert("Hi");
    });
});
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
    });
});
