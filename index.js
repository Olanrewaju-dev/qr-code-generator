// getting necessary native and non-native node modules
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    // prompting user for input URL
    {
      message: "Type in your URL: ",
      name: "input",
    },
  ])
  .then((answers) => {
    // working with the URL to create a QR code image
    const url = answers.input;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    // creating a txt file to store the user input using fs node module
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
