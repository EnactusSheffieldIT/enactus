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
                className="block"
              ></Image>
              <h2 className="text-3xl">{props.title}</h2>
              <div className="scale-[25] scale-x-150 rotate-[90deg] font-[math]">-</div>
              <p className="mb-[120px] mx-4">{props.content}</p>
            </div> 
        </>
    )}