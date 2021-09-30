import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.01 3c.33 0 .62.23.71.55l2.82 10.07 2.24-7.1a.75.75 0 011.4-.07L15.5 9.5h1.76a.75.75 0 010 1.5H15a.75.75 0 01-.69-.45l-.7-1.65-2.4 7.58a.75.75 0 01-1.43-.03L6.97 6.41l-1.25 4.06A.75.75 0 015 11H2.75a.75.75 0 010-1.5h1.7l1.83-5.97c.1-.32.4-.53.73-.53z" fill={primaryFill} /></svg>;
}

const PulseFilled = wrapIcon(rawSvg({}), 'PulseFilled');
export default PulseFilled;
      