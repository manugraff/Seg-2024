import { supabase } from "../@libs/supabase/supabase";
import { ICredential } from "../@libs/supabase/Types";

const signIn = async (credential: ICredential) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: credential.username,
        password: credential.password
    });
    if (error) throw error;

    return data;
}

export const AuthService = {
    signIn
}