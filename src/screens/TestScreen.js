import { useState } from "react";

function ContactForm() {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    // selectedOption: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleOptionChange = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
  };

  return (
    <div class="flex items-center justify-center w-screen h-screen sm:h-4/5 bg-gray-100 text-gray-800 p-8 sm:pt-0 overflow-hidden">
      <div class="p-4 sm:p-8 rounded border border-gray-200 bg-white mt-1 shadow-lg">
        <h1 class="font-medium text-3xl">Add Menu Items</h1>
        <p class="text-gray-600 mt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          dolorem vel cupiditate laudantium dicta.
        </p>

        <form>
          <div class="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <label
                for="name"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Item Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter Dish Name"
              />
            </div>

            <div>
              <label
                for="email"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Item Ingredients
              </label>
              <input
                type="text"
                name="email"
                id="email"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter Dish Ingredients"
              />
            </div>

            <div>
              <label
                for="job"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter price"
              />
            </div>
            <div>
              <label class="block text-sm font-medium">Image</label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span class="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-start">
            <label className="mr-4">Select an option:</label>
            <div className="flex flex-wrap">
              <label
                htmlFor="option1"
                className="inline-flex items-center mr-4 mb-2"
              >
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                  className="form-radio h-5 w-5 text-gray-600"
                />
                <span className="ml-2 text-gray-700">Option 1</span>
              </label>
              <label
                htmlFor="option2"
                className="inline-flex items-center mr-4 mb-2"
              >
                <input
                  type="radio"
                  id="option2"
                  name="options"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                  className="form-radio h-5 w-5 text-gray-600"
                />
                <span className="ml-2 text-gray-700">Option 2</span>
              </label>
              <label
                htmlFor="option3"
                className="inline-flex items-center mr-4 mb-2"
              >
                <input
                  type="radio"
                  id="option3"
                  name="options"
                  value="option3"
                  checked={selectedOption === "option3"}
                  onChange={handleOptionChange}
                  className="form-radio h-5 w-5 text-gray-600"
                />
                <span className="ml-2 text-gray-700">Option 3</span>
              </label>
              <label
                htmlFor="option4"
                className="inline-flex items-center mr-4 mb-2"
              >
                <input
                  type="radio"
                  id="option4"
                  name="options"
                  value="option4"
                  checked={selectedOption === "option4"}
                  onChange={handleOptionChange}
                  className="form-radio h-5 w-5 text-gray-600"
                />
                <span className="ml-2 text-gray-700">Option 3</span>
              </label>
              <label
                htmlFor="option5"
                className="inline-flex items-center mr-4 mb-2"
              >
                <input
                  type="radio"
                  id="5"
                  name="options"
                  value="5"
                  checked={selectedOption === "5"}
                  onChange={handleOptionChange}
                  className="form-radio h-5 w-5 text-gray-600"
                />
                <span className="ml-2 text-gray-700">Option 3</span>
              </label>
              <label
                htmlFor="option6"
                className="inline-flex items-center mr-4 mb-2"
              >
                <input
                  type="radio"
                  id="option6"
                  name="options"
                  value="option6"
                  checked={selectedOption === "option6"}
                  onChange={handleOptionChange}
                  className="form-radio h-5 w-5 text-gray-600"
                />
                <span className="ml-2 text-gray-700">Option 3</span>
              </label>
            </div>
          </div>

          <div class="space-x-4 mt-8">
            <button
              type="submit"
              class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              ADD ITEM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
