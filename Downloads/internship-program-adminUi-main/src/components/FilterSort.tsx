import React from "react";

interface filterType {
  filterList: (
    | { value: string; defaultValue: string }
    | { value: string; defaultValue?: undefined }
  )[];
  filterLogic: React.ChangeEventHandler<HTMLSelectElement>;
}

const FilterSort: React.FC<filterType> = ({ filterList, filterLogic }) => {
  return (
    <div className=" w-1/4 relative top-[-12px]">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Filter Status
      </label>
      <select
        id="order-status"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md"
        onChange={filterLogic}
      >
        {filterList.map((option, idx) => {
          return (
            <option
              key={idx.toString() + option.defaultValue}
              defaultValue={option.defaultValue ? option.defaultValue : ""}
              value={option.value}
            >
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterSort;
