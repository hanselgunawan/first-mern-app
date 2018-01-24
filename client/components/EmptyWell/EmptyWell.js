import React from "react";

let centerText = {
    textAlign: "center"
};

const EmptyWell = () =>
    <div className="well" style={centerText}>
        <h3 className="articleHeadline">No articles to display</h3>
    </div>

export default EmptyWell;