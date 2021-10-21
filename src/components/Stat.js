const Stat = ({ currency }) => {
  const {
    rank, low, high, price, totalVolume,
  } = currency;

  return (
    <ul className="Stat-Container">
      <li>
        <h2>Rank</h2>
        <p>{rank}</p>
      </li>
      <li>
        <h2>Price</h2>
        <p>{`$${price}`}</p>
      </li>
      <li>
        <h2>24 Hour Low</h2>
        <p>{`$${low}`}</p>
      </li>
      <li>
        <h2>24 Hour High</h2>
        <p>{`$${high}`}</p>
      </li>
      <li>
        <h2>Total Volume</h2>
        <p>{totalVolume}</p>
      </li>
    </ul>
  );
};

export default Stat;
