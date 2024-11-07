import Image from "next/image";
export default function Home(props) {

    return (
        <>
           <div className="flex flex-col items-center w-[500px] justify-center">
              <Image
                src={props.image}
                width={200}
                height={200}
                alt="Vercel Logo"
                className="block mix-blend-multiply"
              ></Image>
              <h2 className="text-3xl border-b-2 border-black w-[300px] pb-1 my-5">{props.title}</h2>
              <p className="mb-[120px] mx-4">{props.content}</p>
            </div> 
        </>
    )}