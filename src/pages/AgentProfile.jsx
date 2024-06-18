import { useEffect, useState } from "react";
import { auth, db, storage } from "../firebase";
import { getDocs, query, where, collection, updateDoc, doc } from "firebase/firestore";
import MyBookings from "./user/MyBookings";
import defaultProfileImg from "../assets/images/profile.png";
import { FaInbox, FaLocationArrow, FaPhone } from "react-icons/fa";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
const usersCollectionRef = collection(db, "appAgent");
import { useDispatch, useSelector } from "react-redux";
import {
  logOutStart,
  logOutSuccess,
  logOutFailure
} from "../redux/user/userSlice";
const AgentProfile = () => {
  const [submitLoading, setSubmitLoading] = useState(false);
const [codeError, setCodeError] = useState(null);
  const dispatch = useDispatch();
  const { profileCurrentUser, loading, error } = useSelector((state) => state.user);
  const [currentUser, setCurrentUser] = useState(null);
  const [displayData, setDisplayData] = useState({
    username: '',
    email: '',
    phone: '',
    image: '',
    agencyName: '',
    agencyAddress: ''
  });
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    image: '',
    agencyName: '',
    agencyAddress: ''
  });

  const [activeTab, setActiveTab] = useState('bookings');
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const getUser = async () => {
    try {
      const q = query(usersCollectionRef, where("userId", "==", auth?.currentUser?.uid));

      const querySnapshot = await getDocs(q);
  
      const filteredData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
  
      // Since we expect only one document, find the user (or handle if not found)
      const user = filteredData[0];
      setCurrentUser(user);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (currentUser !== null) {
      setDisplayData({
        username: currentUser.username,
        email: currentUser.email,
        phone: currentUser.phone,
        image: currentUser.image,
        agencyName: currentUser.agencyName,
    agencyAddress:  currentUser.agencyAddress
      });
      setFormData({
        username: currentUser.username,
        email: currentUser.email,
        phone: currentUser.phone,
        image: currentUser.image,
        agencyName: currentUser.agencyName,
    agencyAddress:  currentUser.agencyAddress
      });
    }
  }, [currentUser]);

  const uploadFile = () => {
    return new Promise((resolve, reject) => {
      if (!imageUpload) {
        resolve(null);
        return;
      }
  
      const imageRef = ref(storage, `images/${imageUpload.name + Math.random()}`);
      uploadBytes(imageRef, imageUpload)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              console.log(url);
              resolve(url);
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const updateProfile = async (e) => {    
    setCodeError('');
    e.preventDefault();
    setSubmitLoading(true);
    try {
     const url =await uploadFile();     
     setImageUrl(url);
      const userDoc = doc(db, "appAgent", currentUser.id);
      await updateDoc(userDoc, {
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        agencyAddress: formData.agencyAddress,
        agencyName: formData.agencyName,
        image: url || formData.image,
      });
      setSubmitLoading(false);
      setDisplayData(formData);
      if (imageUrl) {
        setDisplayData({ ...formData, image: imageUrl });
      }
    } catch (error) {
      setSubmitLoading(false);
      setCodeError(error.message);
      console.error('Error updating document:', error);
    }
   
  };
const navigate = useNavigate();
  const logout = async () => {
    try {
      localStorage.setItem("isUserLoggedIn", false);
      dispatch(logOutStart());
 await signOut(auth);
      dispatch(logOutSuccess());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white p-6 shadow-md">
        <div className="text-center">
          <img
            src={displayData.image || defaultProfileImg}
            alt="avatar"
            className="mx-auto rounded-full w-24 h-24 lg:w-32 lg:h-32"
          />
          <h2 className="mt-4 text-xl font-semibold">{displayData.username}</h2>
          <p className="text-blue-500">CUSTOMER</p>
          <div className="mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => logout()}
            >
              Sign Out
            </button>
            <button
              className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded"
              onClick={() => setActiveTab('bookings')}
            >
              My Bookings
            </button>
          </div>
        </div>
        <div className="mt-8">
          <ul>
            <li
              className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center gap-4 text-lg"
            >
              <FaInbox />
              
             <p className="break-words" style={{width: "80%"}}>{displayData.email}</p> 
            </li>
            <li
              className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center gap-4 text-lg"
            >
              <FaPhone />
              <p className="break-words" style={{width: "80%"}}>{displayData.phone}</p> 
            </li>
            <li
              className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center gap-4 text-lg"
            >
              <FaLocationArrow />
              <p className="break-words" style={{width: "80%"}}>{displayData.agencyAddress}</p> 
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 p-6">
        <div className="bg-white p-6 shadow-md rounded">
          <h2 className="text-2xl font-semibold mb-4">Your Info</h2>
          <div className="flex space-x-4 mb-4">
          <button
              onClick={() => setActiveTab('bookings')}
              className={`px-4 py-2 rounded ${activeTab === 'bookings' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Bookings
            </button>
            <button
              onClick={() => setActiveTab('update')}
              className={`px-4 py-2 rounded ${activeTab === 'update' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Update Profile
            </button>
           
          </div>
          {activeTab === 'update' && (
            <form onSubmit={updateProfile}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  type="text"
                  id="username"
                  value={formData.username}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email address</label>
                <input
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  id="email"
                  type="email"
                  value={formData.email}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone number</label>
                <input
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  type="text"
                  id="phone"
                  value={formData.phone}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Agency Name</label>
                <input
                  onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                  id="address"
                  type="text"
                  value={formData.agencyName}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Agency Address</label>
                <input
                  onChange={(e) => setFormData({ ...formData, agencyAddress: e.target.value })}
                  id="address"
                  type="text"
                  value={formData.agencyAddress}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Profile Image</label>
                <input
                  accept=".png, .jpg, .jpeg, .gif, image/png, image/jpeg, image/gif"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                  type="file"
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
               {submitLoading ? "Loading..." : "Submit"} 
              </button>
              {codeError && <p className="text-sm text-red-600">{codeError}</p>}
            </form>
          )}
          {activeTab === 'bookings' && <MyBookings />}
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
