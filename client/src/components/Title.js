import React from "react";

function Title(props) {
    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    {props.children}
                </div>
            </div>
            <hr />
            <br />
        </>
    );
};

export default Title;

