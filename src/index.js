function displayPoem(response){
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

    }
function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector ("#user-instructions");
        
    let apiKey = "304aba2f3bf848o9c4ec2t268c006e59";
    let prompt = `Generate a poem for a birthday person about ${instructionsInput.value}`
    let context = "You are a creative poem expert and love to write short and funny poems. Your mission is to generate a poem, which rhymes, with no more than 4 lines with basic HMTL. Do not include a title to the poem and signt the poem with 'SheCodes AI' inside a <strong> element. Make sure to follow the user instructions";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

console.log("Generating poem");
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);

    axios.get(apiURL).then(displayPoem);

}

  
  let poemFormElement = document.querySelector("#poem-generator");
  poemFormElement.addEventListener("submit", generatePoem);