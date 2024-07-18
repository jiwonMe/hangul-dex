import { 상용한글string } from "./상용한글string";

export const getRandomCharacter = (only상용한글?: boolean) => {
  if (only상용한글) {
    return 상용한글string.charAt(Math.floor(Math.random() * 상용한글string.length));
  }
  // Generate a random Korean character between '가' and '힣'
  const start = '가'.charCodeAt(0);
  const end = '힣'.charCodeAt(0);
  const randomCharCode = start + Math.floor(Math.random() * (end - start + 1));
  return String.fromCharCode(randomCharCode);
}