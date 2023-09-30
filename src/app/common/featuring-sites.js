import stackoverflow from "./stackoverflow.png";
import medium from "./medium.png";
import github from "./github.png";
import twitter from "./twitter.png";
import linkedin from "./linkedin.png";
import youtube from "./youtube.png";
import Image from "next/image";

export const FeaturingSites = () => {
  return (
    <div className="pb-20 static z-10" style={{ zIndex: 100 }}>
      <div className="w-full flex items-center justify-center grayscale text-gray-600 pt-10 pb-10 sm:pb-0 xs:pb-0">
        Let's Connect:
      </div>
      <div className="w-full flex items-center justify-center grayscale">
        <div className="grid grid-cols-4 md:gap-5 sm:gap-10 xs:gap-10 pt-5 sm:w-3/4 xs:pl-1">
          <div className="md:col-span-1 sm:col-span-2 xs:col-span-4">
            <a href="https://www.producthunt.com/@mel3kings" target="_blank" rel="noreferrer">
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=541489&theme=dark"
                alt="Insurance&#0032;Policy&#0032;Ai - Check&#0032;if&#0032;you&#0032;are&#0032;&#0042;really&#0042;&#0032;covered&#0046;&#0032; | Product Hunt"
              />
            </a>
          </div>
          <div className="md:col-span-1 sm:col-span-2 xs:col-span-4">
            <a href="https://stackoverflow.com/users/2023728/mel3kings">
              <Image alt={"logo"} src={stackoverflow} className="grayscale" />
            </a>
          </div>

          <div className="md:col-span-1 sm:col-span-2 xs:col-span-4">
            <a href="https://medium.com/@meltatlonghari3">
              <Image alt={"logo"} src={medium} className="grayscale" />
            </a>
          </div>
          <div className="md:col-span-1 sm:col-span-2 xs:col-span-4">
            <a href="https://www.youtube.com/@mel3kings">
              <Image alt={"logo"} src={youtube} className="grayscale" />
            </a>
          </div>
          <div className="md:col-span-1 sm:col-span-2 xs:col-span-4">
            <a href="https://twitter.com/meltatlonghari3">
              <Image alt={"logo"} src={twitter} className="grayscale" />
            </a>
          </div>
          <div className="md:col-span-1 sm:col-span-2 xs:col-span-4">
            <a href="https://github.com/mel3kings">
              <Image alt={"logo"} src={github} className=" grayscale" />
            </a>
          </div>
          <div className="md:col-span-1 sm:col-span-2 xs:col-span-4">
            <a href="https://www.linkedin.com/in/melchor-tatlonghari">
              <Image alt={"logo"} src={linkedin} className="grayscale" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
