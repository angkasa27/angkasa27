import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/elements/Header';
import Social from '../../components/fragments/Social';

export default function Home() {
  return (
    <div>
      <Main />
      <Social location="bottom-1/6 right-7/100" />
    </div>
  );
}

export function Main() {
  const history = useHistory();
  const [classes, setClasses] = useState(' invisible md:visible');

  useEffect(() => {
    setTimeout(() => {
      setClasses(' animate-itemUp md:animate-none');
    }, 100);
  }, []);

  return (
    <main
      className={
        'bg-window md:absolute top-1/10 bottom-1/10 left-1/10 right-1/10 bg-glass z-10 mt-5 md:mt-0 transition-default ' +
        classes
      }
    >
      <Header name="err404.txt" />
      <div className="flex flex-col justify-center md:items-baseline h-full md:px-10 py-14 md:py-0 md:w-2/3 ">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-5 font-bold md:text-left text-center">
          Sorry!
        </h3>
        <h1 className="text-3xl sm:text-5xl md:text-9xl font-black mb-3 md:mb-5 text-yellow-500 md:text-left text-center">
          404
        </h1>
        <p className="text-xl font-semibold md:text-left text-center">
          This page is still in progress
        </p>
        <span
          className="md:mb-24 text-xl font-semibold md:text-left text-center text-yellow-500 hover:text-yellow-600 transition-default cursor-pointer"
          onClick={() => history.push('/react-tailwind-glassmorphic')}
        >
          back to main
        </span>
      </div>
    </main>
  );
}
