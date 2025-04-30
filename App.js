/* 
<div id="parent">
    <div id="child">
        <h1><h1>
    </div>
</div>

*/


const parent = React.createElement(
    "div",
    { id: "parent", xyz: "abc" },
    [React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "I am a h1 heading tag"),
        React.createElement("h2", {}, "I am a h2 heading tag")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "I am a h1 heading tag"),
        React.createElement("h2", {}, "I am a h2 heading tag")]
    )]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);