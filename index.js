function scuberGreetingForFeet(sample) {
  if (sample === 199) {
    return "This one is on me!";
  } else if (sample === 2001) {
    return "I will gladly take your thirty bucks.";
  } else if (sample === 2501) {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  let response = city === "NYC" ? "Ok, sounds good." : "No go.";
  return response;
}

function switchOnCharmFromTip(tip) {
  let response = "";
  switch (tip) {
    case "generous":
      response = "Thank you so much.";
      break;
    case "not as generous":
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
  }
  return response;
}
