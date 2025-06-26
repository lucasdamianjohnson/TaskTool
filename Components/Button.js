/**
 * Creates a styled HTML button element with text and click behavior.
 *
 * @param {Object} props - The properties for the button.
 * @param {string} props.text - The text to display on the button.
 * @param {() => void} props.onClick - The function to call when the button is clicked.
 * @param {string} props.className - A CSS class name to style the button.
 * @returns {HTMLButtonElement} The created button element.
 */
export default function Button(props) {
  const button = document.createElement("button");
  button.innerText = props.text;

  button.addEventListener("click", props.onClick);

  button.className = `button ${props.className || ""}`;
  return button;
}
