const Header = () => {
  return (
    <header className="container min-w-full px-6 flex min-h-24 items-center bg-black">
      <div className="text-xl h-fit text-white">Header</div>
      <div className="container ml-6 flex gap-4">
        <div>
          <a href="#" className="text-white">
            Link
          </a>
        </div>
        <div>
          <a href="#" className="text-white">
            Link
          </a>
        </div>
        <div>
          <a href="#" className="text-white">
            Link
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
