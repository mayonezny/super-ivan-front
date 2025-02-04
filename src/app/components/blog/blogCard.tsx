import Link from 'next/link';

const Card = ({ href, pic, title }) => {

  return (

    <div className="relative shadow-[0px_0px_10px_rgba(0,0,0,0.2)] bg-white rounded-lg w-card h-card flex justify-between bg-cover bg-center transition-transform duration-300 hover:scale-105" style={{ backgroundImage: `url(${pic})` }}>
      <Link href={href}>
        <div className="absolute rounded-lg p-5 inset-0 bg-gradient-to-b from-white/100 via-white/30 to-black/100">
          <h1 className="font-bold text-[22px] font-[family-name:var(--font-roboto-c)]">{title}</h1>
        </div>
      </Link>
    </div>
  );
};
export default Card;
