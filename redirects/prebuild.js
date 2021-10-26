const apps = require("./apps.json")
	.map((app) => {
		return `https://nakshhkohli.com/${app} https://nakshhkohli.com/${app}/index.html 302
https://nakshhkohli.com/${app}/* https://${app}-nakshhkohli.netlify.app/:splat 200!`;
	})
	.join("\n\n");

const fs = require("fs");

const template = fs.readFileSync("redirects/_redirects-template", "utf-8");

const output = template.replace("$APP_REDIRECTS", apps);

fs.writeFileSync("public/_redirects", output);
