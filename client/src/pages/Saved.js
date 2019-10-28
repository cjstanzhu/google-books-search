import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
// import Form from "../components/Form";
import ResultContainer from "../components/ResultContainer";
import ResultCard from "../components/ResultCard";

class Saved extends Component {
    state = {
        savedBooks: []

    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = () => {
        API.getSavedBooks()
            .then(res => {
                // console.log(res.data);
                this.setState({ savedBooks: res.data });
            })
            .catch(err => console.log(err));

    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));

    };


    render() {
        return (
            <>
                <NavBar />
                <Wrapper>
                    <Title>
                        <h1>📚 Google Books Search</h1>
                        <h3>View Saved Books of Interest</h3>
                    </Title>
                    <ResultContainer>
                        {this.state.savedBooks.map(book => (
                            <ResultCard
                                id={book._id}
                                key={book._id}
                                title={book.title}
                                authors={book.authors}
                                link={book.link}
                                description={book.description}
                                image={book.image}
                                buttonClick={this.deleteBook}
                                buttonType="Delete Book"
                            />
                            
                        ))}
                    </ResultContainer>
                </Wrapper>
            </>
        );
    };

};

export default Saved;

