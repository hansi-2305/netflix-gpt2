// import OpenAI from 'openai';
// import {OPENAI_KEY} from "./constants"

// const openai = new OpenAI({
//   apiKey: process.env['OPENAI_KEY'], // This is the default and can be omitted

// //   apiKey: OPENAI_KEY,



// });

// export default openai;


import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_KEY , 
   dangerouslyAllowBrowser: true,
});

export default openai;


//npm openai se ->usage ->mei given hai yeh code

//use gpt 3.5 turbo