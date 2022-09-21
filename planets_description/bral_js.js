d3.html("topside_bral.svg").then(function (newDocument) {
    const svg = newDocument.querySelector("svg");
    document.querySelector("#visualization-container").appendChild(svg);

    let zoom = d3.zoom()
        .on('zoom', handleZoom)
        .scaleExtent([0, 3]);

    function handleZoom(e) {
        d3.select('svg g')
            .attr('transform', e.transform);
    }

    function initZoom() {
        d3.select('svg')
            .call(zoom);
    }
    initZoom()
})

function infoTab (id){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}



function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }