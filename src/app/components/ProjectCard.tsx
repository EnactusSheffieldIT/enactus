import Image from "next/image";
import Link from "next/link";
export default function Home(props) {

    return (
        <>
           <Link href={props.link} className={`${props.color} flex flex-col items-center  justify-center pb-64 project-card h-screen p-8`}>
           {/* w-[500px] */}
              <div className="h-[213px] flex justify-end items-center">
                <Image
                src={props.image}
                width={200}
                height={200}
                alt="Vercel Logo"
                className="block mix-blend-multiply"
              ></Image>
              </div>
              
              <h2 className="text-3xl border-b-2 border-black w-[300px] pb-1 my-5">{props.title}</h2>
              <p className="pb-[20px] px-4 max-w-[90vw] md:max-w-[40vw]">{props.content}</p>
            </Link> 
        </>
    )}