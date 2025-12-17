const Header = () => {
  return (
    <nav className="w-full bg-black sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <p className="text-lg text-white">Architecture <strong>Systems</strong></p>
        <ul className="flex items-center">
          <li className="mr-4">
            <a href="/about" className="text-white">About</a>
          </li>
        </ul>
      </div>
    </nav>    
  );
};

export default Header