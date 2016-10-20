var serverPath = 'http://192.168.2.116:3000';

var env = process.env.NODE_ENV;
if(typeof env === 'string' && env.toLowerCase() === 'production') {
	serverPath = 'https://rest-savemygas.getup.io';
}

module.exports = {
	"local": {
		"provider": "local",
		"module": "passport-local",
		"usernameField": "username",
		"passwordField": "password",
		"authPath": "/auth/local",
		"successRedirect": serverPath + "/auth/account",
		"failureRedirect": "/login",
		"session": false
	},
	"google-login": {
		"provider": "google",
		"module": "passport-google-oauth",
		"strategy": "OAuth2Strategy",
		"clientID": process.env.GOOGLE_AUTH_PROVIDER_ID,
		"clientSecret": process.env.GOOGLE_AUTH_PROVIDER_SECRET,
		"callbackURL": serverPath + "/auth/google/callback",
		"authPath": "/auth/google",
		"callbackPath": "/auth/google/callback",
		"successRedirect": serverPath + "/api/users/me",
		"failureRedirect": "/login",
		"scope": ["profile", "email"],
		"session": false,
		"json": true
	},
	"google-link": {
		"provider": "google",
		"module": "passport-google-oauth",
		"strategy": "OAuth2Strategy",
		"clientID": process.env.GOOGLE_AUTH_PROVIDER_ID,
		"clientSecret": process.env.GOOGLE_AUTH_PROVIDER_SECRET,
		"callbackURL": serverPath + "/link/google/callback",
		"authPath": "/link/google",
		"callbackPath": "/link/google/callback",
		"successRedirect": serverPath + "/auth/account",
		"failureRedirect": "/login",
		"scope": ["email", "profile"],
		"link": true,
		"session": false
	},
	"facebook-login": {
		"provider": "facebook",
		"module": "passport-facebook",
		"clientID": process.env.FACEBOOK_AUTH_PROVIDER_ID,
		"clientSecret": process.env.FACEBOOK_AUTH_PROVIDER_SECRET,
		"callbackURL": serverPath + "/auth/facebook/callback",
		"authPath": "/auth/facebook",
		"callbackPath": "/auth/facebook/callback",
		"successRedirect": serverPath + "/api/Users/me",
		"failureRedirect": "/login",
		"scope": ["public_profile", "email"],
		"profileFields": ["gender", "link", "locale", "name", "timezone",
			"verified", "email", "updated_time"
		],
		"session": false,
		"json": true
	},
	"facebook-link": {
		"provider": "facebook",
		"module": "passport-facebook",
		"clientID": process.env.FACEBOOK_AUTH_PROVIDER_ID,
		"clientSecret": process.env.FACEBOOK_AUTH_PROVIDER_SECRET,
		"callbackURL": serverPath + "/link/facebook/callback",
		"authPath": "/link/facebook",
		"callbackPath": "/link/facebook/callback",
		"successRedirect": serverPath + "/auth/account",
		"failureRedirect": "/login",
		"scope": ["email", "user_likes"],
		"link": true,
		"session": false
	}
};
