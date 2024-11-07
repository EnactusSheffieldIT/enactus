
export default function Home(props) {
    // const array = Array(700).fill(undefined) // old syntax
    // // or
    const array = [...Array(props.stars)] // using spread syntax (produces the same as above)
    const array1 = [...Array(5-props.stars)]
          

    return (
        <>
           <div className="flex flex-col justify-center items-center">
                
                <div className="flex-row flex">
                    {array.map((_, index) => (
                    
                      <div className="w-[24px]" key={index}
                      dangerouslySetInnerHTML={{
                        __html:
                          `<?xml version="1.0" encoding="iso-8859-1"?>
                    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                    <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 	 width="24px" height="24px" viewBox="0 0 46.354 46.354"
                    xml:space="preserve"><g>	<path d="M21.57,2.049c0.303-0.612,0.927-1,1.609-1c0.682,0,1.307,0.388,1.609,1l5.771,11.695c0.261,0.529,0.767,0.896,1.352,0.981
                    L44.817,16.6c0.677,0.098,1.237,0.572,1.448,1.221c0.211,0.649,0.035,1.363-0.454,1.839l-9.338,9.104
                    c-0.423,0.412-0.616,1.006-0.517,1.588l2.204,12.855c0.114,0.674-0.161,1.354-0.715,1.756c-0.553,0.4-1.284,0.453-1.89,0.137
                    l-11.544-6.07c-0.522-0.275-1.147-0.275-1.67,0l-11.544,6.069c-0.604,0.317-1.337,0.265-1.89-0.136
                    c-0.553-0.401-0.829-1.082-0.714-1.756l2.204-12.855c0.1-0.582-0.094-1.176-0.517-1.588L0.542,19.66
                    c-0.489-0.477-0.665-1.19-0.454-1.839c0.211-0.649,0.772-1.123,1.449-1.221l12.908-1.875c0.584-0.085,1.09-0.452,1.351-0.982
                    L21.57,2.049z"/>
                    </g></svg>`,
                      }} ></div>))}
                      {array1.map((_, index) => (
                          <div className="w-[24px]" key={index}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<?xml version="1.0" ?><svg fill="#000000" width="24px" height="24px" viewBox="0 0 32 32" id="Outlined" xmlns="http://www.w3.org/2000/svg"><title/><g id="Fill"><path d="M28.61,11.67H20l-2.66-8.2a1.39,1.39,0,0,0-2.64,0L12,11.67H3.39a1.39,1.39,0,0,0-.82,2.51l7,5.07L6.89,27.46a1.39,1.39,0,0,0,1.32,1.82A1.43,1.43,0,0,0,9,29l7-5.07L23,29a1.43,1.43,0,0,0,.81.27,1.39,1.39,0,0,0,1.32-1.82l-2.66-8.21,7-5.07A1.39,1.39,0,0,0,28.61,11.67Zm-7.34,6-1.17.86.44,1.38,2.09,6.41-5.45-4L16,21.46l-1.18.86-5.45,4,2.09-6.41.44-1.38-1.17-.86-5.45-4h8.19l.45-1.38L16,5.89l2.08,6.4.45,1.38h8.19Z"/></g></svg>',
                    }} ></div>))}
                </div>
                
                <p className="w-[250px]">{props.comment}</p>
                <div className="text-end my-5"> - {props.name}</div>
              </div>
        </>
    )}