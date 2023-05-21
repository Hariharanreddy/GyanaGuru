import Image from "next/image";

const LandingFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex flex-row w-full border-y-2 items-center gap-8 border-black my-10 px-20">
            <div className="flex flex-row items-center">
                <Image width={40} height={40} src="./logo.svg" alt="logo" />
                <h1 className="font-archivo font-semibold text-lg">GyanaGuru</h1>
            </div>
            <p>© {currentYear} Gyana Guru. All rights reserved.</p>
        </div>
    );
}

export default LandingFooter;