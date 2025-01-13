import React, { useState } from 'react';
import { FaArrowRight, FaCreditCard, FaDownload, FaRegCheckCircle, FaTimes, FaWallet } from 'react-icons/fa';
import Sidebar from '../../Sidebar';
import { Transition } from '@headlessui/react';

const BillingInformation = () => {
  const [activeSection, setActiveSection] = useState('billing-overview');
  const [showModal, setShowModal] = useState(false);
  const [showAutoRenew, setShowAutoRenew] = useState(true);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const toggleAutoRenew = () => {
    setShowAutoRenew(!showAutoRenew);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openWalletModal = () => {
    setShowWalletModal(true);
  };

  const closeWalletModal = () => {
    setShowWalletModal(false);
  };

  // Placeholder data
  const billingData = {
    currentPlan: {
      name: 'Premium Plan',
      details: 'Access to all premium features and unlimited usage.',
    },
    paymentMethod: 'Credit Card ending in 1234',
    invoices: [
      { date: '2024-06-15', amount: '$50.00', id: 'INV123456' },
      { date: '2024-05-15', amount: '$50.00', id: 'INV123455' },
    ],
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-8 bg-gray-100 overflow-y-auto lg:pl-80 sm:pt-10">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-500 text-center">Billing Information</h1>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div 
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
            onClick={() => handleSectionChange('billing-overview')}
          >
            <div className="flex items-center justify-between text-blue-500">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Billing Overview</h2>
              <FaArrowRight className="text-blue-600" />
            </div>
            <p className="text-gray-700">Summary of your billing history and upcoming invoices.</p>
          </div>

          <div 
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
            onClick={() => handleSectionChange('payment-settings')}
          >
            <div className="flex items-center justify-between text-blue-500">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Payment Settings</h2>
              <FaArrowRight className="text-blue-600" />
            </div>
            <p className="text-gray-700">Update payment preferences and manage billing details.</p>
          </div>
        </div>

        <div className="mt-8">
          <Transition
            show={activeSection === 'billing-overview'}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Billing Overview</h2>
              <p className="text-gray-700 mb-4">Summary of your billing history and upcoming invoices.</p>

              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div className="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Current Plan</h3>
                  <p className="text-lg sm:text-xl font-semibold text-blue-700">{billingData.currentPlan.name}</p>
                  <p className="text-gray-600">{billingData.currentPlan.details}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Payment Method</h3>
                  <p className="text-lg sm:text-xl font-semibold text-blue-700">{billingData.paymentMethod}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Invoice History</h3>
                  <p className="text-gray-600 mb-6">View and download past invoices.</p>
                  {billingData.invoices.map((invoice) => (
                    <div key={invoice.id} className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-lg font-semibold text-blue-700">Invoice {invoice.id}</p>
                        <p className="text-gray-600">Date: {invoice.date}</p>
                        <p className="text-gray-600">Amount: {invoice.amount}</p>
                      </div>
                      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center">
                        <FaDownload className="mr-2" />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Transition>

          <Transition
            show={activeSection === 'payment-settings'}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Payment Settings</h2>
              <p className="text-gray-700 mb-4">Update your payment preferences and manage billing details.</p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Add Payment Method</h3>
                  <p className="text-gray-700">Add a new credit card or payment method.</p>
                  <button 
                    onClick={openModal} 
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center mt-2"
                  >
                    <FaCreditCard className="mr-2" />
                    Add Payment Method
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Auto-Renewal</h3>
                  <p className="text-gray-700">Toggle auto-renewal settings for your subscriptions.</p>
                  <div className="flex items-center">
                    <label className="mr-2 text-gray-700">Enable Auto-Renewal</label>
                    <input 
                      type="checkbox" 
                      checked={showAutoRenew} 
                      onChange={toggleAutoRenew} 
                      className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded bg-white"
                    />
                    {showAutoRenew && <FaRegCheckCircle className="ml-2 text-green-500" />}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Connect Digital Wallet</h3>
                  <p className="text-gray-700">Connect your digital wallet for faster payments and easier management.</p>
                  <button 
                    onClick={openWalletModal} 
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center mt-2"
                  >
                    <FaWallet className="mr-2" />
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-lg font-semibold mb-4">Add Payment Method</h3>
              {/* Your payment method form goes here */}
              <button 
                onClick={closeModal} 
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 mt-4"
              >
                <FaTimes className="inline mr-2" />
                Close
              </button>
            </div>
          </div>
        )}

        {showWalletModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-lg font-semibold mb-4">Connect Digital Wallet</h3>
              {/* Your digital wallet connection form goes here */}
              <button 
                onClick={closeWalletModal} 
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 mt-4"
              >
                <FaTimes className="inline mr-2" />
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingInformation;
