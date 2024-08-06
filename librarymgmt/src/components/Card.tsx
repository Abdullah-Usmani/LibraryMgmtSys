function Card() {
  return (
    <div className="card-book">
      <img
        className="book-cover"
        src="src/images/book1.jpg"
        alt="failure"
      ></img>
      <div className="book-details">
        <h1>Name</h1>
        <h3>Author</h3>
        <p>ISBN</p>
        <p>price</p>
      </div>
    </div>
  );
}

export default Card;
