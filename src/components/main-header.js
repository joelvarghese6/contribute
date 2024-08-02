import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home">
          <img
            src="/yellowbird.png"
            alt="Logo"
            height={50}
            width={50}
            className="p-1 pl-4"
          />
        </Link>
        <nav className="space-x-4">
          <Link
            to={{ pathname: "/home", hash: "#grid" }}
            className="text-gray-600 hover:text-gray-800"
          >
            Projects
          </Link>
          <a href="#" onClick={() => toast("Contact Admin")} className="text-gray-600 hover:text-gray-800">
            Create
          </a>
          <a href="https://github.com/joelvarghese6/contribute" target="_blank" className="text-gray-600 hover:text-gray-800">
            Github
          </a>
        </nav>
        <div className="text-white">Signin</div>
      </div>
    </header>
  );
}
