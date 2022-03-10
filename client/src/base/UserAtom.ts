import { atom } from "recoil"
import { recoilPersist } from "recoil-persist";
import { IUserAtom } from "../types/UserAtomType";
const { persistAtom } = recoilPersist({
    key:"lichess_info",
});

    
export const userAtom = atom<IUserAtom>({
    key:"userAtom",
    default:{
        token:null,
        user:null
    },
    effects:[persistAtom]
})