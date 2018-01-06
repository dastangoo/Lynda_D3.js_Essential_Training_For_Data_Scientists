var dataArray = [{x:5, y:5}, {x:10, y:15}, {x:20, y:7}, {x:30, y:18}, {x:40, y:10}],
    interpolateTypes = [d3.curveLinear, d3.curveNatural, d3.curveStep, d3.curveBasis, d3.curveBundle, d3.curveCardinal],
    svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%"), line, chartGroup, shiftX, shiftY


for (var i = 0, x = interpolateTypes.length; i < x; i++) {
  line = d3.line()
                  .x(function (d, i) {
                    return d.x * 6;
                  })
                  .y(function (d, i) {
                    return d.y * 4;
                  })
                  // .curve(d3.curveStep);
                  .curve(interpolateTypes[i]);


  shiftX = i * 250;
  shiftY = 0;

  chartGroup = svg.append("g").attr("class", "group" + i).attr("transform", "translate(" + shiftX + ", 0)");
  chartGroup.append("path")
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("d", line(dataArray));
      
      
  chartGroup.selectAll("circle.grp" + i)
    .data(dataArray)
    .enter().append("circle")
              .attr("class", function (d, i) {
                return "grp" + i;
              })
              .attr("cx", function (d, i) {
                return d.x * 6;
              })
              .attr("cy", function (d, i) {
                return d.y * 4;
              })
              .attr("r", "2");  
}

