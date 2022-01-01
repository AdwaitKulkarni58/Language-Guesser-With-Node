(async () => {
  const { franc } = await import("franc");
  const langs = require("langs");
  const colors = require("colors");
  let userInput = process.argv[2];
  try {
    const code = franc(userInput);
    const language = langs.where("3", code);
    console.log(language.name.green);
  } catch (err) {
    console.log(
      "Sorry, could not figure it out. Please enter a longer sample.".red
    );
  }
})();
