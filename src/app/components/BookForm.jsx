"use client";

import {React, useState} from "react";

export const BookForm = () => {
  const [patientType, setPatientType] = useState(true); // true = new patient; false = old patient

  return (
    <form
      action="/"
      method="POST"
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
        <div className="min-w-full mb-3">
          <label
            htmlFor="name"
            className="block text-info font-semibold text-sm lg:text-base mb-2"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="mame"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
            placeholder="Juan Dela Cruz"
            minLength={10}
            required
          />
        </div>
        <div className="min-w-full mb-3">
          <label
            htmlFor="appointmentDate"
            className="block text-info font-semibold text-sm lg:text-base mb-2"
          >
            Birthdate:
          </label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
            required
          />
        </div>
        {patientType ? (
          <div className="min-w-full mb-3">
            <label
              htmlFor="fullAddress"
              className="block text-info font-semibold text-sm lg:text-base mb-2"
            >
              Full Address:
            </label>
            <input
              type="text"
              id="fullAddress"
              name="fullAddress"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm lg:text-base focus:border-primary focus:ring-prborder-primary"
              minLength={20}
              placeholder="Espana Blvd., Sampaloc, Manila, Philippines 1008"
              required
            />
          </div>
        ) : null}
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
