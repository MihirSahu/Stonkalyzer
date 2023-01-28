export const Button = (props: { onclick: () => void }) => {
  return (
    <button
      className="h-20 w-20 hover:bg-stonkWhite hover:text-stonkBlack"
      onClick={() => props.onclick()}
    >
      Click me!
    </button>
  );
};
