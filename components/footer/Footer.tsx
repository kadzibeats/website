import React, { FC } from "react";
import style from "./footer.module.scss";
import Link from "next/link";

const Footer: FC<{}> = () => {
  return (
    <div className={style.footer}>
      <Link href="/mentions-legales">
        <a>Mentions Legales</a>
      </Link>
      <p className={style.studio99}>
        Made with [love] by{" "}
        <Link href="https://instagram.com/wearestudio99">
          <a target="blank">wearestudio99</a>
        </Link>{" "}
        ©
      </p>
    </div>
  );
};

export default Footer;
