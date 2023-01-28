export const Button = (onclick: () => void) => {

    return(
        <button className="h-20 w-20 hover:bg-stonkWhite hover:text-stonkBlack" onClick={() => onclick()}>Click me!</button>
    );
}