import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <Image src="/images/logo/mine-life-logo.png" className="pt-2 mx-auto" alt="logo" height={40} width={180} priority />
  );
};

export default Logo;
