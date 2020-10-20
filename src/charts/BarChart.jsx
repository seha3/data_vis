import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
import '../App.css';


function BarChart({ width, height, data }){
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .style("border", "3px solid gray")
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {
        
        const svg = d3.select(ref.current);
        var selection = svg.selectAll("rect").data(data);
        var yScale = d3.scaleLinear()
                            .domain([0, d3.max(data)])
                            .range([0, height-100]);
        
        selection
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 45)
            .attr("y", (d) => height)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", "orange")
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))
        
        selection
            .exit()
            .transition().duration(300)
                .attr("y", (d) => height)
                .attr("height", 0)
            .remove()

        // selection 
        // .data(data).enter()
        //     .append("text")

    }


    return (
        <div>
          <div className="chart">
            <svg ref={ref}>
            </svg>
          </div>
          <br />
          <div>
            <div>
              <span className="text-secondary h5">Promedio IDH:</span>
              <span className="text-secondary"> _____</span>
            </div>
            <div>
              <span className="text-secondary h5">IDH más alto:</span>
              <span className="text-secondary"> _____</span>
            </div>
            <div>
              <span className="text-secondary h5">IDH más bajo:</span>
              <span className="text-secondary"> _____</span>
            </div>
          </div>
        </div>
        
    )

}

export default BarChart;