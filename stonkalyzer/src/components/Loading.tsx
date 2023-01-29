import { quotes } from "@/data/quotes";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";


const Loading = () => {

    const [quote, setQuote] = useState("");
    useEffect(() => setQuote(quotes[Math.floor(Math.random() * quotes.length)]) ,[])

    return (
        <div className="flex flex-col justify-center items-center space-y-10">
            <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
            <div>{quote}</div>
        </div>
    );
}

export default Loading;