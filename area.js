var dataArray = [25, 26, 28, 32, 37, 45, 55, 70, 90, 120, 135, 150, 160, 172, 177, 180],
    dataYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'], height, width, y, area, svg, yAxis, margin, chartGroup;

height = 200;
width = 500;

margin = {left: 50, right: 50, top: 40, bottom: 0};
y = d3.scaleLinear()
            .domain([0, 180])
            .range([height, 0]);


yAxis = d3.axisLeft(y);

area = d3.area()
                .x(function (d, i) {
                  return i * 20;
                })
                .y0(height)
                .y1(function (d) {
                  return y(d);
                });

svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");
chartGroup = svg.append("g").attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
chartGroup.append("path").attr("d", area(dataArray));
chartGroup.append("g").attr("class", "axis y").call(yAxis);