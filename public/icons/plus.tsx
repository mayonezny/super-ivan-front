import './icons.css';
const Plus = ({ ...props }) => {
  const {
    size,
  } = props;
  return(
    <svg className='svg-icon' width="32px" height="32px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Новый пост</title>
      <path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z"/>
    </svg>
  );
};
export default Plus;
