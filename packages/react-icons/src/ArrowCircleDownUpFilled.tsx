import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5.8l-1.65 1.65a.5.5 0 01-.7 0L5 12.21a.5.5 0 11.7-.71l.8.8V6.5a.5.5 0 011 0v5.8l.8-.8a.5.5 0 11.7.7zm6-4.4a.5.5 0 01-.7.7l-.8-.8v5.8a.5.5 0 01-1 0V7.7l-.8.8a.5.5 0 11-.7-.7l1.65-1.65c.2-.2.5-.2.7 0L15 7.79z" fill={primaryFill} /></svg>;
}

const ArrowCircleDownUpFilled = wrapIcon(rawSvg({}), 'ArrowCircleDownUpFilled');
export default ArrowCircleDownUpFilled;
      