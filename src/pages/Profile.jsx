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
import { getDocs, collection } from "firebase/firestore";
import {
  signOut,
} from "firebase/auth";
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [currentUser, setCurrentUser] = useState({});
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
      const user = filteredData.find((x) => x.userId === auth?.currentUser?.uid);
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
  }, [currentUser]);

  const handleProfilePhoto = (photo) => {
    try {
      dispatch(updateUserStart());
      const storage = getStorage(app);
      const photoname = new Date().getTime() + photo.name.replace(/\s/g, "");
      const storageRef = ref(storage, `profile-photos/${photoname}`);
      const uploadTask = uploadBytesResumable(storageRef, photo);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
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
      const data = await  signOut(auth);
      if (data) {
        dispatch(logOutFailure("Logout successful"));
        return;
      }
      dispatch(logOutSuccess());
      navigate("/login");
      // alert(data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    const CONFIRM = confirm(
      "Are you sure? The account will be permanently deleted!"
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
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full p-6 bg-gray-100">
      {currentUser ? (
        <>
          <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <img
                className="h-32 w-32 rounded-full border-4 border-white"
                src={formData.avatar || "/images/profile.png"}
                alt="Profile"
              />
              <h3 className="mt-4 text-xl font-bold">{currentUser.username}</h3>
              <p className="text-gray-600">{currentUser.email}</p>
              <p className="text-gray-600">{currentUser.address}</p>
              <p className="text-gray-600">{currentUser.phone}</p>
              <button
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
                onClick={handleLogout}
              >
                Log Out
              </button>
              <input
                type="file"
                ref={fileRef}
                className="hidden"
                onChange={(e) => handleProfilePhoto(e.target.files[0])}
              />
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={() => fileRef.current.click()}
              >
                Change Profile Photo
              </button>
            </div>
          </div>
          <div className="w-full lg:w-2/3 mt-6 lg:mt-0 lg:ml-6 bg-white rounded-lg shadow-md p-6">
            <nav className="mb-4">
              <button
                className={`mr-4 pb-2 ${activePanelId === 1 ? "border-b-4 border-blue-500" : ""
                  }`}
                onClick={() => setActivePanelId(1)}
              >
                My Bookings
              </button>
              <button
                className={`mr-4 pb-2 ${activePanelId === 2 ? "border-b-4 border-blue-500" : ""
                  }`}
                onClick={() => setActivePanelId(2)}
              >
                Update Profile
              </button>
              <button
                className={`pb-2 ${activePanelId === 3 ? "border-b-4 border-blue-500" : ""
                  }`}
                onClick={() => setActivePanelId(3)}
              >
                My History
              </button>
            </nav>
            <div>
              {activePanelId === 1 && <MyBookings />}
              {activePanelId === 2 && <UpdateProfile />}
              {activePanelId === 3 && <MyHistory />}
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-red-700">Please log in first</p>
          <Link to="/login" className="text-blue-500 underline">
            Go to Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
