export function generateUUID() {
  function randomHexDigit() {
    return Math.floor(Math.random() * 16).toString(16);
  }

  function replacePlaceholder(char) {
    if (char === "x") {
      return randomHexDigit();
    } else if (char === "y") {
      return (8 + Math.floor(Math.random() * 4)).toString(16);
    }
    return char;
  }

  const template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  const uuid = template.replace(/[xy]/g, replacePlaceholder);

  return uuid;
}
