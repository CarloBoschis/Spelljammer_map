d3.html("topside_bral.svg").then(function (newDocument) {
    const svg = newDocument.querySelector("svg");
    document.querySelector("#visualization-container").appendChild(svg);
/*
    let zoom = d3.zoom()
        .on('zoom', handleZoom)
        .translateExtent([[0, 0], [20868, 14738]])
        .scaleExtent([1, 5]);

    function handleZoom(e) {
        d3.select('svg g')
            .attr('transform', e.transform);
    }

    function initZoom() {
        d3.select('svg')
            .call(zoom);
    }
    initZoom() */
})

d3.html("UndersideBral.svg").then(function (newDocument) {
    const svg2 = newDocument.querySelector("svg");
    document.querySelector("#visualization-container2").appendChild(svg2);
})

function infoTab(id) {
    // Declare all variables
    var i, tabcontent;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontentprimespace");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(id).style.display = "block";
}
function infoTab2(id) {
    // Declare all variables
    var i, tabcontent;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontentprimespace2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(id).style.display = "block";
}