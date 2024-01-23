

export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_PIC ="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
export const BG_COVER="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
// export const USER_PIC="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmastodon.social%2F%40giovan&psig=AOvVaw3tvh0liMD_qcngKo-P1RJ_&ust=1705861215619000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJi9jrXK7IMDFQAAAAAdAAAAABAD"
// export const USER_PIC="https://files.mastodon.social/accounts/avatars/000/466/065/original/41daf3394a922d23.png";

export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDBhOGM0NGRlODkzNGU1ZGI0M2Q5ZTc2ZThlY2M0YiIsInN1YiI6IjY1YWMxNWIxYWQ1OWI1MDBlYjc4NTczMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QGKSETgggmf-oq1EJmE5qy81Egtg6-8p0CJ-6FjdeC4"
      Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
    }
  };

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500/"



export const SUPPORTED_LANGUAGES = [{identifier: "en",  name: "English" },
  {identifier: "hindi",  name: "Hindi" },
  {identifier: "spanish",  name: "Spanish" },
];



//platform.openai,com->same account use in chat grp->api-key->give it a name and the api key will be generated

// export const OPENAI_KEY="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"

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;


// export const OPENAI_KEY = "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"














//to fetch from tmdb we search for image api in search bar of google -> basics khulega usmei
//img_cdn_url which need to be used when using images