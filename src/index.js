function generatePoem(event) {
    event.preventDefault();

    new Typewriter('#poem', {
        strings: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
        autoStart: true,
        delay: 1,
        cursor: "",
      });
  }
  
  let poemFormElement = document.querySelector("#poem-generator");
  poemFormElement.addEventListener("submit", generatePoem);