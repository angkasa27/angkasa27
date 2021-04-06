import React, { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Header from '../../components/elements/Header';
import Social from '../../components/fragments/Social';

export default function Home() {
  return (
    <div>
      <Main />
      <Profile />
      <Social location="bottom-1/6 right-7/100" />
    </div>
  );
}

export function Main() {
  const [classes, setClasses] = useState('invisible md:visible');
  const desc = [
    'Love to learn new thing',
    'Still looking for better chance',
    '2 months to go before graduate from high schools',
    'currently learning about react with tailwind',
  ];

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
      <Header name="welcome.txt" />
      <div className="flex flex-col justify-center md:items-baseline h-full md:px-10 py-14 md:py-0 md:w-2/3 ">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-5 font-bold md:text-left text-center">
          Hi! I'm <span className="text-yellow-500">Dimas</span> Angkasa
        </h3>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-5 text-yellow-500 md:text-left text-center">
          Graphic Designer <span className="text-gray-800">&</span>
          <br className="md:hidden" /> Front End Developer
        </h1>

        <p className="md:mb-24 text-xl font-semibold md:text-left text-center">
          <ReactTypingEffect
            speed={100}
            eraseSpeed={100}
            typingDelay={500}
            text={desc}
            cursorRenderer={(cursor) => <span>{cursor}</span>}
            displayTextRenderer={(text, i) => {
              return <h1>{text}</h1>;
            }}
          />
          <br />
          and still need to learn more
        </p>
      </div>
    </main>
  );
}

export function Profile() {
  const [classes, setClasses] = useState(' invisible');

  useEffect(() => {
    setTimeout(() => {
      setClasses(' animate-itemUp md:animate-itemDown');
    }, 400);
  }, []);

  return (
    <div
      className={
        'bg-window z-20 w-auto right-1/6 top-1/5 md:absolute bg-glass md:transform hover:-translate-y-5 transition duration-500 ease-out mt-5 md:mt-0 pb-1 md:pb-0 ' +
        classes
      }
    >
      <Header name="profile.jpg" />
      <div className="px-10 py-8 m-2 flex flex-col items-center bg-white rounded-lg">
        {/* <img src={Picture} alt="Profile" className="w-48 rounded-lg" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 354.8 400.44"
          className="fill-current w-36 text-gray-800"
        >
          <path
            class="cls-1"
            d="M0,121.15V307.3l58.63,33.85V290.37l44,25.39v50.78l58.63,33.85V214.25ZM102.6,265l-44-25.37V205.78l44,25.39Z"
          />
          <polygon
            class="cls-1"
            points="16.16 93.19 177.38 0 221.36 25.48 104.1 93.19 118.76 101.65 236.01 33.94 338.61 93.19 177.38 186.28 133.41 160.89 250.75 93.14 236.01 84.72 118.76 152.43 16.16 93.19"
          />
          <path
            class="cls-1"
            d="M193.51,214.23V400.44l58.65-33.87V315.78l44-25.4v50.79l58.65-33.86V121.1Zm102.64,25.35-44,25.4V231.16l44-25.4Z"
          />
        </svg>
      </div>
    </div>
  );
}
