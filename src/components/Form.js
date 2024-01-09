import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTransaction,
  editInActive,
  updateTransaction,
} from "../features/transaction/transactionSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, isError, error, editing } = useSelector(
    (state) => state.transaction
  );

  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };

  // listen for edit active/inactive
  useEffect(() => {
    if (editing?.id) {
      const { name, type, amount } = editing;
      setEditMode(true);
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      setEditMode(false);
      reset();
    }
  }, [dispatch, editing]);

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createTransaction({ name, type, amount: Number(amount) }));
    reset();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateTransaction({
        id: editing?.id,
        data: { name, type, amount: Number(amount) },
      })
    );
    reset();
    setEditMode(false);
  };

  const cancelEditModeHandler = () => {
    setEditMode(false);
    dispatch(editInActive());
  };

  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={editMode ? handleUpdate : handleCreate}>
        <div className="form-group">
          <label>Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            required
            placeholder="Enter expense name"
            value={name}
          />
        </div>

        <div className="form-group radio">
          <label>Type</label>
          <div className="radio_group">
            <input
              onChange={() => setType("income")}
              type="radio"
              value="income"
              required
              name="type"
              checked={type === "income"}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              onChange={() => setType("expense")}
              type="radio"
              value="expense"
              name="type"
              placeholder="Expense"
              checked={type === "expense"}
            />
            <label>Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            required
            placeholder="Enter amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button disabled={isLoading} className="btn" type="submit">
          {editMode ? "Edit Transaction" : "Add Transaction"}
        </button>

        {!isLoading && isError && <p className="error">{error}</p>}
      </form>

      {editMode && (
        <button onClick={cancelEditModeHandler} className="btn cancel_edit">
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default Form;
