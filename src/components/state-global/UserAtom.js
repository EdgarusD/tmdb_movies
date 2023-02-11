import { atom } from "jotai";


const userAtom = atom();
const manageUserAtom = atom((get) => get(userAtom), (_get, set, userSesion) => set(userAtom , userSesion))



const userStateAtom = atom(0);
const manageUserStateAtom = atom((get)=> get(userStateAtom),(_get, set, state) => set(userStateAtom, state))

const testAtom = atom(4);
const manageTestAtom = atom((get)=> get(testAtom),(get, set, _args) => set(testAtom, get(testAtom)+2))



export  {userAtom, manageUserAtom, userStateAtom, manageUserStateAtom, testAtom, manageTestAtom}; 