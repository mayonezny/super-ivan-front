
const BlogMenu = ({children}) => {

  return (
    <div className="grid grid-cols-3 gap-10 px-5 p-2 text-xl justify-items-center">
      {children}
    </div>
  );
};
export default BlogMenu;
