d3.html("topside_bral.svg").then(function (newDocument) {
    const svg = newDocument.querySelector("svg");
    document.querySelector("#visualization-container").appendChild(svg);

    let zoom = d3.zoom()
        .on('zoom', handleZoom)
        .translateExtent([[-50000, -50000], [50000, 50000]])
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
