function(instance, properties) {
	const imgSrc = "//meta-l.cdn.bubble.io/f1697302087809x110766138459000620/gear.svg";
    
    const img = $(`<img src=${imgSrc} />`)
    img.css({
        "position": "absolute",
    	"width": "100%",
        "height": "100%",
    })
    
    const preview = $(`<div></div>`).append(img);
    preview.css({
        "box-sizing": "border-box",
        "width": "100%",
        "height": "100%",
        "overflow": "hidden",
        "opacity": "50%",
    });
    
    instance.canvas.append(preview);
}