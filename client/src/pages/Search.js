import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Form from "../components/Form";
import ResultContainer from "../components/ResultContainer";
import ResultCard from "../components/ResultCard";

class Search extends Component {
    state = {
        searchResults: [],
        searchTerm: ""
    };

    // componentDidMount() {
    
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    };
    
    handleFormSubmit = event => {
        event.preventDefault();

        API.searchBooks(this.state.searchTerm)
            .then(res => {
                this.setState({ searchResults: res.data.items })
                
                // console.log(res.data.items);
                // console.log(res.data.items[0].volumeInfo.title); //title
                // console.log(res.data.items[0].volumeInfo.authors); //authors
                // console.log(res.data.items[0].volumeInfo.canonicalVolumeLink); //link
                // console.log(res.data.items[0].volumeInfo.description); //description
                // console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail); //image

            })
            .catch(err => console.log(err));

    };

    saveBook = id => {
        // console.log(this.state.searchResults[id]);
        let book = this.state.searchResults[id]

        API.saveBook({
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                link: book.volumeInfo.canonicalVolumeLink,
                description: book.volumeInfo.description,
                image: book.volumeInfo.imageLinks.thumbnail
            })
            .then(res => {
                // console.log("book saved");
                alert("Book has been successfully saved!")
            })
            .catch(err => {
                console.log(err)
                alert("Book has already been saved!")
            });

    };


    render() {
        return (
            <>
                <NavBar />
                <Wrapper>
                    <Title>
                        <h1>📚 Google Books Search</h1>
                        <h3>Search For and Save Books of Interest</h3>
                    </Title>
                    <Form
                        name="searchTerm"
                        value={this.state.searchTerm}
                        onChange={this.handleInputChange}
                        onClick={this.handleFormSubmit}
                    />
                    <ResultContainer>
                        {this.state.searchResults.map((book, index) => (
                            <ResultCard
                                id={index}
                                key={index}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                link={book.volumeInfo.canonicalVolumeLink}
                                description={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                buttonClick={this.saveBook}
                                buttonType="Save Book"
                            />
                            
                        ))}
                    </ResultContainer>
                </Wrapper>
            </>
        );
    };

};

export default Search;

