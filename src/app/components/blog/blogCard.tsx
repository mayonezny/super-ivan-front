
const Card = () => {

  return (
    // eslint-disable-next-line quotes
    <div className="relative shadow-[0px_0px_10px_rgba(0,0,0,0.2)] bg-white rounded-lg w-card h-card flex justify-between bg-cover bg-center" style={{ backgroundImage: "url('/babka.png')" }}>
      <div className="absolute rounded-lg p-5 inset-0 bg-gradient-to-b from-white/100 via-white/30 to-black/100">
        <h1 className="font-bold text-[22px]">Бабку изнасиловали в подъезде! Пиздец</h1>
      </div>

    </div>
  );
};
export default Card;
