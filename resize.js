const { Jimp } = require("jimp");

async function resize() {
	try {
		const src = "src/assets/images/ProfilePic.png";
		const dest = "src/assets/images/ProfilePic_512.png";

		// In Jimp 1.x Jimp.read returns a promise for the image
		const image = await Jimp.read(src);
		let width = image.bitmap.width;
		let height = image.bitmap.height;
		let ratio = width / height;
		let newWidth = width > height ? Math.round(512 * ratio) : 512;
		let newHeight = width > height ? 512 : Math.round(512 / ratio);

		// Bicubic interpolation for high quality downscaling (if supported, otherwise default auto)
		image.resize({ w: newWidth, h: newHeight }); // API in 1.x changed to options object
		await image.write(dest);
		console.log("Resized successfully");
	} catch (err) {
		console.error("Jimp error:", err);
	}
}

resize();
