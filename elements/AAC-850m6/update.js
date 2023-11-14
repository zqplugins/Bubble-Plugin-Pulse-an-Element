function(instance, properties, context) {
    if(instance.data.secondsTime) return;
    instance.data.secondsTime = true;
    let times = Number(properties.times === "infinity" ? "Infinity" : properties.times);
    if(isNaN(times)) {times = "Infinity"; context.reportDebugger("Invalid parameter 'Times': " + properties.times +", instead will be used: 'Infinity'. Please check")}
const elements=properties.element_id.split(",");for(var i=0;i<elements.length;i++)$("#"+elements[i]).pulse({opacity:[0,1]},{times, duration: properties.duration});
}