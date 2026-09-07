import type { Metadata } from "next";
import { LegalPage, type LegalRow } from "@/components/legal/LegalPage";
import { seller, tbd } from "@/components/course/courseData";

export const metadata: Metadata = {
    title: "特定商取引法に基づく表記 | wellness.labo",
    description: "わたしを整えるヨガ講座の特定商取引法に基づく表記です。",
    robots: { index: false },
};

const name = tbd(seller.legalName, "（氏名・要記入）");

const rows: LegalRow[] = [
    { label: "販売事業者", lines: [`${seller.shopName}（運営者：${name}）`] },
    { label: "運営責任者", lines: [name] },
    {
        label: "所在地",
        lines: ["請求があったら遅滞なく開示します"],
    },
    {
        label: "電話番号",
        lines: ["請求があったら遅滞なく開示します"],
    },
    { label: "メールアドレス", lines: [tbd(seller.email, "（メールアドレス・要記入）")] },
    {
        label: "販売価格",
        lines: [
            "わたしを整えるヨガ講座　58,000円（税込）",
            "※ 1期モニター価格です。2期目以降は98,000円（税込）で開講します。",
        ],
    },
    {
        label: "商品代金以外の必要料金",
        bullets: [
            "銀行振込手数料（お客様のご負担となります）",
            "インターネット接続にかかる通信料",
        ],
    },
    {
        label: "お支払い方法",
        lines: ["銀行振込（一括 または 2回払い）"],
    },
    {
        label: "お支払い時期",
        lines: [
            `お申し込み後にお伝えする口座へ、${tbd(seller.paymentDue, "（振込期日・要記入）")}にお振り込みください。`,
        ],
    },
    {
        label: "役務の提供時期",
        lines: [
            "2026年10月開講。全20回（1回90分）をZoomにて実施します。",
            "日程は、説明会でご都合をうかがったうえで決定します。",
        ],
    },
    {
        label: "動作環境",
        lines: [
            "Zoomが利用できるパソコン・タブレット・スマートフォン、およびインターネット接続環境",
        ],
    },
    {
        label: "返品・キャンセルについて",
        link: { href: "/legal/refund", text: "キャンセル・返金規定をご覧ください" },
    },
];

const notes = [
    "※ 所在地・電話番号は、上記メールアドレスへご請求いただければ遅滞なく開示いたします。",
    "※ 本講座は健康の維持・増進を目的としたレッスンであり、病気の治療や特定の効果を保証するものではありません。",
];

export default function TokushohoPage() {
    return (
        <LegalPage
            label="Legal"
            title="特定商取引法に基づく表記"
            rows={rows}
            notes={notes}
        />
    );
}
