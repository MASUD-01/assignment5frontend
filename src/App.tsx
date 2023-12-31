import { onAuthStateChanged } from "firebase/auth";
import MainLayout from "./layout/mainlayout/MainLayout";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { auth } from "./lib/firebase";

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
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
