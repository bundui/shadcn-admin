import Image from "next/image";
import * as React from "react";
import Link from "next/link";

interface Props extends Omit<React.ComponentProps<typeof Link>, "href"> {
  href?: string;
  className?: string;
}

export default function Logo(props: Props) {
  return (
    <Link href="/" {...props}>
      <Image
        src="/logo.png"
        alt="shadcn admin dashboard template logo"
        width={20}
        height={20}
        className="rounded-md invert"
      />
      <span className="text-base font-semibold">Shadcnadmin</span>
    </Link>
  );
}
