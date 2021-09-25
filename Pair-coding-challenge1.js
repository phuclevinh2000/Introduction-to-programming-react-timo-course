let text = "";

for (let i = 99; i > 0; i -= 3) {
  text += i + "<br>";
  document.getElementById("demo").innerHTML = text;
}
