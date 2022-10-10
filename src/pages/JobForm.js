import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const JobForm = () => {
  const dispatch = useDispatch();

  return (
    <form
      className="p-20 pl-60 pr-60 ml-80 mr-80
    "
    >
      <div class="grid gap-6 mb-6 md:grid-cols-1">
        <div>
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Job description
          </label>
          <input
            type="text"
            id="description"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What is your job about?"
            required
          />
        </div>
        <div>
          <label
            for="Budget"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Approximate budget in EUR
          </label>
          <input
            type="integer"
            id="budget"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter an amount"
            required
          />
        </div>
        <div>
          <label
            for="small"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Small select
          </label>
          <select
            id="small"
            class="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a specialisation</option>
            <option value="ME">Mastering Engineer</option>
            <option value="MI">Mixing Engineer</option>
            <option value="FS">Female Singer</option>
            <option value="MS">Male Singer</option>
          </select>
        </div>
        <div>
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
        <div>
          <label
            for="website"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Website URL
          </label>
          <input
            type="url"
            id="website"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="flowbite.com"
            required
          />
        </div>
        <div>
          <label
            for="visitors"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Unique visitors (per month)
          </label>
          <input
            type="number"
            id="visitors"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john.doe@company.com"
          required
        />
      </div>

      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          for="remember"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          I agree with the{" "}
          <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">
            terms and conditions
          </a>
          .
        </label>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};
