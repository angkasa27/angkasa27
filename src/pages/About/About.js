import React, { useState, useEffect } from 'react';
import Header from '../../components/elements/Header';
import Picture from '../../assets/profile.jpg';
import Social from '../../components/fragments/Social';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import loadImage from '../../assets/load-image.svg';

export default function About() {
  return (
    <div>
      <Main />
      <Skills />
      <Other />
      <Social
        location="bottom-14/100 left-7/100"
        animation="animate-itemRight"
      />
    </div>
  );
}

export function Main() {
  const [classes, setClasses] = useState('invisible md:visible');
  const [textClass, setTextClass] = useState('invisible');

  useEffect(() => {
    setTimeout(() => {
      setClasses(' animate-itemUp md:animate-none');
    }, 100);

    setTimeout(() => {
      setTextClass(' animate-none md:animate-itemUp');
    }, 200);
  }, []);

  return (
    <main
      className={
        'bg-window md:absolute top-1/10 bottom-1/10 left-1/10 right-1/10 bg-glass z-10 mt-5 md:mt-0 transition-default ' +
        classes
      }
    >
      <Header name="about.txt" />
      <div
        className={
          'h-full px-3 sm:px-10 py-14 sm:py-6 md:py-0 md:pt-8  ' + textClass
        }
      >
        <div className="flex flex-col sm:flex-row mb-2 md:mb-3 items-center ">
          <LazyLoadImage
            alt="profile"
            effect="blur"
            src={Picture}
            className="sm:w-36 sm:h-40 w-48 h-56 object-cover rounded-lg"
          />
          <div className="sm:ml-5 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 md:mb-3 text-yellow-500 sm:text-left text-center mt-5 sm:mt-0">
              Dimas Angkasa Nurindra
            </h1>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold sm:text-left text-center">
              Male, 17 years old
            </h3>
          </div>
        </div>
        <p className="mt-3 text-xl font-semibold md:text-left text-center md:w-2/3">
          I am a student at SMK Telkom Malang. My expertises are Graphic
          Designer and FrontEnd Web Developer using ReactJS. Currently, im
          learning about TailwindCSS. I have interest in UI Design, specially in
          mobile view. I can work with team or independently well
        </p>
      </div>
    </main>
  );
}

export function Skills() {
  const [classes, setClasses] = useState(' invisible');
  const skills = [
    { name: 'HTML5 CSS', width: 'w-full' },
    { name: 'JavaScript', width: 'w-11/12' },
    { name: 'Bootstrap', width: 'w-10/12' },
    { name: 'MaterializeCSS', width: 'w-10/12' },
    { name: 'TailwindCSS', width: 'w-11/12' },
    { name: 'ReactJS', width: 'w-11/12' },
    { name: 'NodeJS', width: 'w-4/5' },
  ];

  useEffect(() => {
    setTimeout(() => {
      setClasses(' animate-itemUp md:animate-itemLeft');
    }, 400);
  }, []);

  return (
    <div
      className={
        'bg-window z-20 right-5/100 top-2/5 md:absolute bg-glass transition-all duration-500 ease-out mt-5 md:mt-0 pb-1 md:pb-0 md:w-1/3 ' +
        classes
      }
    >
      <Header name="skills" />
      <div className="px-3 pb-3 m-2 rounded-lg font-mono">
        {skills.map((skill, idx) => (
          <Progress name={skill.name} width={skill.width} idx={idx} />
        ))}
      </div>
    </div>
  );
}

export function Progress({ name, width, idx }) {
  return (
    <>
      <p className={idx > 0 && 'mt-3'}>{name}</p>
      <div className="w-full h-2 bg-gray-500 bg-opacity-30 rounded-full">
        <div className={'h-full bg-yellow-500 rounded-full ' + width} />
      </div>
    </>
  );
}

export function Other() {
  const [classes, setClasses] = useState('invisible');

  useEffect(() => {
    setTimeout(() => {
      setClasses('  animate-itemUp ');
    }, 500);
  }, []);

  return (
    <div
      className={
        'md:w-64 bg-glass bg-window md:absolute z-20 mt-5 md:mt-0 w-full transition-default bottom-7/100 left-1/3 ' +
        classes
      }
    >
      <Header name="other.txt" />
      <div className="mx-5 py-4 flex flex-col">
        <a
          href="https://drive.google.com/drive/folders/1vx9e_PoWhkUeoWuZ3ygN26P6PS5lYDBh?usp=sharing"
          className="text-lg font-semibold hover:text-yellow-500"
          target="_blank"
          rel="noreferrer"
        >
          Certificate & Award
        </a>
        <a
          href="https://drive.google.com/file/d/1zgQtkukmmfEn-mbfy6ikaQAybJIeC5ej/view?usp=sharing"
          className="text-lg font-semibold mt-3 hover:text-yellow-500"
          target="_blank"
          rel="noreferrer"
        >
          Curriculum vitae
        </a>
        <a
          href="https://linktr.ee/angkasa27"
          className="text-lg font-semibold mt-3 hover:text-yellow-500"
          target="_blank"
          rel="noreferrer"
        >
          Other Link / Linktree
        </a>
      </div>
    </div>
  );
}
