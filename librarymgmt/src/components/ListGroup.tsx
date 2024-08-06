function ListGroup() {
  const items = [
    "San Jose",
    "Los Angeles",
    "San Diego",
    "Santa Barbara",
    "San Francisco",
  ];

  return (
    <>
      <h1>Oh my gah</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
