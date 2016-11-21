class FrameComponent{
	constructor(htmlString){
		var ifr = document.querySelector('iframe');
		ifr && ifr.remove();
		return this.trans(htmlString);
	}

	trans(string){
		var oFrame = document.createElement('iframe');
		var eleStr = `<body>${string}</body>`;

		getFile("./tmps/functional.tpl",function(data){
			oFrame.src = `data:text/html;charset=utf-8,%3Cbody%3E${
				encodeURIComponent(eleStr)+encodeURIComponent(data)
			}`;

			document.body.appendChild(oFrame);
		})
	}
}