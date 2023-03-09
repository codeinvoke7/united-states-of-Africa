import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { DropdownIcon } from 'components/widgets/icons';

export default function NavLinks({
  label,
  endDropdownIcon,
  startDropdownIcon,
  dropdownLinks,
  className,
  defaultIcon,
  handleClick,
  ...rest
}) {
  return (
    <div
      role="listbox"
      className={clsx(['dropdown dropdown-hover w-full group/outer', className])}
      {...rest}
    >
      <button
        type="button"
        className={clsx('btn rounded-full normal-case btn-ghost gap-1 flex-nowrap w-full')}
      >
        {startDropdownIcon || null}
        <span>{label}</span>
        {endDropdownIcon || null}
        {defaultIcon && (
          <DropdownIcon right className={`group-hover/outer:rotate-90 transition-transform`} />
        )}
      </button>
      <ul
        tabIndex={0}
        className={'dropdown-content menu bg-base-100 p-2 shadow-inner min-w-max w-full'}
      >
        {dropdownLinks.map(({ label, to }, index) => {
          return (
            <li key={label + index} className="items-center min-w-[8rem]">
              <NavLink
                to={to}
                onClick={() => handleClick()}
                className={clsx(
                  'btn-block transform-none whitespace-nowrap justify-center active:text-primary'
                )}
              >
                {label || null}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  startDropdownIcon: PropTypes.any,
  endDropdownIcon: PropTypes.any,
  handleClick: PropTypes.func,
  defaultIcon: PropTypes.bool,
  dropdownLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
};

NavLinks.propTypes = propTypes;
