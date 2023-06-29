const epicMix = [
  "How Great is Our God",
  "I Just Wanna Praise You",
  "No Weapon",
  "You Brought the Sunshine",
  "Golden",
  "Video",
  "Brown Skin Lady",
  "Don't Stop Til' You Get Enough",
  "Let's Stay Together",
  "You Remind Me",
  "Got To Give It Up"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  total.innerText = `${epicMix.length} best jams!`;
  mixInfo(epicMix);
});
