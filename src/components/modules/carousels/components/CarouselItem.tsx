import React from 'react';
import PropTypes from 'prop-types';
import { clsxm } from 'utils';

type Props = React.ComponentPropsWithRef<'div'>;

export default function Item({ children, className }: Props) {
  return <div className={clsxm('carousel-item', className)}>{children}</div>;
}
