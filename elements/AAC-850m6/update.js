function(instance, properties, context) {
let elements=properties.element_id.split(",");for(var i=0;i<elements.length;i++)$("#"+elements[i]).pulse({opacity:[0,1]},{times:999999});
}