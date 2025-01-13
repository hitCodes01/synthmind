import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Sidebar from '../../Sidebar';
import axios from 'axios';

const ProfileSettings = () => {
  const [activeSection, setActiveSection] = useState('personal-info');
  const [successMessage, setSuccessMessage] = useState('');

  // User data
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
  });

  // Password change states
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isUsernameEdited, setIsUsernameEdited] = useState(false);
  const [isEmailEdited, setIsEmailEdited] = useState(false);


  // Handle user data input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    if (name === 'username') {
      setIsUsernameEdited(true);
    } else if (name === 'email') {
      setIsEmailEdited(true);
    }

    // Clear success message when user types
    if (successMessage) {
      setSuccessMessage('');
    }
  };

  // Handle password input changes
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    if (name === 'currentPassword') setCurrentPassword(value);
    if (name === 'newPassword') setNewPassword(value);
    if (name === 'confirmNewPassword') setConfirmNewPassword(value);
  };

  // Change active section
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setSuccessMessage(''); // Clear messages when switching sections
    setPasswordError('');
    setCurrentPassword(''); // Clear password states
    setNewPassword('');
    setConfirmNewPassword('');
  };

  // Save changes in personal info (assuming a separate API is being used for this)
  

const handleSaveChanges = async () => {
  try {
    // Send the updated name and email along with the authentication token
    const response = await axios.put('https://backend-chatbot-ai.onrender.com/api/users/profile/update-profile', {
      username: userDetails.username, // Access username from the state object
      email: userDetails.email,         // Assuming 'email' is a state variable
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Passing the token for authentication
      },
    });

    // Check the response status for success
    if (response.status === 200) {
      setSuccessMessage('Profile updated successfully!');
      // Optionally, reset any other fields if needed
    
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  }
  
  } catch (error) {
    console.error('Error updating profile:', error);
  }
};


  // Update password logic with PUT request to '/profile/change-password'
  const handlePasswordUpdate = async () => {
    if (newPassword.length < 6) {
      setPasswordError('Password should be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }

    try {
      const response = await axios.put('https://backend-chatbot-ai.onrender.com/api/users/profile/change-password', {
          currentPassword,
          newPassword,
      }, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`, // Passing the token for authentication
          },
      });
      
      // Check the response status for success
      if (response.status === 200) {
          setSuccessMessage('Password changed successfully!');
          setCurrentPassword('');
          setNewPassword('');
          setConfirmNewPassword('');
      }
  } catch (error) {
      // Handle the error properly
      if (error.response) {
          // The request was made and the server responded with a status code
          setPasswordError(error.response.data.message || 'Failed to change password.');
      } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error changing password:', error);
          setPasswordError('Failed to change password. Please check your current password.');
      }
  }
};
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100 overflow-y-auto lg:pl-80 sm:pt-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-500 text-center">Profile Settings</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Sections */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
            onClick={() => handleSectionChange('personal-info')}>
            <div className="flex items-center justify-between text-blue-500">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <FaArrowRight className="text-blue-600" />
            </div>
            <p className="text-gray-700">Edit your profile details like name and email.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
            onClick={() => handleSectionChange('notification-settings')}>
            <div className="flex items-center justify-between text-blue-500">
              <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
              <FaArrowRight className="text-blue-600" />
            </div>
            <p className="text-gray-700">Manage your notification preferences for emails, SMS, and in-app alerts.</p>
          </div>
          {/* Security Settings */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
            onClick={() => handleSectionChange('security-settings')}
          >
            <div className="flex items-center justify-between text-blue-500">
              <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
              <FaArrowRight className="text-blue-600" />
            </div>
            <p className="text-gray-700">Enhance security by managing two-factor authentication and reviewing login activity.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
            onClick={() => handleSectionChange('change-password')}>
            <div className="flex items-center justify-between text-blue-500">
              <h2 className="text-xl font-semibold mb-4">Change Password</h2>
              <FaArrowRight className="text-blue-600" />
            </div>
            <p className="text-gray-700">Update your password securely to keep your account safe.</p>
          </div>
        </div>

        {/* Dynamic Section Content */}
        <div className="mt-8">
      {activeSection === 'personal-info' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="username"
              value={userDetails.username}
              onChange={handleInputChange}
              className={`w-full p-2 border border-gray-300 rounded ${isUsernameEdited ? 'bg-gray-400' : 'bg-gray-50'} text-white`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              className={`w-full p-2 border border-gray-300 rounded ${isEmailEdited ? 'bg-gray-400' : 'bg-gray-50'} text-white`}
            />
          </div>

          <button onClick={handleSaveChanges} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Save Changes
          </button>
          {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        </div>
      )}
    

          {activeSection === 'change-password' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmNewPassword"
                  value={confirmNewPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-blue-500"
                />
              </div>
              <button onClick={handlePasswordUpdate} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Change Password
              </button>
              {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
              {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
