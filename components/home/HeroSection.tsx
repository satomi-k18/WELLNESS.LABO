import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/hero_henkou.png"
                    alt="Hero Background"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
            </div>


        </section>
    );
}
