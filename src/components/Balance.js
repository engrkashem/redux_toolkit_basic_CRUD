// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../utils/thousandSeperator";

const Balance = () => {
  const { transactions } = useSelector((state) => state.transaction);

  const calcBalance = () => {
    let balance=transactions.reduce((bal,trans)=>{
      if(trans.type==='income'){
        return bal+trans.amount;
      }
      else{
        return bal-trans.amount;
      }
    },0);
    
    return numberWithCommas(balance);
  };

  // const [balance, setBalance]=useState(0)
  // useEffect(()=>{
  //   setBalance(transactions.reduce((balance, transaction)=>{
  //     if(transaction.type==='income'){
  //       return balance+transaction?.amount
  //     }else{
  //       return balance-transaction?.amount
  //     }
  //   }, 0));
  // },[transactions])
  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        {transactions?.length ? <span>{calcBalance()}</span> : <span>0</span>}
      </h3>
    </div>
  );
};

export default Balance;
