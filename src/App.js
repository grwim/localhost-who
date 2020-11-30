import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Graph } from "react-d3-graph";

// Todos
// - add on hover / click box 
// add on click zoom 
// animate on node hover? 

// how to export as pure JS 
// wrap react.render - script that ... React dom server. render to string 
// https://reactjs.org/docs/add-react-to-a-website.html

function App() {

  const proj_color = "#64C152"
  const pers_color = "#7E52C1"
  const pers_size = "300"

  // graph payload (with minimalist structure)
  const data = {
    nodes: [{ id: "Weeve", symbolType: "wye", color:proj_color}, { id: "HotSpring", symbolType: "wye", color:proj_color}, { id: "PropWatch", symbolType: "wye", color:proj_color}, { id: "Vocalhost", symbolType: "wye", color:proj_color}, 
            { id: "Hyphen-ated", symbolType: "wye", color:proj_color}, { id: "Epiphinate", symbolType: "wye", color:proj_color}, { id: "Cadenza", symbolType: "wye", color:proj_color}, { id: "Focalhost", symbolType: "wye", color:proj_color},  
            { id: "Trustloop", symbolType: "wye", color:proj_color}, { id: "VerbAI", symbolType: "wye", color:proj_color}, 
            { id: "Calvin", size:pers_size, color:pers_color}, { id: "Konrad", size:pers_size, color:pers_color}, { id: "Severin", size:pers_size , color:pers_color}, { id: "Owen", size:pers_size, color:pers_color}, { id: "Miguel", size:pers_size, color:pers_color}, { id: "Baran", size:pers_size, color:pers_color}, { id: "Andy", size:pers_size, color:pers_color}, { id: "Innocent", size:pers_size, color:pers_color}, { id: "Josh", size:pers_size, color:pers_color}, { id: "Joshi", size:pers_size, color:pers_color},
            { id: "Raphäel", size:pers_size, color:pers_color}, { id: "Penelope", size:pers_size, color:pers_color}, { id: "Wanessa", size:pers_size, color:pers_color}, { id: "Emily", size:pers_size, color:pers_color}, { id: "James", size:pers_size, color:pers_color}, { id: "Hakon", size:pers_size, color:pers_color}],
    links: [
        { source: "Calvin", target: "Weeve" },
        { source: "Konrad", target: "Weeve" },
        { source: "Miguel", target: "Weeve" },
        { source: "Baran", target: "Weeve" },
        { source: "Andy", target: "Weeve" },
        { source: "Severin", target: "Weeve" },
        { source: "Innocent", target: "Weeve" },
        { source: "Josh", target: "Weeve" },
        { source: "Owen", target: "Weeve" },
        { source: "Hakon", target: "Weeve" },
        
        { source: "Severin", target: "HotSpring" },
        { source: "Konrad", target: "HotSpring" },
        { source: "Calvin", target: "HotSpring" },
        { source: "Joshi", target: "HotSpring" },
        { source: "Miguel", target: "HotSpring" },
        { source: "Baran", target: "HotSpring" },

        { source: "Raphäel", target: "PropWatch" },
        { source: "Konrad", target: "PropWatch" },
        { source: "Baran", target: "PropWatch" },
        { source: "Andy", target: "PropWatch" },
        { source: "Penelope", target: "PropWatch" },
        { source: "Innocent", target: "PropWatch" },
        { source: "Josh", target: "PropWatch" },
        { source: "Wanessa", target: "PropWatch" },

        { source: "Owen", target: "Cadenza" },
        { source: "Konrad", target: "Cadenza" },
        { source: "James", target: "Cadenza" },

        { source: "Owen", target: "Vocalhost" },
        { source: "Konrad", target: "Vocalhost" },

        { source: "Wanessa", target: "Focalhost" },
        { source: "Konrad", target: "Focalhost" },

        { source: "Owen", target: "Hyphen-ated" },
        { source: "Konrad", target: "Hyphen-ated" },
        { source: "Innocent", target: "Hyphen-ated" },
        { source: "Emily", target: "Hyphen-ated" },
        { source: "Raphäel", target: "Hyphen-ated" },

        { source: "Andy", target: "VerbAI" },

        { source: "Owen", target: "Epiphinate" },
        { source: "Konrad", target: "Epiphinate" },

        { source: "Wanessa", target: "Trustloop" },
        { source: "Konrad", target: "Trustloop" },


        // { source: "Weeve", target: "HotSpring", type:"CURVE_SMOOTH"},
        // { source: "Weeve", target: "Trustloop", type:"CURVE_SMOOTH"},

    ],
  };

  // the graph configuration, you only need to pass down properties
  // that you want to override, otherwise default ones will be used
  const myConfig = {
    // nodeHighlightBehavior: true,
    automaticRearrangeAfterDropNode: true,
    d3: {
      "alphaTarget": 0.05,
      "gravity": -300,
      "linkLength": 150,
      "linkStrength": .5,
      "disableLinkForce": false
    },
    node: {
        color: "lightgreen",
        size: 120,
        highlightStrokeColor: "blue",
        fontColor: "white",
        labelPosition: "bottom",
    },
    link: {
        highlightColor: "lightblue",
        color: "brown",
    },
  };

  // graph event callbacks
  const onClickGraph = function() {
    // window.alert(`Clicked the graph background`);
  };

  const onClickNode = function(nodeId) {
    // window.alert(`Clicked node ${nodeId}`);    
  };

  const onDoubleClickNode = function(nodeId) {
    // window.alert(`Double clicked node ${nodeId}`);
  };

  const onRightClickNode = function(event, nodeId) {
    // window.alert(`Right clicked node ${nodeId}`);
  };

  const onMouseOverNode = function(nodeId) {
    // window.alert(`Mouse over node ${nodeId}`);
    // change 'hoverState' of node, according to nodeId?

    // window.alert(Mouse over node ${nodeId});
    // change 'hoverState' of node, according to nodeId?

    var id_selector = '#' + nodeId  
    // get a DOM reference = id={nodeId}
    const node = document.querySelector(id_selector)
    console.log(nodeId)
    console.log(node) // now have node details to fill in tooltip details with 

    // 1. OBTAIN LOCATION FOR TOOLTIP
    //  a. CAN EITHER display tooltip on mouse location 

    //  b. OR find node location in the window 
    const coordinates = { "x": node.getBoundingClientRect().x, "y": node.getBoundingClientRect().y }
    console.log(coordinates)

    // ToDo - Create, Display tooltip



    // // ~~~OPTION 3 (location for tooltip)~~~~~~
    // // find its location in the SVG canvas
    // // add the tooltip as a child 
    // const canvas = document.querySelector(#uniquely identifying canvas thing')

    // // Tooltip has to be SVG and use the cx and cy properties 
    // const coordinates = { "x": node. }

    // canvas.addChild(tooltip)

  };

  const onMouseOutNode = function(nodeId) {
    // window.alert(`Mouse out node ${nodeId}`);
  };

  const onClickLink = function(source, target) {
    // window.alert(`Clicked link between ${source} and ${target}`);
  };

  const onRightClickLink = function(event, source, target) {
    // window.alert(`Right clicked link between ${source} and ${target}`);
  };

  const onMouseOverLink = function(source, target) {
    // window.alert(`Mouse over in link between ${source} and ${target}`);
  };

  const onMouseOutLink = function(source, target) {
    // window.alert(`Mouse out link between ${source} and ${target}`);
  };

  const onNodePositionChange = function(nodeId, x, y) {
    // window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Graph
          id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={data}
          config={myConfig}
          onClickNode={onClickNode}
          onDoubleClickNode={onDoubleClickNode}
          onRightClickNode={onRightClickNode}
          onClickGraph={onClickGraph}
          onClickLink={onClickLink}
          onRightClickLink={onRightClickLink}
          onMouseOverNode={onMouseOverNode}
          onMouseOutNode={onMouseOutNode}
          onMouseOverLink={onMouseOverLink}
          onMouseOutLink={onMouseOutLink}
          onNodePositionChange={onNodePositionChange}
        />;
      </header>
    </div>
  );
}

export default App;
