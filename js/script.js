// // var title = document.getElementById("title");
// // var mydata = JSON.parse(data);
// // alert(mydata[0].title);

// // $.ajax({
// //     dataType: "json",
// //     url: url,
// //     data: data,
// //     success: success
// // });

// // $.getJSON("js/data.json", function(data){
// //     var items = [];
// //     $.each(data, function(key, val){
// //         items.push("<li id='" + key + "'>" + val + "</li>");
// //     });
// // })

// var xhr = $.getJSON("js/data.json", function(jsondata){
//     console.log(jsondata);
// })
// .done(function(){
//     console.log("second success");
// })
// .fail(function(){
//     console.log("error");
// })
// .always(function(){
//     console.log("complete");
// });

// xhr.always(function(){
//     console.log("second complete");
// });

$.getJSON("js/data.json").then((jsonData)=>{
    var portfolio = new Vue({
        el: '#portfolio',
        data: jsonData
    });
})