import Link from 'next/link';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
const Card = ({ href, pic, title, author, date }) => {

  return (

    <div className="relative shadow-[0px_0px_10px_rgba(0,0,0,0.2)] bg-white rounded-lg flex justify-between bg-cover bg-center transition-transform duration-300 hover:scale-105 2xl:w-card-2xl 2xl:h-card-2xl xl:w-card-xl xl:h-card-xl" style={{ backgroundImage: `url(${pic})` }}>
      <Link href={href}>
        <div className="absolute rounded-lg flex flex-col justify-between p-5 inset-0 bg-gradient-to-b from-white/100 via-white/30 to-black/100">
          <h1 className="font-bold text-[22px] font-[family-name:var(--font-roboto-c)]">{title}</h1>
          <div className='flex justify-between'>
            <h1 className="font-bold text-[22px] font-[family-name:var(--font-roboto-c)] text-white">{author && `Автор: ${author}`}</h1>
            <h1 className="font-bold text-[20px] font-[family-name:var(--font-roboto-c)] text-white">{date && `${format(date, 'dd MMMM, HH:mm', { locale: ru })}`}</h1>
          </div>

        </div>
      </Link>
    </div>
  );
};
export default Card;
