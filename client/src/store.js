import {
    selector,
    atom,
} from 'recoil';

export const compt = atom({
    key: 'compteur', // unique ID (with respect to other atoms/selectors)
    default: 2, // valeur par défaut (alias valeur initials)
} );
  
export const comptage = selector({
  key: 'nb', // unique ID (with respect to other atoms/selectors)
   get: ({get}) => {
    return get(compt).length;
  },
} );