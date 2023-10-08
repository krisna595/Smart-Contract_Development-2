// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Library {
    struct Book {
        string isbn;
        string title;
        uint256 year;
        string author;
    }

    address public admin;
    mapping(string => Book) public books;

    event BookAdded(string isbn, string title, uint256 year, string author);
    event BookUpdated(string isbn, string title, uint256 year, string author);
    event BookRemoved(string isbn);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function addBook(string memory _isbn, string memory _title, uint256 _year, string memory _author) public onlyAdmin {
        require(bytes(books[_isbn].isbn).length == 0, "Book with ISBN already exists");
        books[_isbn] = Book(_isbn, _title, _year, _author);
        emit BookAdded(_isbn, _title, _year, _author);
    }

    function updateBook(string memory _isbn, string memory _title, uint256 _year, string memory _author) public onlyAdmin {
        require(bytes(books[_isbn].isbn).length != 0, "Book with ISBN does not exist");
        books[_isbn] = Book(_isbn, _title, _year, _author);
        emit BookUpdated(_isbn, _title, _year, _author);
    }

    function removeBook(string memory _isbn) public onlyAdmin {
        require(bytes(books[_isbn].isbn).length != 0, "Book with ISBN does not exist");
        delete books[_isbn];
        emit BookRemoved(_isbn);
    }

    function getBook(string memory _isbn) public view returns (string memory, string memory, uint256, string memory) {
        require(bytes(books[_isbn].isbn).length != 0, "Book with ISBN does not exist");
        Book memory book = books[_isbn];
        return (book.isbn, book.title, book.year, book.author);
    }
}
