import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Loading from '@/components/Loading';


const Result = () => {

    const [loaded, setLoaded] = useState(false);

    setTimeout(() => {
        setLoaded(true);
    }, 5000);

  return (
    <>
    {loaded == true ? (
        <div
          style={{
            height: 700,
            width: 800,
            backgroundColor: "#343434",
            padding: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#CFCFCF",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            margin: 10,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
            <TypeAnimation
              sequence={[
                1000, // Waits 1s
                'Two', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Two Three', // Types 'Three' without deleting 'Two'
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: '1.5em' }}
            />
        </div>
    ) : (
        <div className='flex flex-col justify-center items-center content-center self-center'>
            <Loading />
        </div>
    )
    }
    </>
    );
}

export default Result;