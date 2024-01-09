import editImage from '../../assets/edit.svg';
import deleteImage from '../../assets/delete.svg';

const Transaction = ({transaction={}}) => {
  const {name, amount, type}=transaction;

  

  return (
    <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
              <p>৳ {amount}</p>
              <button className="link">
                <img className="icon" src={editImage} alt="Edit" />
              </button>
              <button className="link">
                <img className="icon" src={deleteImage} alt="Delete" />
              </button>
            </div>
          </li>
  )
};

export default Transaction;
