// components/SignUpPage.js
import React from 'react';
import InputField from './InputField';
import { FaEnvelope, FaLock, FaIdBadge } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/login', { state: { message: 'Sign Up Successful! Please Sign in to Continue.' } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">

        <div className="flex justify-center mb-5">
          <img src={logo} alt="Logo" className="w-15 h-15" /> 
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Join EduLearn</h2>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Email</label>
          <InputField
            type="email"
            placeholder="example@mail.com"
            icon={<FaEnvelope />}
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Registration Number</label>
          <InputField
            type="text"
            placeholder="2020/IS/123"
            icon={<FaIdBadge />}
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Password</label>
          <InputField
            type="password"
            placeholder="********"
            icon={<FaLock />}
          />
        </div>

        <div className="mt-6">
          <button
            onClick={handleSignUp}
            className="w-full h-12 bg-[#1677ff] text-white text-lg font-semibold rounded-lg flex items-center justify-center hover:bg-[#1366cc] focus:outline-none shadow-md"
          >
            Sign-up
          </button>
        </div>

        <div className="text-center mt-4">
          <p>
            Already have an account? <span onClick={() => navigate('/login')} className="text-blue-500 cursor-pointer">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
