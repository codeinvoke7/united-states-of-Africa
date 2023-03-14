import React, { useState } from 'react';

interface RadioProps {
  options: { label: string; value: string }[];
  name: string;
}

const Radio: React.FC<RadioProps> = ({ options, name }) => {
  const [selectedOption, setSelectedOptions] = useState(options[0].value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptions(e.target.value);
  };

  return (
    <div className="radio-group">
      {options.map((option) => (
        <label key={option.value} className="opacity-95">
          <input
            type="radio"
            name={name}
            className="radio text-primary bg-transparent border-3 border-primary focus:ring-4 ring-primary w-5 h-5 ml-4 mb-2 focus:ring-primary focus:ring-offset-primary-200 focus:outline-none checked:bg-primary checked:ring-2 checked:ring-offset-4 checked:border-4"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default function RadioButton() {
  const options = [
    { label: '', value: 'options1' },
    { label: '', value: 'options2' },
    { label: '', value: 'options3' },
    { label: '', value: 'options4' }
  ];

  return (
    <div>
      <Radio name="myRadio" options={options} />
    </div>
  );
}

// const Radio = ({ name, id, value, onChange, checked }) => {
//   return (
//     <div>
//       <label htmlFor={id} className="opacity-95">
//         <input
//           className="radio text-primary bg-transparent border-2 border-primary focus:ring-2 ring-primary ring-1 w-5 h-5 ml-4 mb-2 focus:ring-primary focus:ring-offset-primary-200 focus:outline-none checked:bg-primary checked:border-none"
//           type="radio"
//           name={name}
//           id={id}
//           value={value}
//           onChange={onChange}
//           checked={checked}
//         />
//       </label>
//     </div>
//   );
// };

// export default function RadioButton() {
//   const [theme, setTheme] = useState({ dark: false, light: false });
//   const onChangeTheme = (e) => {
//     const { name } = e.target;
//     if (name === 'light') {
//       setTheme({ dark: false, light: true });
//     }
//     if (name === 'dark') {
//       setTheme({ dark: true, light: false });
//     }
//   };
//   return (
//     <div className="flex flex-row">
//       <Radio name="dark" id="dark" value="Dark" onChange={onChangeTheme} checked={theme.dark} />
//       <Radio name="light" id="light" value="Light" onChange={onChangeTheme} checked={theme.light} />
//       <Radio name="light" id="light" value="Light" onChange={onChangeTheme} checked={theme.light} />
//       <Radio name="light" id="light" value="Light" onChange={onChangeTheme} checked={theme.light} />
//     </div>
//   );
// }
