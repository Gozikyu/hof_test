export const createGreeter = (greeting: string): ((name: string) => string) => {
  return (name: string) => {
    return `${greeting}, ${name}!`;
  };
};
