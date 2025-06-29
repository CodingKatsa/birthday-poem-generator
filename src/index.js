function displayRhyme(response){
    new Typewriter("#rhyme", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

        }
    function generateRhyme(event) {
        event.preventDefault();

        let instructionsInput = document.querySelector ("#user-instructions");
            
        let apiKey = "304aba2f3bf848o9c4ec2t268c006e59";
        let prompt = `Generate a rhyme for a birthday person about ${instructionsInput.value}`
        let context = "You are a creative rhyming expert and love to write short and funny rhymes. Your mission is to generate a poem which rhymes, with no more than 4 lines with basic HMTL. Do not include a title to the rhyme and sign the rhyme with 'SheCodes AI' inside a <strong> element <font-size: 2px>. Make sure to follow the user instructions";
        let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

let rhymeElement = document.querySelector("#rhyme");
        rhymeElement.classList.remove ("hidden");
        rhymeElement.innerHTML=`<div class = "generating">⏳ Generating a birthday rhyme about ${instructionsInput.value}</div>`

        axios.get(apiURL).then(displayRhyme);

    }

  
  let rhymeFormElement = document.querySelector("#rhyme-generator");
  rhymeFormElement.addEventListener("submit", generateRhyme);