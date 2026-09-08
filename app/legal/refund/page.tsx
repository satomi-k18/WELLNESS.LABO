import type { Metadata } from "next";
import { LegalPage, type LegalRow } from "@/components/legal/LegalPage";
import { seller, tbd } from "@/components/course/courseData";

export const metadata: Metadata = {
    title: "キャンセル・返金規定 | wellness.labo",
    description: "わたしを整えるヨガ講座のキャンセル・返金規定です。",
    robots: { index: false },
};

const rows: LegalRow[] = [
    {
        label: "開講前のキャンセル",
        lines: [
            "開講日の7日前までにご連絡いただいた場合、お支払いいただいた金額を全額返金いたします。",
            "開講日の6日前以降のキャンセルは、返金いたしかねます。",
        ],
    },
    {
        label: "開講後のキャンセル",
        lines: [
            "受講開始後の返金は承っておりません。",
            "各回の録画をお渡ししているため、途中でご参加が難しくなった場合も、録画にて最後までご受講いただけます。",
        ],
    },
    {
        label: "こちらの都合で中止する場合",
        lines: [
            "定員に満たず開講できない場合や、講師の都合により講座を中止する場合は、お支払いいただいた金額を全額返金いたします。",
            "個別の回を実施できない場合は、振替日を設けるか、録画にてご提供します。",
        ],
    },
    {
        label: "返金の方法",
        lines: [
            "ご指定の口座へお振り込みいたします。",
            "振込手数料は当方が負担いたします。",
        ],
    },
    {
        label: "キャンセルのご連絡先",
        lines: [
            tbd(seller.email, "（メールアドレス・要記入）"),
            "または、お申し込みいただいた公式LINEからご連絡ください。",
        ],
    },
];

const notes = [
    "※ 本規定は特定商取引法上の返品特約にあたります。お申し込みの前にご確認ください。",
];

export default function RefundPage() {
    return (
        <LegalPage
            label="Legal"
            title="キャンセル・返金規定"
            lead="わたしを整えるヨガ講座のキャンセル・返金の取り扱いです。お申し込みの前にご確認ください。"
            rows={rows}
            notes={notes}
        />
    );
}
