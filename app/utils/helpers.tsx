export const generateKey = (score: number): string => {
  const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
  const randomNumber = Math.floor(Math.random() * 100);
  const prefix = randomLetter + randomNumber + score;

  return prefix;
};
