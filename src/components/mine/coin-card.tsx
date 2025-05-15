// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CoinCard = (props: any) => {
  console.log("CoinCard props:", props);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Coin Card</h2>
      <img
        src={props.coin.obsPhoto || null}
        alt="Coin"
        className="w-24 h-24 mb-4 rounded-full"
      />
      <p className="mt-2 text-gray-600">This is a coin card component.</p>
    </div>
  );
};

export default CoinCard;
