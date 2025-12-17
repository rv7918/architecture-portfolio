import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full bg-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/home" className="text-lg text-white">
          Architecture <strong>Systems</strong>
        </Link>
        <ul className="flex items-center">
          <li className="mr-4">
            <Link to="/home" className="text-white hover:underline">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/about" className="text-white hover:underline">About</Link>
          </li>
        </ul>
      </div>
    </nav>    
  );
};

export default Header