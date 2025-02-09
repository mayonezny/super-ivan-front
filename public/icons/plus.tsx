import './icons.css';
const Plus = ({ ...props }) => {
  const {
    size,
    onClick,
  } = props;
  return(
    <div className='svg-icon'>
      <svg width="32px" height="32px" onClick={onClick} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <title>Новый пост</title>
        <path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z"/>
      </svg>
    </div>
  );
};
export default Plus;
