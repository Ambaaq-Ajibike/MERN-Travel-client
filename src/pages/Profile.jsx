import { useEffect, useState } from "react";
import { auth, db, storage } from "../firebase";
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";
import MyBookings from "./user/MyBookings";
import defaultProfileImg from "../assets/images/profile.png";
import { FaInbox, FaLocationArrow, FaPhone } from "react-icons/fa";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

const usersCollectionRef = collection(db, "appUsers");

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
    phone: '',
    image: ''
  });

  const [activeTab, setActiveTab] = useState('update');

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


const [email, setEmail] = useState("");
const [username, setUserName] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
  useEffect(() => {
    getUser();

    if (currentUser !== null) {
      setFormData({
        username: currentUser.username,
        email: currentUser.email,
        address: currentUser.address,
        phone: currentUser.phone,
        image: currentUser.image
      });
      setUserName(currentUser.username)
      setEmail(currentUser.email)
      setPhone(currentUser.phone)
      setAddress(currentUser.address)
    }
  }, [currentUser]);

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + Math.random()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        
        setImageUrl(url);
      });
    });
  };
  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const userDoc = doc(db, "appUsers", currentUser.id);
      
    await updateDoc(userDoc, {
      username: username,
      email: email,
      phone: phone,
      address: address,
      image: imageUrl,
    });
  } catch (error) {
      console.error('Error updating document:', error);
  }  
    uploadFile()
  };
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white p-6 shadow-md">
        <div className="text-center">
          <img
            src={formData.avatar || defaultProfileImg}
            alt="avatar"
            className="mx-auto rounded-full w-24 h-24 lg:w-32 lg:h-32"
          />
          <h2 className="mt-4 text-xl font-semibold">{formData.username}</h2>
          <p className="text-blue-500">CUSTOMER</p>
          <div className="mt-4">
            <button 
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setActiveTab('update')}
            >
              Profile
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
              {formData.email}
            </li>
            <li 
              className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center gap-4 text-lg"
            >
              <FaPhone />
              {formData.phone}
            </li>
            <li 
              className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center gap-4 text-lg"
            >
              <FaLocationArrow />
              {formData.address}
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
              onClick={() => setActiveTab('update')}
              className={`px-4 py-2 rounded ${activeTab === 'update' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Update
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-4 py-2 rounded ${activeTab === 'bookings' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Bookings
            </button>
          </div>
          {activeTab === 'update' && (
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input 
                onChange={(e) => setUserName(e.target.value)}
                  type="text" 
                  id="username"
                  defaultValue={formData.username} 
                  className="w-full px-4 py-2 border rounded" 
                  placeholder="Name" 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email address</label>
                <input 
                 onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email" 
                  defaultValue={formData.email} 
                  className="w-full px-4 py-2 border rounded" 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone number</label>
                <input 
                 onChange={(e) => setPhone(e.target.value)}
                  type="text" 
                  id="phone"
                  defaultValue={formData.phone} 
                  className="w-full px-4 py-2 border rounded" 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input 
                onChange={(e) => setAddress(e.target.value)}
                  id="address"
                  type="text" 
                  defaultValue={formData.address} 
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
              onClick={updateProfile}
                type="submit" 
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Submit
              </button>
            </form>
          )}
          {activeTab === 'bookings' && <MyBookings />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
