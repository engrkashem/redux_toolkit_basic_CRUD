import editImage from '../../assets/edit.svg';
import deleteImage from '../../assets/delete.svg';

const Transaction = () => {
  return (
    <li className="transaction income">
            <p>Earned this month</p>
            <div className="right">
              <p>৳ 100</p>
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
