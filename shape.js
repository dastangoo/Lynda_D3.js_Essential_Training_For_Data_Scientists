var dataArray = [5, 11, 18];

// With jquery, you can manipulate DOM
// $("body").append("<svg></svg>");

// With d3.js, you can manipulate DOM
var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");
svg.selectAll("rect").data(dataArray).enter().append("rect")
      .attr("height", function (d) { return d * 15 } )
      .attr("width", "50")
      .attr("fill", "pink")
      .attr("x", function (d, i) { return i * 60; } )
      .attr("y", function (d, i) { return 300 - (d * 15); });

var newX = 300;
svg.selectAll("circle.first").data(dataArray).enter().append("circle")
      .attr('class', 'first')
      .attr('cx', function (d, i) {
        newX += (d * 3) + (i * 20);
        return newX;
      })
      .attr('cy', '90')
      .attr('r', function (d) {
        return d * 3; });
        
var newX = 600;
svg.selectAll("ellipse").data(dataArray).enter().append("ellipse")
      .attr('cx', function (d, i) {
        newX += (d * 3) + (i * 20);
        return newX;
      })
      .attr('cy', '90')
      .attr('rx', function (d) {
        return d * 3; })
      .attr('ry', '30');
        
var newX = 900;
svg.selectAll("line").data(dataArray).enter().append("line")
      .attr('x1', newX)
      // .style('stroke', 'green')
      // .attr('stroke', 'blue')
      // .attr('stroke-width', '2')
      .attr('y1', function (d, i) {
        return 80 + (i * 20);
      })
      .attr('x2', function (d) {
        return newX + (d * 15);
      })
      .attr('y2', function (d, i) {
        return 80 + (i * 20);
      });