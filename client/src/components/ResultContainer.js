import React from "react";

function ResultContainer(props) {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default ResultContainer;

