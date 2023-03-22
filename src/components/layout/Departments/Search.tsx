import React, { useState } from 'react';

type DepartmentsCardProps = {
  title: string;
  image: string;
  textTitle: string;
  text: string;
  actionButton: string;
  actionButtonUrl: string;
  name: string;
  role: string;
  location: string;
  socialLinks: { name: string; url: string }[];
};

type SearchProps = {
  data: DepartmentsCardProps[];
};

export default function Search({ data }: SearchProps) {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setQuery(query);

    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filteredData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can use the filtered data here for any further processing
  };

  return (
    <section className="font-poppins bg-[#E4FFEE] text-2xl md:text-4xl text-[#39B755] shadow-xl w-full text-center p-5">
      <h1 className="p-10">Search our various Departments and their functions</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input hover:input-error w-full md:w-3/5 rounded bg-[#fff] border-0 p-3"
          type="text"
          placeholder="Enter text here"
          value={query}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-[#39B755] text-[#fff] text-base rounded-full p-3 w-full md:w-36 mt-2 md:ml-[-40px]"
        >
          Search
        </button>
      </form>
      <div>
        {filteredData.map((item) => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// import React from 'react';

// export default function Search() {
//   return (
//     <section className="font-poppins bg-[#E4FFEE] text-2xl md:text-4xl text-[#39B755] shadow-xl  w-full text-center p-5">
//       <h1 className="p-10">Search our various Departments and their functions</h1>
//       <form action="">
//         <input
//           className="input hover:input-error w-full md:w-3/5 rounded bg-[#fff] border-0 p-3"
//           type="text"
//           placeholder="Enter text here"
//         />
//         <button
//           type="submit"
//           className="bg-[#39B755] text-[#fff] text-base rounded-full p-3 w-full md:w-36 mt-2  md:ml-[-40px]"
//         >
//           Search
//         </button>
//       </form>
//     </section>
//   );
// }
