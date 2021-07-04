export const handleEnterKeypress = (e, func) => {
  //it triggers by pressing the enter key

  if (e.key === "Enter") {
    return func();
  }
};
