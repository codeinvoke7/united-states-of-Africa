import React from 'react';
import PropTypes from 'prop-types';
import { clsxm } from 'utils';

export default function Carousel({ children, className, ...rest }: React.ComponentProps<'div'>) {
  return (
    <div className={clsxm('carousel m-6 carousel-end', className)} {...rest}>
      {children}
    </div>
  );
}
