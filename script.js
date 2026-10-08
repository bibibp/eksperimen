/* =================================
   ELEMENT
================================= */

const chat = document.getElementById("chat");

const choices = document.getElementById("choices");

const typing = document.getElementById("typing");

const statusText = document.getElementById("status");


/* =================================
   ADD MESSAGE
================================= */

function addMessage(text, type) {

  const row = document.createElement("div");

  row.className =
    `message-row ${type}`;


  const bubble = document.createElement("div");

  bubble.className = "bubble";

  bubble.innerHTML = text;


  row.appendChild(bubble);

  chat.appendChild(row);


  chat.scrollTop = chat.scrollHeight;
}


/* =================================
   TYPING EFFECT
================================= */

function showTyping(callback) {

  typing.classList.remove("hidden");

  chat.appendChild(typing);

  chat.scrollTop = chat.scrollHeight;


  setTimeout(() => {

    typing.classList.add("hidden");

    callback();

  }, 900);

}


/* =================================
   DISABLE CHOICES
================================= */

function disableChoices() {

  choices.innerHTML = "";

}


/* =================================
   CHOICE 1
================================= */

function choiceOne() {

  disableChoices();


  addMessage(
    "ngga, ngomong aja.",
    "sent"
  );


  showTyping(() => {

    addMessage(
      "kamu pernah ngerasa kalau kita...",
      "received"
    );


    showTyping(() => {
      addMessage(
        "entah. kaya agak berbeda dari yang lain?",
        "received"
      );
      showNextChoices();
    });
  });
}


/* =================================
   CHOICE 2
================================= */

function choiceTwo() {
  disableChoices();
  addMessage(
    "apatuh? penasaran.",
    "sent"
  );


  showTyping(() => {

    addMessage(
      "nah, itu masalahnya.",
      "received"
    );


    showTyping(() => {

      addMessage(
        "kalau aku ngomong, mungkin semuanya jadi beda.",
        "received"
      );


      showNextChoices();

    });

  });

}


/* =================================
   CHOICE 3
================================= */

function choiceThree() {

  disableChoices();


  addMessage(
    "kalau ngga penting, nanti aja.",
    "sent"
  );


  showTyping(() => {

    addMessage(
      "iya.",
      "received"
    );


    showTyping(() => {

      addMessage(
        "mungkin memang lebih baik begitu.",
        "received"
      );


      showNextChoices();

    });

  });

}


/* =================================
   NEXT CHOICES
================================= */

function showNextChoices() {

  choices.innerHTML = `

    <button onclick="answerYes()">
      aku juga pernah mikir begitu
    </button>

    <button onclick="answerNo()">
      kamu terlalu banyak mikir
    </button>

    <button onclick="answerMaybe()">
      terus menurut kamu gimana?
    </button>

  `;

}


/* =================================
   ANSWER YES
================================= */

function answerYes() {

  disableChoices();


  addMessage(
    "aku juga pernah mikir begitu.",
    "sent"
  );


  showTyping(() => {

    addMessage(
      "oh.",
      "received"
    );


    showTyping(() => {

      addMessage(
        "berarti bukan aku aja.",
        "received"
      );


      showTyping(() => {

        addMessage(
          "tapi kita tetap ngga bilang apa apa.",
          "received"
        );
        finalChoices();
      });
    });
  });
}


/* =================================
   ANSWER NO
================================= */

function answerNo() {

  disableChoices();


  addMessage(
    "kamu terlalu banyak mikir.",
    "sent"
  );


  showTyping(() => {

    addMessage(
      "mungkin.",
      "received"
    );


    showTyping(() => {

      addMessage(
        "atau mungkin aku cuma takut salah mengartikan sesuatu.",
        "received"
      );


      finalChoices();

    });

  });

}


/* =================================
   ANSWER MAYBE
================================= */

function answerMaybe() {

  disableChoices();


  addMessage(
    "terus menurut kamu gimana?",
    "sent"
  );


  showTyping(() => {

    addMessage(
      "aku juga nggak tahu.",
      "received"
    );


    showTyping(() => {

      addMessage(
        "kalau aku tahu, mungkin dari tadi udah aku bilang.",
        "received"
      );


      finalChoices();

    });

  });

}


/* =================================
   FINAL CHOICES
================================= */

function finalChoices() {

  choices.innerHTML = `

    <button onclick="finalAnswer()">
      jadi... sebenarnya ada apa?
    </button>

    <button onclick="leaveIt()">
      udah, ngga usah dibahas
    </button>

  `;

}


/* =================================
   FINAL ANSWER
================================= */

function finalAnswer() {

  disableChoices();


  addMessage(
    "jadi... sebenarnya ada apa?",
    "sent"
  );


  showTyping(() => {

    addMessage(
      "mungkin ada.",
      "received"
    );


    showTyping(() => {

      addMessage(
        "mungkin juga nggak ada.",
        "received"
      );


      showTyping(() => {

        addMessage(
          "aku cuma tahu, setiap kali mau ngomong...",
          "received"
        );


        showTyping(() => {
          addMessage(
            "selalu ada alasan buat mengurungkannya.",
            "received"
          );
          finish();

        });
      });
    });
  });
}


/* =================================
   LEAVE IT
================================= */

function leaveIt() {
  disableChoices();
  addMessage(
    "udah, nggak usah dibahas.",
    "sent"
  );


  showTyping(() => {

    addMessage(
      "iya.",
      "received"
    );


    showTyping(() => {

      addMessage(
        "mungkin memang belum waktunya.",
        "received"
      );


      finish();

    });

  });

}


/* =================================
   END
================================= */

function finish() {

  setTimeout(() => {

    choices.innerHTML = `
      <button onclick="showEnding()">
        lanjut
      </button>`;
  }, 500);
}

function showEnding() {
  disableChoices();
  addMessage(
    "kadang dua orang ngga benar benar jauh.",
    "received"
  );


  showTyping(() => {

    addMessage(
      "mereka hanya sama sama menunggu hingga tanpa sadar mereka sudah menjalaninya.",
      "received"
    );


    showTyping(() => {

      addMessage(
        "dan mungkin, sampai sekarang, tidak ada yang tahu siapa yang seharusnya mulai. menurut dirimu gimana?",
        "received"
      );
      statusText.textContent = "last seen just now";

    });

  });

}



/* =================================
   RESET
================================= */

function resetChat() {
  location.reload();
}