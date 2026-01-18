import React from "react";

const Payment = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white border border-blue-300 rounded-lg shadow-md p-8">

        {/* Header */}
        <h1 className="text-center text-2xl font-bold text-blue-900 mb-2">
          AIM – Payment Gateway
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Complete your admission by making the payment
        </p>

        {/* Student Summary */}
        <div className="bg-blue-100 border border-blue-300 rounded-md p-4 mb-6">
          <h2 className="font-semibold text-blue-900 mb-3">
            Admission Summary
          </h2>

          <div className="text-sm text-gray-700 space-y-1">
            <p><span className="font-semibold">Student Name:</span> (Auto-filled)</p>
            <p><span className="font-semibold">Class:</span> (8th / 9th / 10th)</p>
            <p><span className="font-semibold">Subjects:</span> Mathematics, Science</p>
          </div>
        </div>

        {/* Fee Breakdown */}
        <div className="border border-gray-300 rounded-md p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-3">
            Fee Details
          </h3>

          <div className="flex justify-between text-sm mb-2">
            <span>Admission Fee</span>
            <span>₹500</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Tuition Fee</span>
            <span>₹4,500</span>
          </div>

          <div className="border-t pt-2 mt-2 flex justify-between font-semibold text-blue-900">
            <span>Total Amount</span>
            <span>₹5,000</span>
          </div>
        </div>

        {/* Razorpay Branding */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-sm text-gray-600">Secured by</span>
          <span className="font-bold text-blue-700">Razorpay</span>
        </div>

        {/* Pay Button */}
        <button
          className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-800 transition"
          onClick={() => alert("Razorpay Checkout will open")}
        >
          Pay ₹5,000 Securely
        </button>

        {/* Footer Info */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By proceeding, you agree to AIM Institute’s terms & conditions.
          Payments are non-refundable.
        </p>

      </div>
    </div>
  );
};

export default Payment;
