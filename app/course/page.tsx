import type { Metadata } from "next";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseIntro } from "@/components/course/CourseIntro";
import { CourseWhy } from "@/components/course/CourseWhy";
import { CourseInstructor } from "@/components/course/CourseInstructor";
import { CourseContent } from "@/components/course/CourseContent";
import { CourseCurriculum } from "@/components/course/CourseCurriculum";
import { CourseHabit } from "@/components/course/CourseHabit";
import { CourseDetails } from "@/components/course/CourseDetails";
import { CourseMonitor } from "@/components/course/CourseMonitor";
import { CourseAudience } from "@/components/course/CourseAudience";
import { CourseFaq } from "@/components/course/CourseFaq";
import { CourseCta } from "@/components/course/CourseCta";

export const metadata: Metadata = {
    title: "わたしを整えるヨガ講座 | wellness.labo",
    description:
        "先生になるための講座ではありません。アシュタンガヨガ ハーフプライマリーとヨガの考え方を、全20回かけて。自分で自分を整えられるようになる、少人数オンライン講座です。",
};

export default function CoursePage() {
    return (
        <>
            <CourseHero />
            <CourseIntro />
            <CourseWhy />
            <CourseInstructor />
            <CourseContent />
            {/* 新しい原稿にはないブロック。不要ならこの1行を削除する */}
            <CourseCurriculum />
            <CourseHabit />
            <CourseDetails />
            <CourseMonitor />
            <CourseAudience />
            <CourseFaq />
            <CourseCta />
        </>
    );
}
