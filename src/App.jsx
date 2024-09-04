import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  
  return (
    <>
      <Header />
      { <PrivateRoute/> }
      <Outlet></Outlet>

      <div className="relative">
        <img
          src="assets/image/egor-myznik-SN4mw7WTLFE-unsplash.jpg"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className=" font-bold text-white text-lg sm:text-2xl md:text-3xl xl:text-5xl">
          Hey there, welcome to the ChatBuddy!
          </h1>
          <div className="pt-8"></div>
          <p className=" text-sm text-center  md:text-base lg:text-lg xl:text-xl px-4 sm:px-6 lg:px-8">Dive in, start chatting, and connect with friends or meet new people effortlessly. Our app is designed to make communication simple and enjoyable, offering a seamless experience. Explore, engage, and have fun connecting with others. Welcome ChatBuddy World!</p>
        </div>
      </div>
    </>
  );
}

export default App;
