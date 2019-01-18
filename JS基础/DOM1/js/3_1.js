window.onload = function () {
    var table = document.getElementById("data");
    var tbody = table.getElementsByTagName('tbody')[0];
    var tr = tbody.getElementsByTagName("tr");
    for (var i = 0, len = tr.length; i < len; i++) {
        if (i % 2 != 0) {
            tr[i].className = 'blue'
        }
    }
}
