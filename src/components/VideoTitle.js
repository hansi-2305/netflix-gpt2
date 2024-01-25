// import React from 'react';

// const VideoTitle = ({title,overview}) => {
//   return (
//     <div className=" w-screen aspect-video pt-[20%] px-6  md:px-24 absolute text-white bg-gradient-to-r from-black">

//         <h1 className=" text-2xl md:text-6xl font-bold">{title}</h1>

//         <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>

//         <div className="my-4 md:m-0">

//             {/* <button className="bg-white text-black py-1 md:py-4 px-2 md:px-12  rounded-lg text-xl hover:bg-opacity-30" >  Play</button> */}
//             <button className="bg-white text-black py-1 px-2 md:p-4 md:px-12  rounded-lg text-xl hover:bg-opacity-30" >  Play</button>
//             <button className="hidden md:inline-block mx-2 my-4 bg-gray-500  text-white p-4 px-12 text-xl  bg-opacity-80 rounded-lg ">More Info</button>
//             {/* <button className="hidden md:inline-block mx-2 bg-gray-500  text-white p-4 px-12 text-xl  bg-opacity-80 rounded-lg ">More Info</button> */}

//         </div>
//     </div>
//   )
// }

// export default VideoTitle;



// // //auto play youtube embedd



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay , faInfoCircle} from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black  overflow-y-hidden ">

        <style>
        {`
          /* Hide scrollbar */
          ::-webkit-scrollbar {
            width: 0.5em;
          }

          ::-webkit-scrollbar-thumb {
            background-color: transparent;
          }
        `}
        </style>




      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0 ">
        <button className="bg-white text-black py-1 px-2 md:p-3 md:px-12 rounded-lg text-xl hover:bg-opacity-30">
          <FontAwesomeIcon icon={faPlay} className="mr-2" />
          Play
        </button>
        <button className="hidden md:inline-block mx-2 my-1 bg-gray-500 text-white p-3 px-9 text-xl bg-opacity-80 rounded-lg">
        <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
