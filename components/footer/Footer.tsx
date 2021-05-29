import React, { FC } from "react";
import style from "./footer.module.scss";
import Link from "next/link";

const Footer: FC<{}> = () => {
  return (
    <div className={style.footer}>
      <Link href="/mentions-legales">Mentions Legales</Link>
    </div>
  );
};

export default Footer;
