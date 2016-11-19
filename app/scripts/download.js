;(function(window,Ployer){
	Ployer.download = function(name, contents, mime_type) {
	    mime_type = mime_type || "text/plain";

	    var blob = new Blob([contents], {type: mime_type});

	    var dlink = document.createElement('a');
	    	dlink.download = name;
	    	dlink.href = window.URL.createObjectURL(blob);
	    	
	    dlink.onclick = function(e) {
	        var that = this;
	        setTimeout(function() {
	            window.URL.revokeObjectURL(that.href);
	        }, 1500);
	    };

	    dlink.click();
	    dlink.remove();
	}
})(window,Ployer)