import React from "react";
import { useEffect, useState } from "react";


export const useJwt = (token, payload) => {
    const [jwt, setJwt] = useState('did not loaded');
    const [user, setUser] = useState(null);


    useEffect(() => {
        
        if (token) {
                
                localStorage.setItem('token', token);
                localStorage.setItem('user',JSON.stringify(payload));
          
            

            setJwt(token);
            setUser(payload);
        }

        if (!token) {
            console.log('not token');
                let myUser = localStorage.getItem('user');
                myUser = JSON.parse(myUser);
                setJwt(localStorage.getItem('token'));
                setUser(myUser);
          
          
        }

    }, [token, payload]);
    
    return [jwt, user, setUser, setJwt];

}