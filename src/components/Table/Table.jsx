import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { removeBook } from "../../redux/bookslice";
import { updateBook } from "../../redux/bookslice";
import { useDispatch } from "react-redux";

function TableComponent() {
  const books = useSelector((state) => state.bookshelf);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  const handleEdit = (id) => {
    dispatch(updateBook(id));
  };
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.books.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item.name + item.description)}
                      className="btn btn-danger">
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(item.name + item.description)}
                      className="btn btn-warning">
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default TableComponent;
