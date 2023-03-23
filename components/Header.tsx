import Link from "next/link";
import React from "react";

function Header() {
  return (
        <header>
            <div className="flex items-center space-x-5 left-[32px] top-[30px] fixed">
                <Link href="/">
                    <img className="object-contain cursor-pointer" 
                    src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
                    alt=""
                    />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-[10px]">
                    <h3 className="hover:text-[#03AC0E] cursor-pointer text-[12px] opacity-[0.54]">Kategori</h3>
                </div>

            </div>

        </header>
  );
}

export default Header;
