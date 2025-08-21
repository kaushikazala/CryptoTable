import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [crypto, setCrypto] = useState([]);

  async function getData() {
    let data = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR"
    );
    setCrypto(data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
      Cryptocurrencies Table
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-3 text-left">No.</th>
              <th className="px-4 py-3 text-left">Currency Name</th>
              <th className="px-4 py-3 text-center">Preview</th>
              <th className="px-4 py-3 text-center">Symbol</th>
              <th className="px-4 py-3 text-center">Total Supply</th>
              <th className="px-4 py-3 text-center">Current Price</th>
              <th className="px-4 py-3 text-center">Market Cap</th>
              <th className="px-4 py-3 text-center">All-Time High</th>
              <th className="px-4 py-3 text-center">All-Time Low</th>
              <th className="px-4 py-3 text-center">Rank</th>
              <th className="px-4 py-3 text-center">24h High</th>
            </tr>
          </thead>
          <tbody>
            {crypto &&
              crypto.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 even:bg-gray-50 border-b"
                >
                  <td className="px-4 py-3 text-center">{index + 1}</td>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3 flex justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-full"
                    />

                  </td>
                  <td className="px-4 py-3 uppercase text-center">
                    {item.symbol}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {item.total_supply || "—"}
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-green-600">
                    ₹{item.current_price}
                  </td>
                  <td className="px-4 py-3 text-center">
                    ₹{item.market_cap}
                  </td>
                  <td className="px-4 py-3 text-center">
                    ₹{item.ath}
                  </td>
                  <td className="px-4 py-3 text-center">
                    ₹{item.atl}
                  </td>
                  <td className="px-4 py-3 text-center font-bold">
                    #{item.market_cap_rank}
                  </td>
                  <td className="px-4 py-3 text-center">
                    ₹{item.high_24h}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
