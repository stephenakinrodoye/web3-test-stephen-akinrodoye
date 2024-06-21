const array = ['JavaScript programming', 'HTML and CSS basics', 'Frontend development', 'Web design principles', 'Dynamic content handling'];

    function search(event) {
      const userInput = event.target.value.toLowerCase();
      const paragraphs = document.querySelectorAll('body > p');

      // looping through the paragraphs to empty their contents
      paragraphs.forEach((paragraph) => {
        paragraph.textContent = ''
      });

      // create a new array containing elements fron user input
      const newArray = array.filter(value => value.toLowerCase().includes(userInput)); 

      newArray.forEach((value, index) => {
        const paragraph = paragraphs[index];
        const lowerCaseValue = value.toLowerCase(); //convert to lowercase
        const startIndex = lowerCaseValue.indexOf(userInput);

        if (startIndex !== -1 && userInput !== '') {
          const highlightedText = value.substring(startIndex, startIndex + userInput.length);
          const beforeHighlight = value.substring(0, startIndex);
          const afterHighlight = value.substring(startIndex + userInput.length);
          paragraph.innerHTML = `${beforeHighlight}<span class="highlight">${highlightedText}</span>${afterHighlight}`;
        } else {
          paragraph.textContent = value;
        }
      });
    }