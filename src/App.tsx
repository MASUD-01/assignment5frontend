import { onAuthStateChanged } from "firebase/auth";
import MainLayout from "./layout/mainlayout/MainLayout";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { auth } from "./lib/firebase";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
