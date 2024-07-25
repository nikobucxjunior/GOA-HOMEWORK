var list = document.getElementById("list");
var childNodes = list.childNodes;
childNodes.forEach(function(node) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    console.log(node.tagName); 
  }
});