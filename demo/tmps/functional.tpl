</body>
<script src="http://github.demo.com/landingpage-generator/app/scripts/core.js"></script>
<script src="http://github.demo.com/landingpage-generator/app/scripts/regExp.js"></script>
<script src="http://github.demo.com/landingpage-generator/app/scripts/download.js"></script>
<script src="http://github.demo.com/landingpage-generator/app/scripts/defaultStyle.js"></script>
<script src="http://github.demo.com/landingpage-generator/app/scripts/transformStyle.js"></script>
<script src="http://github.demo.com/landingpage-generator/app/scripts/getFile.js"></script>
<script src="http://github.demo.com/landingpage-generator/app/scripts/FrameComponent.js"></script>
<script>
	Ployer.setStyles(document.body);
	document.querySelector('style').remove();
	var scripts = document.querySelectorAll('script[src^=http]');
	scripts.forEach(function(script){
		script.remove();
	});
	window.top.postMessage(document.body.innerHTML,"*");
</script>