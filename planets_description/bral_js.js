d3.html("topside_bral.svg").then(function (newDocument) {
    const svg = newDocument.querySelector("svg");
    document.querySelector("#visualization-container").appendChild(svg);

    let zoom = d3.zoom()
        .on('zoom', handleZoom)
        .translateExtent([[-1000, -500], [3000, 1500]])
        .scaleExtent([0.25, 10]);

    function handleZoom(e) {
        d3.select('svg g')
            .attr('transform', e.transform);
    }

    function initZoom() {
        d3.select('svg')
            .call(zoom);
    }
    initZoom();
    d3.selectAll(".checkboxOne").on("change", update);
    update()
})
