import { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addBook } from "../../redux/bookslice";

function FormContainer() {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook({
      name: "",
      description: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          onChange={handleChange}
          type="text"
          name="name"
          value={book.name}
          placeholder="Name of Book"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          onChange={handleChange}
          as="textarea"
          rows={3}
          name="description"
          value={book.description}
          placeholder="Book Description"
        />
      </Form.Group>
      <Button type="submit" className="btn btn-secondary">
        Submit form
      </Button>
    </Form>
  );
}

export default FormContainer;
