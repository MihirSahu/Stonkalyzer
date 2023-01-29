import Image from "next/image";

export const page = () => {
    return(<>
    <Image alt="car" src={'/car.png'} width='1000' height='1000'></Image>
    <div>
        {`Hey! We've been trying to reach you about your car's extended warranty`}
    </div>
    </>);
}

export default page