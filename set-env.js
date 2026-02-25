const fs = require("fs");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const targetPath = "./src/environments/environment.ts";
const envFileContent = `
export const environment = {
  calComNamespace: '${process.env.CAL_COM_NAMESPACE}'
};
`;

// Check if the environments directory exists
const dir = "./src/environments";
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}

fs.writeFile(targetPath, envFileContent, function (err) {
	if (err) {
		console.log(err);
	}
	console.log(`Output generated at ${targetPath}`);
});
