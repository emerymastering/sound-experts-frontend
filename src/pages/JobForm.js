import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const JobForm = () => {
  const dispatch = useDispatch();

  return (
    <form
      className="p-20 pt-20 pl-80 pr-80 ml-100 mr-100 bg-[url('https://cdn.smehost.net/sonymusiceu-deprod/wp-content/uploads/2021/05/MicrosoftTeams-image-10-scaled.jpg')] bg-center bg-cover
    "
    >
      <div class="grid gap-6 mb-6 md:grid-cols-1 pl-60 pr-60 bg-black bg-opacity-70 pb-10 ">
        <div>
          <label
            htmlFor="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300  pt-10"
          >
            Job description
          </label>
          <input
            type="text"
            id="description"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding"
            placeholder="What is your job about? (short description)"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Budget"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300 "
          >
            Approximate budget in EUR
          </label>
          <input
            type="integer"
            id="budget"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding"
            placeholder="Enter an amount"
            required
          />
        </div>
        <div>
          <label
            htmlFor="small"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300 "
          >
            Select a specialisation
          </label>
          <select
            id="small"
            class="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding"
            // onChange={(event) => setSelectedSpecialisation(event.target.value)}
          >
            {/* {specialisation.map(item => <option value={item.id}>{item.name}</option>)} */}
            <option selected>I am looking to hire a...</option>
            <option value="ME">Mastering Engineer</option>
            <option value="MI">Mixing Engineer</option>
            <option value="FS">Female Singer</option>
            <option value="MS">Male Singer</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="deadline"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300 "
          >
            Deadline
          </label>
          <input
            type="dateonly"
            id="deadline"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding"
            placeholder="YYYY-MM-DD"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            required
          />
        </div>
        <div>
          <label
            htmlFor="remote"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300 "
          >
            Remote
          </label>
          <input
            type="boolean"
            id="remote"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding"
            placeholder="YES/NO"
            required
          />
        </div>
        {/* <div>
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
        </div> */}
        <div class="mb-6">
          <label
            htmlFor="reference"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300  "
          >
            Reference Song URL
          </label>
          <input
            type="url"
            id="reference"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-clip-content hover:bg-clip-padding"
            placeholder="some url"
            required
          />
        </div>
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
          htmlFor="remember"
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
