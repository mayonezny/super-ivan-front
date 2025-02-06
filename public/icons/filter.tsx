import './icons.css';
const Filter = ({ ...props }) => {
  const {
    size,
  } = props;
  return(
    <div className='svg-icon'>
      <svg width="32px" height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <title>Фильтр</title>
        <path d="M0 3H16V1H0V3Z"/>
        <path d="M2 7H14V5H2V7Z"/>
        <path d="M4 11H12V9H4V11Z"/>
        <path d="M10 15H6V13H10V15Z"/>
      </svg>
    </div>
  );
};
export default Filter;
