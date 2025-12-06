import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
} from "firebase/auth";
import { createContext, useContext } from "react";
import { getDatabase, set, ref } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { decryptData } from "../modules/encryption";

const firebaseConfig =
  "U2FsdGVkX18LCNu82mX6tJvvl1e25kzW1GjuvU1Nsz2mC341Q4aDX5rvn7OGrvb7VZHyzMOtwvpfq9W6CT+1VRRx/v1HeBvW+L/ODBhq1i/Ma+2JSnVznyY3fypDwD1LDhGeukBGiAuifgZ3tAH80xtzxzcd6XZr8YA30EDlDmXDrvG9BBqPiqPK3BTyCeIEZSVquICE+vzsf+FZasd/wX5rmxVCRV7K+pY+C37TLUVsRnYvW/QA+IdmfgPr3ADzsiBM81fpPhR20Wfx1Zh0vksl94UxEHZZ58Z1d4xx6Oj092MKY0aGVH8zwOX6nZWj4fbTK32d9Yberm+B/zmBJaUo2oy0M4Sz4zAv348YRWyEQTWnJyORJgtovZuNNNL20JqEYYRVvkyXF9zb0Va3lExw18UJtoQABkHJGI5QWTE=";

const firebaseApp = initializeApp(decryptData(firebaseConfig));
export const firbaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
const database = getDatabase(firebaseApp);
const FirbaseContext = createContext(null);
export const useFirebase = () => useContext(FirbaseContext);
export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPass = (email, password) => {
    return createUserWithEmailAndPassword(firbaseAuth, email, password);
  };

  const putData = (key, data) => {
    set(ref(database, key), data);
  };

  const deleteData = (email) => {
    return deleteUser(email);
  };
  return (
    <FirbaseContext.Provider
      value={{ signupUserWithEmailAndPass, putData, deleteData }}
    >
      {props.children}
    </FirbaseContext.Provider>
  );
};
