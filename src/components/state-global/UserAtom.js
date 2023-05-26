import { atom } from "jotai";


const userAtom = atom();
const manageUserAtom = atom((get) => get(userAtom), (_get, set, userSesion) => set(userAtom , userSesion))



const userStateAtom = atom(0);
const manageUserStateAtom = atom((get)=> get(userStateAtom),(_get, set, state) => set(userStateAtom, state))

const testAtom = atom(4);
const manageTestAtom = atom((get)=> get(testAtom),(get, set, _args) => set(testAtom, get(testAtom)+2))

const stateControlAtom = atom(0);
const manageStateControlAtom = atom ((get)=> get(stateControlAtom), (get, set, _args)=>set(stateControlAtom, get(stateControlAtom)+1));

const searchStateAtom = atom(false);
const manageSearchStateAtom = atom ((get)=> get(searchStateAtom), (_get, set, state)=>set(searchStateAtom, state));


export  {userAtom, manageUserAtom, userStateAtom, manageUserStateAtom, testAtom, manageTestAtom, manageStateControlAtom, manageSearchStateAtom}; 