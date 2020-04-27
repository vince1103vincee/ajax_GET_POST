document.getElementById("search").onclick = function() {
    // 發送 Ajax 查詢請求並處理
    var request = new XMLHttpRequest();
    request.open("GET", "service.php?number=" + document.getElementById("keyword").value);
    request.send();

    request.onreadystatechange = function() {
        // 伺服器請求完成
        if (request.readyState === 4) {
            // 伺服器回應成功
            if (request.status === 200) {
                var type = request.getResponseHeader("Content-Type");   // 取得回應類型

                // 判斷回應類型，這裡使用 JSON
                if (type.indexOf("application/json") === 0) {               
                    var data = JSON.parse(request.responseText);

                    if (data.number) {
                        document.getElementById("searchResult").innerHTML = '[找到員工] 員工編號：' +data.number + ', 姓名：' +
                                                                                data.name + ', 性別：' + data.sex;
                    } else {
                        document.getElementById("searchResult").innerHTML = data.msg;
                    }
                }
            } else {
                alert("發生錯誤: " + request.status);
            }
        }
    }
}

document.getElementById("save").onclick = function() {
    // 發送 Ajax 查詢請求並處理
    var request = new XMLHttpRequest();
    request.open("POST", "service.php");

    // POST 參數須使用 send() 發送
    var data = "name=" + document.getElementById("staffName").value +
                "&number=" + document.getElementById("staffNumber").value +
                "&sex=" + document.getElementById("staffSex").value;

    // POST 請求必須設置表頭在 open() 下面，send() 上面
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(data);

    request.onreadystatechange = function() {
        // 伺服器請求完成
        if (request.readyState === 4) {
            // 伺服器回應成功
            if (request.status === 200) {
                var type = request.getResponseHeader("Content-Type");   // 取得回應類型

                // 判斷回應類型，這裡使用 JSON
                if (type.indexOf("application/json") === 0) {               
                    var data = JSON.parse(request.responseText);

                    if (data.name) {
                        document.getElementById("createResult").innerHTML = '員工：' + data.name + '，儲存成功！';
                    } else {
                        document.getElementById("createResult").innerHTML = data.msg;
                    }
                }
            } else {
                alert("發生錯誤" + request.status);
            }
        }
    }
}