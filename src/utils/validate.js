

// export const checkValidData =(name,email,password)=>{


//     // const isValidName=/^([A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,})$/.test(name);
//     const isValidName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
//     const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
//     const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    

//     if(!isEmailValid)
//      return "Email Id is not valid!";

//     if(!isPasswordValid)
//      return "Password is not valid"

//      return null;

// }




export const checkValidaData = (email, password) => {

    const isEmailValid =
     /^([a-zA-Z0-9._%-]+@([a-zA-Z0-9.-])+[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =
     /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;

};