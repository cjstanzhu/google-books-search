import React from "react";

function Form(props) {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <h4 className="card-header">Book Search</h4>

                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="book-input">Enter a book to search:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="book-input"
                                        name={props.name}
                                        value={props.value}
                                        onChange={props.onChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" id="book-search" onClick={props.onClick}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <br />
        </>
    );
};

export default Form;

