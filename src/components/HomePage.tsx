import Link from 'next/link';
import { useUser } from '@clerk/clerk-react';
import { SignInButton } from '@clerk/nextjs';

const HomePage = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="flex flex-col justify-start min-h-screen md:justify-center items-center h-full bg-gradient-to-r from-blue-500 to-purple-500  pt-20 md:pt-0 ">
      <div className="w-11/12 max-w-md mx-auto text-center space-y-4 p-6 md:p-8 rounded-lg bg-white shadow-xl shadow-black hover:shadow-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Welcome to Our App</h1>
        <p className="text-base md:text-lg text-gray-600">
          Explore our features and get access to the dashboard.
        </p>
        {isSignedIn ? <Link href="/dashboard" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
          Go to Dashboard
        </Link>:<div className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
        <SignInButton forceRedirectUrl="/dashboard" mode="modal" >  Go to Dashboard </SignInButton>
        </div>}
        
      </div>
    </div>
  );
};

export default HomePage;