import React from "react";

function ResultCard(props) {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4>
                        <a href={props.link}>
                            {props.title}
                        </a>
                        <button
                            className={props.buttonType === "Save Book" ? "btn btn-success float-right" : "btn btn-danger float-right"}
                            data-id={props.id}
                            onClick={() => props.buttonClick(props.id)}
                        >
                            {props.buttonType}
                        </button>

                    </h4>
                    <p>Written By: {props.authors.join(", ")}</p>

                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-2 text-center">
                            <img alt={props.title} src={props.image} />
                        </div>

                        <div className="col-10">
                            <p>{props.description}</p>
                        </div>

                    </div>
                </div>

            </div>
            <br />
        </>
    );
};

export default ResultCard;

