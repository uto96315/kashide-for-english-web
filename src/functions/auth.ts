

import { AuthError, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseSettings";
import { convertRegisterErrors } from "@/data/authError";


// authにユーザー登録
export const signUpWithEmail = async (email: string, password: string) => {
    // パスワードが6文字以下の場合にはエラーをスローする
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(`サインアップが完了しました。${user.uid}`);
        return user;
    } catch (error: any) {
        const authError = convertRegisterErrors(error.code);
        throw authError;
    }
};

// ログインするための処理
export const loginWithEmail = async (email: string, pass: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        return userCredential.user;
    } catch (e) {
        throw e;
    }
};