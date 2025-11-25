function encrypt() {
  const text = document.getElementById("inputText").value.toUpperCase();
  let shift = parseInt(document.getElementById("shift").value);

  if (isNaN(shift)) shift = 3; // Default

  let output = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char >= 'A' && char <= 'Z') {
      let code = char.charCodeAt(0) - 65;
      let shifted = (code + shift) % 26;
      output += String.fromCharCode(shifted + 65);
    } else {
      output += char; // Mantiene spazi e simboli
    }
  }

  document.getElementById("result").innerHTML = "→ " + output;
}
