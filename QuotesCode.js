 //       function myFunction() {
      //   // Get the text field
      //   var copyText = document.getElementById("quotes");

      //   // Select the text field
      //   copyText.select();
      //   copyText.setSelectionRange(0, 99999); // For mobile devices

      //   // // Copy the text inside the text field
      //   navigator.clipboard.writeText(copyText.value);
      // }
      const quotes = document.getElementById("quotes");
      const author = document.getElementById("author");
      const newQ = document.getElementById("newQ");
      soundBtn = document.querySelector(".sound"),
      copyBtn = document.querySelector(".copy");

      let realData = "";
      let quotesData = "";
      const getNewQuotes = () => {
        let rnum = Math.floor(Math.random() * 1000);
        quotesData = realData[rnum];
        quotes.innerText = `${quotesData.text}`;
        // author.innerText = `${realData[rnum].author}`;
        //
        quotesData.author == null
          ? (author.innerText = "unKnown")
          : (author.innerText = `${realData[rnum].author}`);
      };
      const getQuotes = async () => {
        const api = "https://type.fit/api/quotes";
        try {
          let data = await fetch(api);
          realData = await data.json();
          getNewQuotes();
          //   console.log(realData[0].text);
          //   console.log(realData[0].author);
        } catch (error) {}
      };

      getQuotes();
      
      soundBtn.addEventListener("click", ()=>{
        let utterance = new SpeechSynthesisUtterance (`${quotes.innerText} by ${author.innerText}` );
        speechSynthesis.speak(utterance);
     });
     copyBtn.addEventListener("click", ()=>{
        navigator.clipboard.writeText(quotes.innerText);
     });
      newQ.addEventListener("click", getNewQuotes);


      //