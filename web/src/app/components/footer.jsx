export default function Footer() {
  return (
    <footer>
      <div className="h-[500px]  bg-[url('/files/Site%20Files/leaf.jpg')]">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=north%20campus%20enactus&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>',
          }}
        ></div>
      </div>
    </footer>
  );
}
