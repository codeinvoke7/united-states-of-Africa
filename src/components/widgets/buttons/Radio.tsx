import React, { useState } from 'react';

const Radio = ({ name, id, value, onChange, checked }) => {
  return (
    <div>
      <label htmlFor={id} className="opacity-95">
        <input
          className="radio text-primary bg-transparent border-2 border-primary focus:ring-2 ring-primary w-5 h-5 ml-4 mb-2 focus:ring-primary focus:ring-offset-primary-200 focus:outline-none checked:bg-primary checked:border-none"
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          checked={checked}
        />
      </label>
    </div>
  );
};

export default function RadioButton() {
  const [theme, setTheme] = useState({ dark: false, light: false });
  const onChangeTheme = (e) => {
    const { name } = e.target;
    if (name === 'light') {
      setTheme({ dark: false, light: true });
    }
    if (name === 'dark') {
      setTheme({ dark: true, light: false });
    }
  };
  return (
    <div className="flex flex-row">
      <Radio name="dark" id="dark" value="Dark" onChange={onChangeTheme} checked={theme.dark} />
      <Radio name="light" id="light" value="Light" onChange={onChangeTheme} checked={theme.light} />
      <Radio name="light" id="light" value="Light" onChange={onChangeTheme} checked={theme.light} />
      <Radio name="light" id="light" value="Light" onChange={onChangeTheme} checked={theme.light} />
    </div>
  );
}
