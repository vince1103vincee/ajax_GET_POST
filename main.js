$(function(){
    $("#search").click(function(){
        $.ajax({
            type: "GET",
            url: "server.php?number=" + $("#keyword").val(),
            dataType: "json",
            success: function(data){
                if (data.number){
                    $("#searchResult").html(
                        '[Staff Found] staff number: '+data.number+ 
                        ', staff name: ' + data.name +
                        ', staff gender: ' + data.sex 
                    );
                }else{
                    $("#searchResult").html(data.msg);
                }
            },
            error: function(jqXHR){
                alert("Error: " + jqXHR.status);
            }
        });
    });

    $("#save").click(function(){
        $.ajax({
            type: "POST",
            url: "server.php",
            dataType: "json",
            data: {
                name: $("#staffName").val(),
                number: $("#staffNumber").val(),
                sex: $("#staffSex").val()
            },
            success: function(data){
                if (data.name){
                    $("#createResult").html('Staff: ' + data.name + ', saved.');
                }else{
                    $("#createResult").html(data.msg);
                }
            },
            error: function(jqXHR){
                alert("Error: "+ jqXHR.status);
            }
        });
    });
});
