import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Detail({ data, setOpen }) {
  return (
    <div className="w-full h-full px-5 animate-itemUp overflow-y-auto">
      <div className="flex items-center justify-between py-5">
        <span
          onClick={() => setOpen(false)}
          className="flex font-mono text-xl cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
          back
        </span>
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className=" py-1 px-4 bg-yellow-400 text-white font-bold hidden sm:flex sm:text-lg rounded-full"
        >
          Open Project
        </a>
      </div>
      <div className="flex justify-center">
        <div className="max-w-screen-md">
          <LazyLoadImage
            alt={data.name}
            effect="blur"
            src={data.img}
            className="bg-white rounded-lg object-cover w-full h-full"
          />

          <h3 className="text-2xl sm:text-4xl text-center text-yellow-500 font-bold my-3">
            {data.name}
          </h3>
          <p className="col-span-2 sm:text-xl ">{data.desc}</p>
          <div className="flex justify-center mt-3 mb-10">
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className=" py-1 px-4 bg-yellow-400 text-white font-bold text-lg sm:text-xl rounded-full"
            >
              Open Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Detail({ data, setOpen }) {
//   return (
//     <div className="w-full h-full px-5 animate-itemUp">
//       <div className="flex items-center justify-between py-5">
//         <span
//           onClick={() => setOpen(false)}
//           className="flex font-mono text-xl cursor-pointer"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 mr-1"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
//             />
//           </svg>
//           back
//         </span>
//         <h3 className="font-bold text-2xl text-yellow-300">{data.name}</h3>
//       </div>
//       <div className="grid grid-cols-5 gap-5">
//         <div className="col-span-3 h-full">
//           <LazyLoadImage
//             alt={data.name}
//             effect="blur"
//             src={data.img}
//             className="bg-white rounded-lg object-cover w-full h-36 md:h-80"
//           />
//           <div className="flex">
//             {/* <span className="mr-1 w-full flex justify-center items-center py-5 border border-yellow-400 text-white font-bold text-xl rounded-lg">
//             Back
//           </span> */}
//             <a
//               href={data.link}
//               target="_blank"
//               rel="noreferrer"
//               className="ml-1 w-full flex justify-center items-center py-5 bg-yellow-400 text-white font-bold text-xl rounded-lg"
//             >
//               Open Project
//             </a>
//           </div>
//         </div>
//         <div className="col-span-2">{data.desc}</div>
//       </div>
//     </div>
//   );
// }
