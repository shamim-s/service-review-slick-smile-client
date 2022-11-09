import React from "react";

const AddService = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const img = form.imglink.value;
        const name = form.sname.value;
        const details = form.sdetails.value;
        const rating = form.rating.value;
        const price = form.price.value;

        const newService = {
            img: img,
            name: name,
            details: details,
            rating: rating,
            price: price
        }
        console.log(newService);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50 bg-base-300 mt-10 mb-10">
      <form
      onSubmit={handleSubmit}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
         <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Provide Inormation</p>
            <p className="text-xs">
              Please provide correct information to add a new service.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="sname" className="text-sm">
                Service name
              </label>
              <input
                id="sname"
                type="sname"
                name="sname"
                placeholder="Service name"
                className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
            <label 
            for="bio" 
            className="text-sm">Service Details</label>
            <textarea 
            id="sdetails" 
            placeholder="Service details"
            name="sdetails"
            className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:border-gray-700 dark:text-gray-900"></textarea>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="imglink" className="text-sm">
                Service image link
              </label>
              <input
                id="imglink"
                type="imglink"
                name="imglink"
                placeholder="Image Link"
                className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label for="price" className="text-sm">
                Service Price
              </label>
              <input
                id="price"
                type="price"
                name="price"
                placeholder="service Price"
                className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="rating" className="text-sm">
                Service Rating
              </label>
              <input
                id="rating"
                type="rating"
                name="rating"
                placeholder="Service rating"
                className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
          </div>
          <button type="submit" className="btn">Submit</button>
      </form>
    </section>
  );
};

export default AddService;
