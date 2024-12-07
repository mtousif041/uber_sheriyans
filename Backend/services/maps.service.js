const axios = require('axios');
// const captainModel = require('../modles/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[ 0 ].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (err) {
        console.error(err);  
        throw err;
    }
}
//isme do route bnege 1.me hum address bhejenge aur return me hume us address ke latitude aur longitude mil jaaynge , 2.hum do address bhejnge jinke bich ki distace hume mil jaayegi aur distance cover hone me kita time lagega ye puri details mil jaayegi


module.exports.getDistanceTime = async (origin, destination)=>{
    if(!origin || !destination){
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        
        const response = await axios.get(url)
        if(response.data.status === 'OK'){

            if(response.data.rows[0].elements[0].status === "ZERO_RESULTs"){
                throw new Error('NO ROUTES FOUND');
            }

            return response.data.rows[0].elements[0];
        }else{
            throw new Error('Unable to fetch distance and time')
        }

    } catch (err) {
        console.error(err);
        throw err;
    }
}


///////
module.exports.getAutoCompleteSuggestions = async (input)=>{
    if(!input){
        throw new Error('query is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
 
    try {
        const response = await axios.get(url);

        if(response.data.status === 'OK'){
            return response.data.predictions;
        }else{
            throw new Error('Unable to fetch suggestion')
        }
    } catch (err) {
        console.error(err);
        throw err;
    }

}