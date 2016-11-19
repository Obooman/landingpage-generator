<div style="text-align: center;">
	<img src="logo.png" alt="" style="width: 180px;display: inline-block;"><br>
	<img src="name.png" alt="" style="width: 180px;display: inline-block;">
</div>
---
# Landing Page Generator
An lite generator for landing page.

we can use template files to define page section;

```html
// header.template

<div>
	<img src="{{ logo }}" alt="">
</div>
```

and use it in main page
```html
<script>
	getTmplate('path/to/template',function(data){
		// compile(data)
	})
</script>
```

You can generate an landing page by drag and drop components as soon as possible;

we will use `flex layout` to get this done;