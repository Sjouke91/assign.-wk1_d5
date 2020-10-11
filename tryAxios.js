const axios = require("axios");
const url = process.argv[2];

const getUrl = async(url) => {
    try{
    const promise = await axios.get(url)
    console.log(promise.data);
    } catch(error){
        console.log("this is the error:", error)
    }
}

getUrl(url);




