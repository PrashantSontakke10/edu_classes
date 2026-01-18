import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdmissionForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    class: "",
    mathematics: false,
    science: false,
    birthDate: "",
    age: "",
    mobile: "",
    alternate: "",
    school: "",
    gender: "",
    father: "",
    mother: "",
    occupation: "",
    source: "",
    futurePlan: "",
    acknowledgement: false,
    photo: null,
    photoPreview: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm((prev) => ({
      ...prev,
      photo: file,
      photoPreview: URL.createObjectURL(file),
    }));
  };

  const handleConfirm = () => {
    if (!form.acknowledgement) {
      alert("Please accept the acknowledgement to continue.");
      return;
    }

    // Save temporarily (photo file excluded from JSON)
    const { photoPreview, photo, ...rest } = form;
    localStorage.setItem("admissionForm", JSON.stringify(rest));

    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white border border-blue-300 p-8 text-gray-900">

        {/* Header */}
        <h1 className="text-center font-bold text-lg text-blue-900 uppercase">
          AIM The Institute of Self Development, Akot
        </h1>

        <div className="flex justify-center my-6">
          <div className="border-2 border-blue-900 px-10 py-2 rounded-full font-bold text-blue-900">
            ADMISSION FORM
          </div>
        </div>

        {/* Photo Upload */}
        <div className="flex justify-end mb-6">
          <label className="cursor-pointer">
            <div className="w-28 h-32 border-2 border-dashed border-blue-900 flex items-center justify-center text-sm text-blue-900 overflow-hidden rounded">
              {form.photoPreview ? (
                <img
                  src={form.photoPreview}
                  alt="Student Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-center px-2">
                  Upload Student Photo
                </span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Form */}
        <div className="space-y-4 text-sm">

          <InputLine label="1) Name of Student" name="name" value={form.name} onChange={handleChange} />
          <InputLine label="2) Address" name="address" value={form.address} onChange={handleChange} />

          {/* Class */}
          <div className="flex flex-wrap gap-6 items-center">
            <span className="font-semibold">3) Class :</span>
            {["8th", "9th", "10th"].map((cls) => (
              <label key={cls} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="class"
                  value={cls}
                  checked={form.class === cls}
                  onChange={handleChange}
                />
                {cls}
              </label>
            ))}

            <label className="flex items-center gap-1 ml-6">
              <input type="checkbox" name="mathematics" checked={form.mathematics} onChange={handleChange} />
              Mathematics
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" name="science" checked={form.science} onChange={handleChange} />
              Science
            </label>
          </div>

          {/* Birth / Age */}
          <div className="flex gap-6">
            <InputLine label="4) Birth Date" name="birthDate" value={form.birthDate} onChange={handleChange} />
            <InputLine label="Age" name="age" value={form.age} onChange={handleChange} />
          </div>

          {/* Mobile */}
          <div className="flex gap-6">
            <InputLine label="5) Mobile No" name="mobile" value={form.mobile} onChange={handleChange} />
            <InputLine label="Alternate No" name="alternate" value={form.alternate} onChange={handleChange} />
          </div>

          <InputLine label="6) School Name" name="school" value={form.school} onChange={handleChange} />

          {/* Gender */}
          <div className="flex gap-6 items-center">
            <span className="font-semibold">7) Gender :</span>
            {["Male", "Female"].map((g) => (
              <label key={g} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={form.gender === g}
                  onChange={handleChange}
                />
                {g}
              </label>
            ))}
          </div>

          {/* Parents */}
          <div className="flex gap-6">
            <InputLine label="8) Father Name" name="father" value={form.father} onChange={handleChange} />
            <InputLine label="Mother Name" name="mother" value={form.mother} onChange={handleChange} />
          </div>

          <InputLine
            label="9) Father’s Occupation"
            name="occupation"
            value={form.occupation}
            onChange={handleChange}
          />

          {/* Source */}
          <div>
            <p className="font-semibold">
              10) How did you know about AIM Institute?
            </p>
            <div className="flex gap-6 ml-4 mt-2">
              {["Newspaper", "Friend"].map((s) => (
                <label key={s} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="source"
                    value={s}
                    checked={form.source === s}
                    onChange={handleChange}
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          {/* Future */}
          <div>
            <p className="font-semibold">11) Future plan after education</p>
            <textarea
              name="futurePlan"
              value={form.futurePlan}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded-md p-2 mt-2 focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          {/* Acknowledgement */}
          <label className="flex items-start gap-2 mt-4">
            <input
              type="checkbox"
              name="acknowledgement"
              checked={form.acknowledgement}
              onChange={handleChange}
            />
            <span className="text-sm">
              I confirm that the above information is correct and I agree to the
              terms & conditions of AIM Institute.
            </span>
          </label>

          <p className="font-semibold mt-4">
            ➤ Fees paid once will not be returned.
          </p>

          <p className="font-semibold">
            Contact No : 8482954530
          </p>
        </div>

        {/* Confirm Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleConfirm}
            className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
          >
            Confirm Admission & Proceed to Payment
          </button>
        </div>

      </div>
    </div>
  );
};

/* Reusable Input Line */
const InputLine = ({ label, name, value, onChange }) => (
  <div className="flex gap-2 items-center flex-1">
    <span className="font-semibold whitespace-nowrap">{label} :</span>
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="flex-1 border-b border-blue-400 focus:outline-none focus:border-blue-900"
    />
  </div>
);

export default AdmissionForm;
