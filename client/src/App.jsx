import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import fmt from 'indian-number-format';

function App() {
  const btcval=2402566;
  
  const [loading, setLoading] = useState(true);
  const [btcdata, setBtcData] = useState({});
  const [savings, setSavings]= useState(0);
  const [diff, setdiff]= useState(0);
  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/cryptodata');
    const resData = await response.json();
    if (resData) {
      setLoading(false);
      for (const obj of resData) {
        if (obj.name === 'BTC/INR') {
          setBtcData(obj);
          break;
        }
      }
      const lastval=parseInt(btcdata.last);
      setSavings(btcval-lastval);
      const diffper=((savings/btcval)*100).toFixed(2);
      setdiff(diffper)
    } else console.log('Cant fetch data');
  };
  setInterval(fetchData,60000)
  useEffect(() => {
    fetchData();
  }, [btcdata,btcval]);

  return (
    <div className="font-sans min-h-screen flex flex-col items-center ">
      <Header />
      <section className="w-full flex flex-col items-center justify-center">
        <h1 className="text-center md:text-2xl text-slate-400 font-semibold">
          Best Price to Trade
        </h1>
        <div className="md:py-4 lg:py-6 mb-8 flex gap-2 item-center md:gap-4 justify-center md:justify-between w-11/12 ">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-[10px] text-center md:text-2xl lg:text-4xl text-teal-400 font-semibold">
              0.45%
            </h1>
            <p className="text-[8px] md:text-xs lg:text-sm text-center text-slate-400 font-semibold">
              5 mins
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 ">
            <h1 className="text-[10px] md:text-2xl lg:text-4xl text-center text-teal-400 font-semibold">
              1.08%
            </h1>
            <p className="text-[8px] md:text-xs lg:text-sm text-center text-slate-400 font-semibold">
              1 hour
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 md:gap-3">
            <h1 className="text-[12px] md:text-4xl lg:text-6xl text-center text-white font-semibold">
            ₹ {fmt.format(Math.floor(btcval))}
            </h1>
            <p className="text-[8px] md:text-sm lg:text-base text-center text-slate-400 font-semibold">
              Average BTC/INR net price including commission
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-[10px] md:text-2xl lg:text-4xl text-center text-teal-400 font-semibold">
              1.79%
            </h1>
            <p className="text-[8px] md:text-xs lg:text-sm text-center text-slate-400 font-semibold">
              1 Day
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-[10px] md:text-2xl lg:text-4xl text-center text-teal-400 font-semibold">
              10.99%
            </h1>
            <p className="text-[8px] md:text-xs lg:text-sm text-center text-slate-400 font-semibold">
              7 Days
            </p>
          </div>
        </div>
      </section>

      <div className="w-full overflow-x-auto px-4">
        {loading ? (
          <div className="text-center text-white text-3xl">Loading...</div>
        ) : (
          <table className="w-full max-w-full border-separate border-spacing-y-4 ">
            <tbody>
              <tr className="whitespace-nowrap text-slate-400 text-center font-bold">
                <th className="text-sm md:text-xl py-1 ">#</th>
                <th className="text-sm md:text-xl py-1">Platform</th>
                <th className="text-sm md:text-xl py-1">Last Traded Price</th>
                <th className="text-sm md:text-xl py-1">Buy / Sell Price</th>
                <th className="text-sm md:text-xl py-1">Difference</th>
                <th className="text-sm md:text-xl py-1 ">Savings</th>
              </tr>

              <tr className="text-white whitespace-nowrap font-bold text-center bg-slate-700 border-1 ">
                <td className="text-sm md:text-xl py-3 rounded-left pl-2">1</td>
                <td className=" py-3">
                  <div className="flex items-center justify-center gap-2">
                    <img className="w-5 rounded-full" src="download.png"></img>
                    <span className="text-sm md:text-xl">WazirX</span>
                  </div>
                </td>
                <td className="text-sm md:text-xl py-3">₹ {fmt.format(Math.floor(btcdata.last))}</td>
                <td className="text-sm md:text-xl py-3">
                ₹ {fmt.format(Math.floor(btcdata.buy))}/₹ {fmt.format(Math.floor(btcdata.sell))}
                </td>
                <td className="text-sm md:text-xl py-3">₹ {fmt.format((diff))}%</td>
                <td className="text-sm md:text-xl py-3 rounded-right pr-2">
                ₹ {fmt.format(Math.floor(savings))}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
