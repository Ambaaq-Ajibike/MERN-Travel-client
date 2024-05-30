import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  logOutStart,
  logOutSuccess,
  logOutFailure,
  deleteUserAccountStart,
  deleteUserAccountSuccess,
  deleteUserAccountFailure,
} from "../redux/user/userSlice";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import MyBookings from "./user/MyBookings";
import UpdateProfile from "./user/UpdateProfile";
import MyHistory from "./user/MyHistory";

import { auth, db } from "../firebase";
import { getDocs, collection, } from "firebase/firestore";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  // let { currentUser, loading, error } = useSelector((state) => state.user);
  const [currentUser, setCurrentUser] = useState({})
  const [profilePhoto, setProfilePhoto] = useState(undefined);
  const [photoPercentage, setPhotoPercentage] = useState(0);
  const [activePanelId, setActivePanelId] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    phone: "",
    avatar: "",
  });
  const usersCollectionRef = collection(db, "appUsers");
  const getUser = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData, "data");
      const user = filteredData.find(x => x.userId == auth?.currentUser?.uid);
      setCurrentUser(user);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUser();

    if (currentUser !== null) {
      setFormData({
        username: currentUser.username,
        email: currentUser.email,
        address: currentUser.address,
        phone: currentUser.phone,
        avatar: currentUser.avatar,
      });
    }
  }, []);

  const handleProfilePhoto = (photo) => {
    try {
      dispatch(updateUserStart());
      const storage = getStorage(app);
      const photoname = new Date().getTime() + photo.name.replace(/\s/g, "");
      const storageRef = ref(storage, `profile-photos/${photoname}`); //profile-photos - folder name in firebase
      const uploadTask = uploadBytesResumable(storageRef, photo);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          //   console.log(progress);
          setPhotoPercentage(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            const res = await fetch(
              `/api/user/update-profile-photo/${currentUser._id}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": " application/json",
                },
                body: JSON.stringify({ avatar: downloadUrl }),
              }
            );
            const data = await res.json();
            if (data?.success) {
              alert(data?.message);
              setFormData({ ...formData, avatar: downloadUrl });
              dispatch(updateUserSuccess(data?.user));
              setProfilePhoto(null);
              return;
            } else {
              dispatch(updateUserFailure(data?.message));
            }
            dispatch(updateUserFailure(data?.message));
            alert(data?.message);
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      dispatch(logOutStart());
      const res = await fetch("/api/auth/logout");
      const data = await res.json();
      if (data?.success !== true) {
        dispatch(logOutFailure(data?.message));
        return;
      }
      dispatch(logOutSuccess());
      navigate("/login");
      alert(data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    const CONFIRM = confirm(
      "Are you sure ? the account will be permenantly deleted!"
    );
    if (CONFIRM) {
      try {
        dispatch(deleteUserAccountStart());
        const res = await fetch(`/api/user/delete/${currentUser._id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data?.success === false) {
          dispatch(deleteUserAccountFailure(data?.message));
          alert("Something went wrong!");
          return;
        }
        dispatch(deleteUserAccountSuccess());
        alert(data?.message);
      } catch (error) {}
    }
  };

  return (
    <div className="flex w-full flex-wrap max-sm:flex-col p-2">
      {currentUser ? (
        <>
        <div className="mx-auto bg-white light:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="border-b px-4 pb-6">
                <div className="text-center my-4">
                    <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                        src="/src/assets/images/profile.png" alt="" />
                    <div className="py-2">
                        <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">Cait Genevieve</h3>
                        <div className="inline-flex text-blue-900 dark:text-blue-500 items-center" style={{fontSize: "30px"}}>
                         
                            {currentUser.username}
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 px-2" style={{margin: "20px"}}>
                    <button
                        className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                        {currentUser.email}
                    </button>
                    <button
                        className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-black px-4 py-2">
                        {currentUser.address}
                    </button>
                </div>
                <div className="flex gap-2 px-2" style={{margin: "20px"}}>
                    <button
                        className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                        {currentUser.phone}
                    </button>
                    <button
                        className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-black px-4 py-2">
                        {currentUser.address}
                    </button>
                </div>
            </div>
         
        </div>
          {/* ---------------------------------------------------------------------------------------- */}
          <div className="w-[60%] max-sm:w-full">
            <div>
              <nav className="w-full border-blue-500 border-b-4">
                <div className="w-full flex gap-2">
                  <button
                    className={
                      activePanelId === 1
                        ? "p-1 rounded-t transition-all duration-300 bg-blue-500 text-white"
                        : "p-1 rounded-t transition-all duration-300"
                    }
                    id="bookings"
                    onClick={() => setActivePanelId(1)}
                  >
                    Bookings
                  </button>
                </div>
              </nav>
              {/* bookings */}
              <div className="main flex flex-wrap">
                {activePanelId === 1 && <MyBookings />}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <p className="text-red-700">Login First</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
