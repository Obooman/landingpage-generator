;(function(){
	Ployer.getFile = function(url, func) {
		var xmlhttp = new XMLHttpRequest()

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				func && func(xmlhttp.responseText)
			}
		}
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");

		xmlhttp.send({});
	}
})(window,Ployer)