// beer.js
//
// change the recipe when requested.

///////////////

function changeBeer(name)
{

  // make the url
  var url = 'http://www.donaldmarino.com/beer/' + name + '.html';

  // make the req obj
  var xmlreq = false;

/*@if (@_jscript_version >= 5)
// JScript gives us Conditional compilation, we can cope with old IE versions.
// and security blocked creation of the objects.
 try {
  xmlreq = new ActiveXObject("Msxml2.XMLHTTP");
 } catch (e) {
  try {
   xmlreq = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (E) {
   xmlreq = false;
  }
 }
@end @*/
if (!xmlreq && typeof XMLHttpRequest!='undefined') {
	try {
		xmlreq = new XMLHttpRequest();
	} catch (e) {
		xmlreq=false;
	}
}

// make the call
xmlreq.open("GET",url,true);
xmlreq.onreadystatechange=function(){
 if (xmlreq.readyState==4){
  var mainDiv = document.getElementById('main');
  mainDiv.innerHTML = xmlreq.responseText;
 }
}
xmlreq.send(null);

  }