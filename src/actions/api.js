const API_URL = process.env.REACT_APP_API_URL;

export const getGroupImages = async (nextCursor) =>{
    const params = new URLSearchParams();
     if(nextCursor){
        params.append('next_cursor',nextCursor);
     }
    const response = await fetch(`${API_URL}/group?${params}`);
    const responseJson = response.json();
    console.log(responseJson);
    return responseJson;
}
export const getEtcImages = async (nextCursor) =>{
    const params = new URLSearchParams();
     if(nextCursor){
        params.append('next_cursor',nextCursor);
     }
    const response = await fetch(`${API_URL}/etc?${params}`);
    const responseJson = response.json();
    return responseJson;
}

export const getCouplesImages = async (nextCursor) =>{
    const params = new URLSearchParams();
     if(nextCursor){
        params.append('next_cursor',nextCursor);
     }
    const response = await fetch(`${API_URL}/couples?${params}`);
    const responseJson = response.json();
    return responseJson;
}

export const getPortraitImages = async (nextCursor) =>{
    const params = new URLSearchParams();
     if(nextCursor){
        params.append('next_cursor',nextCursor);
     }
    const response = await fetch(`${API_URL}/portraits?${params}`);
    const responseJson = response.json();
    return responseJson;
}