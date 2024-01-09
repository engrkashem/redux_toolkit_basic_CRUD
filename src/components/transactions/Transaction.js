import editImage from "../../assets/edit.svg";
import deleteImage from "../../assets/delete.svg";
import { useDispatch } from "react-redux";
import { editActive, removeTransaction } from "../../features/transaction/transactionSlice";
import { numberWithCommas } from "../../utils/thousandSeperator";

const Transaction = ({ transaction = {} }) => {
  const dispatch = useDispatch();

  const { name, amount, type,id } = transaction;

  const handleUpdate = () => {
    dispatch(editActive(transaction));
  };

  const handleDelete = () => {
    dispatch(removeTransaction(id));
  };

  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {numberWithCommas(amount)}</p>
        <button onClick={handleUpdate} className="link">
          <img className="icon" src={editImage} alt="Edit" />
        </button>
        <button onClick={handleDelete} className="link">
          <img className="icon" src={deleteImage} alt="Delete" />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
