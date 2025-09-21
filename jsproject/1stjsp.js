const zodiac = document.getElementById("zodiac");

const body = document.body;

const changebackground = () =>
{
  switch (zodiac.value)
  {
    case "aries":
    body.style.backgroundColor = "pink";
    break;

    case "lightpink":
    body.style.backgroundColor = "lightpink";
    break;

    case "black":
    body.style.backgroundColor = "black";
    break;

    case "red":
    body.style.backgroundColor = "red";
    break;


    default:
      body.style.backgroundColor = "green";
      break;
  }
};