import './icons.css';
const Cross = ({ ...props }) => {
  const {
    size,
  } = props;
  return(
    <div className='svg-icon'>
      <svg width="20px" height="20px"
        viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
        <title>Отменить</title>
        <path d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 62L32 40.571L53.429 62L62 53.429L40.571 32z"></path>
      </svg>
    </div>
  );
};
export default Cross;
