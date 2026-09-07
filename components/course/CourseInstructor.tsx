import Image from "next/image";
import { courseTBD, tbd } from "./courseData";

export function CourseInstructor() {
    return (
        <section className="bg-surface py-20 md:py-28">
            <div className="mx-auto max-w-3xl px-6 md:px-10">
                <div className="mb-14 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        About me
                    </span>
                    <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
                        わたし自身のこと
                    </h2>
                </div>

                <div className="flex flex-col gap-10 md:flex-row md:gap-14">
                    {/* Photo */}
                    <div className="relative aspect-square w-40 flex-shrink-0 self-center md:w-52 md:self-start">
                        <div className="relative h-full overflow-hidden rounded-full shadow-sm">
                            <Image
                                src="/images/profile.jpg"
                                alt="講師"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                        <p className="mb-6 font-serif text-xl font-medium text-ink">
                            {tbd(courseTBD.instructorName, "（お名前）")}
                        </p>

                        <div className="space-y-6 leading-loose text-muted">
                            <p>
                                わたしは今シャラに通っているわけではありません。
                                オンラインで数年、家で一人で練習してきました。
                                オンラインを繋がないで一人で練習することもあります。時々、対面クラスに行く程度です。
                            </p>
                            <p>オーソライズも持っていません。</p>
                            <p>
                                足りないところは、いまもオンラインの1年コースで学び続けています。
                            </p>
                        </div>

                        <div className="mt-8 rounded-2xl bg-mint/50 px-6 py-6">
                            <p className="leading-loose text-ink">
                                だからこの講座も、家で一人でできるようになることを目指してつくりました。
                                <br />
                                <span className="font-medium">自立した練習生です。</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
