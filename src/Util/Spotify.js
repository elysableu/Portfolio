const Spotify = {
    
    async getAuthorization() {
        //var Buffer = require('buffer/').Buffer;
        //var tokenRequest = require('request');
        var clientId = process.env.REACT_APP_CLIENT_ID;
        var clientSecret = process.env.REACT_APP_CLIENT_SECRET;
        /*
        var authOptions = {
            url: 'https://accounts.spotify.com.api/token',
            headers: {
                'Authorization': 'Basic' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
            },
            form : {
                grant_type: 'client_credentials'
            },
            json: true
        };
        
        tokenRequest.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                var token = body.access_token;
                console.log(true);
            }
        });


    },

    /*
    async getAccessToken() {
        let token = sessionStorage.getItem("token");
        let expireTime = Number(sessionStorage.getItem("expireTime"));
        if (!token || expireTime < new Date().getTime()) {
           
            var scope = "playlist-modify-public";
            var redirectUri = "http://localhost:3000/";

            var url = "https://accounts.spotify.com/authorize";
            url += "?response_type=token";
            url += "&client_id=" + clientId;
            url += "&scope=" + encodeURIComponent(scope);
            url += "&redirect_uri=" + encodeURIComponent(redirectUri); 

            window.location = url;

            token = window.location.href.match(/access_token=([^&]*)/)[1];
            const expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];

            expireTime = new Date().getTime() + Number(expiresIn) * 1000;
            sessionStorage.setItem("expireTime", expireTime.toString());

            sessionStorage.setItem("token", token);
        }

        return token;
    },
    */

    }

}

export default Spotify;
