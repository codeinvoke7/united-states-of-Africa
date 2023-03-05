import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { DropdownIcon } from 'components/widgets/icons';
import { twMerge } from 'tailwind-merge';

export default function NavLinks({
  label,
  endDropdownIcon,
  startDropdownIcon,
  dropdownLinks,
  className,
  defaultIcon,
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
        {dropdownLinks.map(
          ({ label, to, dropdownLinks, className, startDropdownIcon, endDropdownIcon }, index) => {
            if (Array.isArray(dropdownLinks))
              return (
                <NavLinks
                  key={label + index}
                  label={label}
                  dropdownLinks={[...dropdownLinks]}
                  className={twMerge(className, 'group/inner')}
                  startDropdownIcon={startDropdownIcon}
                  endDropdownIcon={
                    endDropdownIcon || (
                      <DropdownIcon
                        right
                        className={`group-hover/inner:rotate-90 transition-transform`}
                      />
                    )
                  }
                />
              );
            return (
              <li key={label + index} className="items-center min-w-[8rem]">
                <NavLink
                  to={to}
                  className={clsx(
                    'btn-block transform-none whitespace-nowrap justify-center active:text-primary'
                  )}
                >
                  {label || null}
                </NavLink>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}

const propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  startDropdownIcon: PropTypes.any,
  endDropdownIcon: PropTypes.any,
  defaultIcon: PropTypes.bool
};

NavLinks.propTypes = {
  ...propTypes,
  dropdownLinks: PropTypes.arrayOf(
    PropTypes.shape({
      ...propTypes,
      dropdownLinks: PropTypes.arrayOf(PropTypes.shape({ ...propTypes }))
    })
  )
};
