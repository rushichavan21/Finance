import { atom } from "recoil";

const accountBalanceAtom = atom({
    key: 'accountBalance',
    default: 0 
});

export default accountBalanceAtom;
