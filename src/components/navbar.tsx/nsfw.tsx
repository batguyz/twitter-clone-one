import React, { useState } from "react";
import Image from "next/image";
import NSFW from "./nsfw-icon.svg"
import NSFWOnly from "./nsfw-only.svg"
import PG13 from "./pg13-icon.svg"
import PG13Only from "./pg13-only.svg"

const SwitchNSFW = (): JSX.Element => {
  const [nsfw, setNsfw] = useState<boolean>(false);

  const changeState = (): void => {
    setNsfw(!nsfw);
    // alert("add image filter");
  };

  return (
    <div className=" ">
      <div className="p-4">
        <label className="swap swap-rotate hidden desktop:inline-block">
          <input type="checkbox" placeholder="nsfw" onClick={changeState} />
          
          <Image
            src={NSFW}
            className="swap-off fill-current w-24 h-auto"
            alt="nsfw-icon"
            width={24}
            height={24}
          />
          <Image
            src={PG13}
            className="swap-on fill-current w-24 h-auto"
            alt="nsfw-icon"
            width={24}
            height={24}
          />
        </label>
      </div>
      {/* mobile version */}
      <div className="p-4 desktop:hidden ">
        <label className="swap swap-rotate ">
          <input type="checkbox" placeholder="nsfw" />

          <Image
            src={PG13Only}
            className="swap-on fill-current w-8 h-auto"
            alt="nsfw-icon"
            width={24}
            height={24}
          />
          <Image
            src={ NSFWOnly}
            className="swap-off fill-current w-8 h-auto"
            alt="nsfw-icon"
            width={24}
            height={24}
          />
        </label>
      </div>
    </div>
  );
};

export default SwitchNSFW;

//create a function to blur the image when clicked