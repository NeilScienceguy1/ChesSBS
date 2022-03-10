import { ILichessUser } from "./LichessUser";

export interface IUserAtom {
    token: string | null;
    user: ILichessUser | null;
}