"use client";

import { React, useState } from "react";
import { useRouter } from "next/navigation";

export const BookForm = () => {
  const router = useRouter();
  const [patientType, setPatientType] = useState(true); // true = new patient; false = old patient
  const [formData, setFormData] = useState({
    patientName: {
      firstName: "",
      lastName: "",
      middleInitial: "",
    },
    age: "",
    birthdate: "",
    phone: "",
    address: {
      street: "",
      city: "",
      province: "",
      zip: "",
    },
    schedule: "",
  });

  const today = new Date().toISOString().split('T')[0];  
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth()+2);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const [section, key] = name.split(".");

    if (key) {
      setFormData((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [key]: value.toUpperCase(),
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/patients", {
        method: patientType ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        patientType
          ? console.log("A record has been added!")
          : console.log("Appointment Schedule is updated");
        router.push("/");
      } else {
        patientType
          ? alert("Error adding the record")
          : alert("Error updating the appointment");
      }
    } catch (err) {
      alert(`Error in booking the appointment: ${err.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-4/6 xl:w-3/6 shadow-lg shadow-gray-300 px-5 py-8 bg-neutral-800 rounded-lg"
    >
      {/** Buttons */}
      <div className="flex gap-x-6 mb-8">
        <div className="flex">
          <input
            type="radio"
            name="patient-status"
            className="shrink-0 mt-0.5 rounded-full text-tertiary focus:ring-primary border-neutral-400 cursor-pointer"
            id="new-patient"
            checked={patientType}
            onChange={() => setPatientType(!patientType)}
            required
          />
          <label
            htmlFor="new-patient"
            className="text-sm lg:text-base text-info ms-3 font-semibold cursor-pointer"
          >
            New Patient
          </label>
        </div>
        <div className="flex">
          <input
            type="radio"
            name="patient-status"
            className="shrink-0 mt-0.5 rounded-full text-tertiary focus:ring-primary border-neutral-400 cursor-pointer"
            id="old-patient"
            checked={!patientType}
            onChange={() => setPatientType(!patientType)}
            required
          />
          <label
            htmlFor="old-patient"
            className="text-sm lg:text-base text-info ms-3 font-semibold cursor-pointer"
          >
            Old Patient
          </label>
        </div>
      </div>

      <div>
        {/** Name Forms */}
        <section className="min-w-full mb-3 grid grid-cols-5 gap-x-5">
          <div className="col-span-2">
            <label
              htmlFor="firstName"
              className="block text-info font-semibold text-sm lg:text-base mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="patientName.firstName"
              className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
              placeholder="JUAN"
              value={formData.patientName.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="lastName"
              className="block text-info font-semibold text-sm lg:text-base mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="patientName.lastName"
              className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
              placeholder="DELA CRUZ"
              value={formData.patientName.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="middleInitial"
              className="block text-info font-semibold text-sm lg:text-base mb-2"
            >
              M.I.
            </label>
            <input
              type="text"
              id="middleInitial"
              name="patientName.middleInitial"
              className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
              placeholder="A"
              value={formData.patientName.middleInitial}
              onChange={handleChange}
              minLength="1"
              maxLength="1"
              required
            />
          </div>
        </section>

        {/** Age and Birthdate Forms */}
        <section className="min-w-full mb-3 grid grid-cols-3 gap-x-5">
          {patientType ? (
            <div className="col-span-1">
              <label
                htmlFor="age"
                className="block text-info font-semibold text-sm lg:text-base mb-2"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
                placeholder="15"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
          ) : null}
          <div className={`${patientType ? "col-span-2" : "col-span-3"}`}>
            <label
              htmlFor="birthdate"
              className="block text-info font-semibold text-sm lg:text-base mb-2"
            >
              Birthdate
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
              required
            />
          </div>
        </section>

        {patientType === true ? (
          <>
            {/** Phone */}
            <section className="min-w-full mb-3 flex">
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-info font-semibold text-sm lg:text-base mb-2"
                >
                  Cellphone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
                  placeholder="639774831232"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={12}
                  minLength={12}
                  required
                />
              </div>
            </section>

            {/** Address */}
            <section className="min-w-full mb-3 grid grid-rows-3 gap-y-3">
              {/** Street */}
              <div className="w-full">
                <label
                  htmlFor="street"
                  className="block text-info font-semibold text-sm lg:text-base mb-2"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="street"
                  name="address.street"
                  className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
                  placeholder="123 RANDOM STREET"
                  value={formData.address.street}
                  onChange={handleChange}
                  required
                />
              </div>

              {/** City */}
              <div className="w-full">
                <label
                  htmlFor="city"
                  className="block text-info font-semibold text-sm lg:text-base mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="address.city"
                  className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
                  placeholder="MAKATI"
                  value={formData.address.city}
                  onChange={handleChange}
                  required
                />
              </div>

              {/** Province and ZIP */}
              <div className="grid grid-cols-2 gap-x-5">
                <div className="w-full">
                  <label
                    htmlFor="province"
                    className="block text-info font-semibold text-sm lg:text-base mb-2"
                  >
                    Province
                  </label>
                  <input
                    type="text"
                    id="province"
                    name="address.province"
                    className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
                    placeholder="MAKATI"
                    value={formData.address.province}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="zip"
                    className="block text-info font-semibold text-sm lg:text-base mb-2"
                  >
                    Postal Code (ZIP)
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="address.zip"
                    className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
                    placeholder="1000"
                    value={formData.address.zip}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </section>
          </>
        ) : (
          <div></div>
        )}

        <section className="min-w-full">
          <label
            htmlFor="schedule"
            className="block text-info font-semibold text-sm lg:text-base mb-2"
          >
            Appointment Date:
          </label>
          <input
            type="date"
            id="schedule"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
            min={today}
            max={maxDate.toISOString().split('T')[0]}
            required
          />
        </section>
        
        <button
          type="submit"
          className="min-w-36 w-2/5 border border-zinc-50 px-5 py-2 mt-9 bg-emerald-700 hover:bg-emerald-600 rounded-lg text-info font-semibold text-sm lg:text-base transition-colors "
        >
          Book
        </button>

      </div>
    </form>
  );
};
