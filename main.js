$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        var selectedItem = $("li").eq(randomChildNumber).text();
        $("h1").text(selectedItem);
        
        // Check selected item and show corresponding image
        switch(selectedItem) {
            case "拉麵":
                $("#image-container").html("<img src='拉麵.jpg'>");
                break;
            case "滷肉飯":
                $("#image-container").html("<img src='滷肉飯.jpg'>");
                break;
            case "水餃":
                $("#image-container").html("<img src='水餃.jpg'>");
                break;
            default:
                $("#image-container").html("");
        }
    });
});
