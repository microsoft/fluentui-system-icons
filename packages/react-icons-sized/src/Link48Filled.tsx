import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M33.25 13c5.84 0 10.6 4.66 10.75 10.46v.79c0 5.84-4.66 10.6-10.46 10.75h-4.79a1.75 1.75 0 01-.14-3.5h4.64a7.25 7.25 0 007.25-7.01v-.74a7.25 7.25 0 00-7.01-7.25h-4.74a1.75 1.75 0 01-.14-3.5h4.64zm-14 0a1.75 1.75 0 01.14 3.5h-4.64a7.25 7.25 0 00-7.25 7.01v.74a7.25 7.25 0 007.01 7.25h4.74a1.75 1.75 0 01.14 3.5h-4.64C8.91 35 4.15 30.34 4 24.54v-.79C4 17.91 8.66 13.15 14.46 13h4.79zM14 22.25h20a1.75 1.75 0 01.14 3.5H14a1.75 1.75 0 01-.14-3.5H34 14z" fill={primaryFill} /></svg>;
}

const Link48Filled = wrapIcon(rawSvg({}), 'Link48Filled');
export default Link48Filled;
      