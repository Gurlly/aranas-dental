"use client";

import { React, useState } from "react";
import { useRouter } from "next/navigation";

export const BookForm = () => {
  const router = useRouter();
  const [patientType, setPatientType] = useState(true); // true = new patient; false = old patient
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    address: "",
    appointmentSchedule: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          ? console.log("Your record and appointment is added!")
          : console.log("Your appointment is added");
        router.push("/");
      } else {
        patientType
          ? alert("Error adding your record and appointment")
          : alert("Error adding your appointment");
      }
    } catch (err) {
      alert(`Your appointment cannot be added: ${err.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-4/6 xl:w-3/6 shadow-lg shadow-gray-300 px-5 py-8 bg-neutral-800 rounded-lg"
    >
      <div className="flex gap-x-6 mb-8">
        <div className="flex ">
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
        <section className="min-w-full mb-3 flex gap-x-5">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="block text-info font-semibold text-sm lg:text-base mb-2"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary capitalize"
              placeholder="Juan"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="block text-info font-semibold text-sm lg:text-base mb-2"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary capitalize"
              placeholder="Dela Cruz"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </section>
        <section className="min-w-full mb-3">
          <label
            htmlFor="dateOfBirth"
            className="block text-info font-semibold text-sm lg:text-base mb-2"
          >
            Birthdate:
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
            required
          />
        </section>
        {patientType === true ? (
          <>
            <section className="min-w-full mb-3 flex gap-x-5">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-info font-semibold text-sm lg:text-base mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
                  placeholder="JuanDelaCruz@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  minLength={10}
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-info font-semibold text-sm lg:text-base mb-2"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
                  placeholder="+639774571232"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={13}
                  minLength={13}
                  required
                />
              </div>
            </section>
            <section className="min-w-full mb-3">
              <label
                htmlFor="address"
                className="block text-info font-semibold text-sm lg:text-base mb-2"
              >
                Full Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="py-3 px-4 w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary capitalize"
                minLength={10}
                value={formData.address}
                onChange={handleChange}
                placeholder="629 P. Rosales St. Sta Ana, Pateros, Metro Manila"
                required
              />
            </section>
          </>
        ) : (
          <div></div>
        )}
        <section className="min-w-full">
          <label
            htmlFor="appointmentSchedule"
            className="block text-info font-semibold text-sm lg:text-base mb-2"
          >
            Appointment Date:
          </label>
          <input
            type="date"
            id="appointmentSchedule"
            name="appointmentSchedule"
            value={formData.appointmentSchedule}
            onChange={handleChange}
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
            required
          />
        </section>
        <button
          type="submit"
          className="min-w-36 w-2/5 border border-zinc-50 px-5 py-2 mt-9 bg-emerald-700 hover:bg-emerald-600 rounded-lg text-info font-semibold text-sm lg:text-base transition-colors "
        >
          Submit
        </button>
      </div>
    </form>
  );
};
