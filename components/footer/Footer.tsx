import React, { FC } from "react";
import style from "./footer.module.scss";
import Link from "next/link";

const Footer: FC<{}> = () => {
  return (
    <div className={style.footer}>
      <Link href="/mentions-legales">Mentions Legales</Link>
      <p className={style.studio99}>
        Made with [love] by{" "}
        <Link target="_blank" href="https://instagram.com/wearestudio99">
          WeAreStudio99
        </Link>
      </p>
    </div>
  );
};

export default Footer;
