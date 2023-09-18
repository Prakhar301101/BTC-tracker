

const Header = () => {
  return (
    <header className="relative top-0 right-0">
    <div className="w-full font-sans text-white flex flex-col md:flex-row items-center justify-center gap-3 md:justify-between px-5 py-6">
    <div className="w-4/5 justify-center md:w-1/5 ">
      <img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" />
    </div>
    <div className="flex gap-3 md:gap-4 lg:mr-12">
      <button className="bg-slate-700 rounded-2xl flex item-center py-1 px-3">
        INR
      </button>

      <button className="bg-slate-700 rounded-2xl flex item-center py-1 px-3">
        BTC
      </button>

      <button className="bg-slate-700 rounded-2xl flex item-center py-1 px-3">
        BUY BTC
      </button>
    </div>
    <div className="flex flex-col md:flex-row gap-2">
      <div>
        <button className="bg-teal-400 rounded-2xl px-3 py-1 flex item-center gap-2">
          <span className="text-lg">
            <ion-icon name="send"></ion-icon>
          </span>{' '}
          Connect Telegram
        </button>
      </div>
      <div className="text-center md:flex md:items-center">
        <ion-icon size="large" name="sunny-outline"></ion-icon>
      </div>
    </div>
  </div>
  </header>
  )
}

export default Header