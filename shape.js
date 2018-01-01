var dataArray = [5, 11, 18];

// With jquery, you can manipulate DOM
// $("body").append("<svg></svg>");

// With d3.js, you can manipulate DOM
var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");
svg.selectAll("rect").data(dataArray).enter().append("rect")
      .attr("height", function (d) { return d*15; } )
      .attr("width", "50")
      .attr("fill", "pink")
      .attr("x", function (d, i) { return i * 60; } )
      .attr("y", function (d, i) { return 300 - (d * 15); });