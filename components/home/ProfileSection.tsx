import Image from "next/image";

export function ProfileSection() {
    return (
        <section id="profile" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50/50">
            <div className="mx-auto max-w-5xl px-6 md:px-10">

                {/* Profile */}
                <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16 mb-16">
                    {/* Image */}
                    <div className="relative flex-shrink-0 flex justify-center">
                        <div className="relative h-56 w-56 md:h-72 md:w-72">
                            <div className="absolute -left-3 -top-3 -z-10 h-full w-full rounded-full bg-pink-100/60" />
                            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-xl">
                                <Image
                                    src="/images/profile.jpg"
                                    alt="小西聡美"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-full border-2 border-pink-200/50" />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <span className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-pink-400">
                            About Me
                        </span>
                        <h2 className="mb-1 text-2xl font-bold text-slate-800 md:text-3xl">
                            小西聡美
                        </h2>
                        <p className="mb-4 text-sm font-medium text-pink-400 tracking-wide">
                            ヨガ × 書く瞑想 × アロマ
                        </p>
                        <p className="mb-1 text-sm text-slate-500">ヨガ講師 ｜ 2児の母</p>
                        <div className="my-4 w-12 h-px bg-pink-200" />
                        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                            <p>
                                ヨガとの出会いは自宅⇔会社だった会社員時代。
                            </p>
                            <p>
                                運動不足だった体に心地よい汗が流れ、会社での嫌な出来事も忘れ夢中になることができ開放感と爽快感でホットヨガにハマる。
                                その後結婚し第１子出産後、仕事と子育ての間の時間つくって再びヨガをする中で、ヨガの勉強を深めたくインストラクター養成コースを受講し、フリーのヨガインストラクターに。
                            </p>
                            <p>
                                現在はYOGAEkamSapporo主催雨宮希先生のもとでアシュタンガヨガ練習しながら学びを探究中。
                            </p>
                            <ul className="mt-4 space-y-1 text-xs text-slate-400 border-t border-pink-100 pt-4">
                                <li>2017年9月　全米ヨガアライアンス RYT200</li>
                                <li>2017年11月　jcca ストレッチポールベーシックセブンインストラクター</li>
                                <li>2018年2月　アロマコーディネーター</li>
                                <li>2021年2月　YOGA Ekam Sapporo アシュタンガヨガ BASIC POWER FLOW YOGA®</li>
                                <li>2022年3月　RYT300修了 E-RYT200取得</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
