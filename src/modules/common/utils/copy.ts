export const copyToClipboard = (textToCopy: string): void => {
  // Create a temporary textarea element to copy the text
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};
