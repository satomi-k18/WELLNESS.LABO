/**
 * 講座LPで差し替える値をここにまとめる。
 * null にすると、画面上は「調整中」と表示される。
 */
export const courseTBD = {
    /** 支払い方法 */
    paymentMethod: "銀行振込" as string | null,
    /** 講師名 */
    instructorName: "satomi" as string | null,
    /** 特定商取引法に基づく表記ページのURL */
    tokushohoUrl: "/legal/tokushoho" as string | null,
    /** キャンセル・返金規定ページのURL */
    refundPolicyUrl: "/legal/refund" as string | null,
} as const;

/**
 * 特定商取引法に基づく表記で使う事業者情報。
 * 所在地・電話番号は「請求があったら遅滞なく開示」方式のため、ここには持たない。
 * ただしメールアドレスの明記は必須（請求の受付窓口になるため）。
 */
export const seller = {
    /** 屋号 */
    shopName: "wellness.labo",
    /** 戸籍上の氏名（フルネーム）。屋号やニックネームだけでは特商法の要件を満たさない */
    legalName: "小西 聡美" as string | null,
    /** 問い合わせ・開示請求を受け付けるメールアドレス */
    email: "s420281@gmail.com" as string | null,
    /** お振込期日の案内 */
    paymentDue: "お申し込みから7日以内" as string | null,
} as const;

/** 申込導線。CTAはこの1種類だけにする */
export const BRIEFING_APPLY_URL = "https://lin.ee/r7oFd5g";

/** 未確定項目の表示用フォールバック */
export function tbd(value: string | null, fallback = "調整中") {
    return value ?? fallback;
}
