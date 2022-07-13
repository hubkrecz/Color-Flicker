import "./styles.css";
let wasButtonClicked = document.querySelector("#mrButtonId");
const functionSwitch = () => {
  bgColorChanger(
    randomNumberCreator(),
    randomNumberCreator(),
    randomNumberCreator()
  );
};
const randomNumberCreator = () => {
  Math.ceil(0);
  Math.floor(255);
  console.log(Math.floor(Math.random() * (255 - 0)) + 0);
  return Math.floor(Math.random() * (255 - 0)) + 0;
};

const bgColorChanger = (...values) => {
  document.body.style.backgroundColor = `rgb(${values.join(",")})`;
};

wasButtonClicked.addEventListener("click", functionSwitch);
