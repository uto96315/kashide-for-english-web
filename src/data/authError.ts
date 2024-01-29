

// authで発生するエラーをここで変換できるようにする

type AuthError = {
    id: number;
    code: string;
    translate: string;
}[];

export const registerErrors: AuthError = [
    {
        id: 1,
        code: "auth/email-already-in-use",
        translate: "このメールアドレスはすでに登録されています",
    },
    {
        id: 2,
        code: "auth/invalid-email",
        translate: "メールアドレスが適切ではありません。"
    },
    {
        id: 3,
        code: "auth/invalid-password",
        translate: "パスワードが適切ではありません。6文字以上の英数字で入力ください。"
    },
];

export const convertRegisterErrors = (errorCode: string) => {
    const error = registerErrors.find((error) => error.code === errorCode);
    console.log({code: errorCode, result: error});
    
    return error ? error.translate : "認証でエラーが発生しました。";
};