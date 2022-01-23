
import { useEffect, useState } from "react";

function App(){
  const [loading, setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [money,setMoney] = useState(0);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json)=> {
      setCoins(json);
      setLoading(false);
    });
  },[money]); 
  const onchange = (e) =>{
    setMoney(e.target.value)
  };
  
  return (
    <div>
      <h1>The Coins!({coins.length})</h1>
      {loading?<strong>Loading...</strong>:<select>
        {coins.map((coin)=><option>{coin.name}({coin.symbol}):${parseInt(money)/coin.quotes.USD.price} USD</option>)}
      </select>}
      <input type="number" placeholder="input" onChange={onchange} ></input>
      
      
    </div>
  )
}
export default App;