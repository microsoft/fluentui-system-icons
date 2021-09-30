import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.3 9l-3.4 3.39a.5.5 0 00.64.76l.07-.05 4.24-4.25a.5.5 0 00.06-.63l-.06-.07-4.24-4.25a.5.5 0 00-.76.64l.05.07L16.3 8H10a7.5 7.5 0 00-7.5 7.26v.24a.5.5 0 001 0A6.5 6.5 0 019.77 9h6.53z" fill={primaryFill} /></svg>;
}

const ArrowForwardRegular = wrapIcon(rawSvg({}), 'ArrowForwardRegular');
export default ArrowForwardRegular;
      