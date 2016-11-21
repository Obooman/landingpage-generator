;(function(window,Ployer){
	Ployer.setStyles = function(ele){
		if( ele.children && ele.children.length ){
			for( var i=0;i<ele.children.length;i++ ){
				this.setStyles(ele.children[i]);
			}
		}

		var styles = window.getComputedStyle(ele,false);
		var keys = Object.prototype.constructor.keys(styles)

		keys.forEach(function(key){
			if( typeof key == "number" ) return;
			if( /^webkit[A-Z]/i.test(key) ) return;

			var value = styles[key];

			if(
				value == "none" ||
				value == "normal" ||
				value == "auto" ||
				!value ||
				(Ployer.data.defaultStyle.div[key] && Ployer.data.defaultStyle.div[key] == value)
			){}else {
				ele.style[key] = styles[key]
			}
		})
	}
})(window,Ployer)