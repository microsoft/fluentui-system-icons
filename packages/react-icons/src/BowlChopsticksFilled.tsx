import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.8 8a.8.8 0 00-.8.8V10c0 .34.02.67.06 1h15.88c.04-.33.06-.66.06-1V8.8a.8.8 0 00-.8-.8H2.8zm5.63-5.75L11.2 7h-1.15L7.57 2.75a.5.5 0 11.86-.5zM8.2 7H7.05L4.57 2.75a.5.5 0 11.86-.5L8.2 7zm-5.95 5a8.02 8.02 0 003.87 5H3.5a.5.5 0 100 1h13a.5.5 0 000-1h-2.62a8.02 8.02 0 003.87-5H2.25z" fill={primaryFill} /></svg>;
}

const BowlChopsticksFilled = wrapIcon(rawSvg({}), 'BowlChopsticksFilled');
export default BowlChopsticksFilled;
      