var user_comment = document.getElementById("data").value;

alert('words: '+user_comment);
// d3.json() 

function get_comment(){
    var user_comment = document.getElementById("data").value;
    // alert(user_comment)
    d3.json('/get/'+user_comment).then(function (data) {
        console.log(data['get'])
        var response_area=document.getElementById('bot_response');
        response_area.innerHTML= data['get'];
    })
    
}