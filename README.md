[![Build Status][travis-image]][travis-url]
[travis-url]: https://travis-ci.org/dragonwolverines/MeowKillCSS
[travis-image]: https://travis-ci.org/dragonwolverines/MeowKillCSS.svg
<br>
MeowKillCSS-for-loader is a CSS loader for loading CSS files faster (asynchronously).
<br><br>
<b>For loading CSS files asynchronously faster...</b>
<br>
```js
<html>
<head>
<script type="text/javascript" src="loader.js">
meowLoaderCSS("test_css_load.css");
</script>
<noscript>
<link href="test_css_load.css" rel="stylesheet">
</noscript>
</head>
</html>
```
<br>
<b>For loading CSS font files asynchronously faster... </b>
<br>
```js
<html>
<head>
<script type="text/javascript" src="loader.js">
var meowFontFile = "test_css_LoadFontFile.css";
// loading font files
if(meowFontFile) {
meowLoaderCSS(meowFontFile);
}
</script>
</head>
</html>
```
