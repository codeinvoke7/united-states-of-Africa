import React from 'react';

export default function Search() {
  return (
    <section className="font-poppins bg-[#E4FFEE] text-2xl md:text-4xl text-[#39B755] shadow-xl  w-full text-center p-5">
      <h1 className="p-10">Search our various Departments and their functions</h1>
      <form action="">
        <input
          className="input hover:input-error w-full md:w-3/5 rounded bg-[#fff] border-0 p-3"
          type="text"
          placeholder="Enter text here"
        />
        <button
          type="submit"
          className="bg-[#39B755] text-[#fff] text-base rounded-full p-3 w-full md:w-36 mt-2  md:ml-[-40px]"
        >
          Search
        </button>
      </form>
    </section>
  );
}
