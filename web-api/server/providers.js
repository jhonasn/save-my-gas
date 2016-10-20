module.exports = {
	// "local": {
	// 	"provider": "local",
	// 	"module": "passport-local",
	// 	"usernameField": "username",
	// 	"passwordField": "password",
	// 	"authPath": "/auth/local",
	// 	"successRedirect": "/auth/account",
	// 	"failureRedirect": "/login",
	// 	"session": false
	// },
	"google-login": {
		"provider": "google",
		"module": "passport-google-oauth",
		"strategy": "OAuth2Strategy",
		"clientID": process.env.GOOGLE_AUTH_PROVIDER_ID,
		"clientSecret": process.env.GOOGLE_AUTH_PROVIDER_SECRET,
		"callbackURL": "http://localhost:3000/auth/google/callback",
		"authPath": "/auth/google",
		"callbackPath": "/auth/google/callback",
		"successRedirect": "/api/users/me",
		"failureRedirect": "/login",
		"scope": ["profile", "email"],
		"session": false,
		"json": true
	},
	// "google-link": {
	// 	"provider": "google",
	// 	"module": "passport-google-oauth",
	// 	"strategy": "OAuth2Strategy",
	// 	"clientID": process.env.GOOGLE_AUTH_PROVIDER_ID,
	// 	"clientSecret": process.env.GOOGLE_AUTH_PROVIDER_SECRET,
	// 	"callbackURL": "/link/google/callback",
	// 	"authPath": "/link/google",
	// 	"callbackPath": "/link/google/callback",
	// 	"successRedirect": "/auth/account",
	// 	"failureRedirect": "/login",
	// 	"scope": ["email", "profile"],
	// 	"link": true,
	// 	"session": false
	// },
	"facebook-login": {
		"provider": "facebook",
		"module": "passport-facebook",
		"clientID": process.env.FACEBOOK_AUTH_PROVIDER_ID,
		"clientSecret": process.env.FACEBOOK_AUTH_PROVIDER_SECRET,
		"callbackURL": "http://192.168.2.116:3000/auth/facebook/callback",
		"authPath": "/auth/facebook",
		"callbackPath": "/auth/facebook/callback",
		"successRedirect": "/api/Users/me",
		"failureRedirect": "/login",
		"scope": ["public_profile", "email"],
		"profileFields": ["gender", "link", "locale", "name", "timezone",
			"verified", "email", "updated_time"
		],
		"session": false,
		"json": true
	},
	// "facebook-link": {
	// 	"provider": "facebook",
	// 	"module": "passport-facebook",
	// 	"clientID": process.env.FACEBOOK_AUTH_PROVIDER_ID,
	// 	"clientSecret": process.env.FACEBOOK_AUTH_PROVIDER_SECRET,
	// 	"callbackURL": "/link/facebook/callback",
	// 	"authPath": "/link/facebook",
	// 	"callbackPath": "/link/facebook/callback",
	// 	"successRedirect": "/auth/account",
	// 	"failureRedirect": "/login",
	// 	"scope": ["email", "user_likes"],
	// 	"link": true,
	// 	"session": false
	// }
};
