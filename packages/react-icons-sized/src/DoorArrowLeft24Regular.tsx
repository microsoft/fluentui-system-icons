import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 2C5.01 2 4 3 4 4.25v15.5C4 20.99 5 22 6.25 22h6.56a6.52 6.52 0 01-1.08-1.5H6.25a.75.75 0 01-.75-.75V4.25c0-.41.34-.75.75-.75h11.5c.41 0 .75.34.75.75v6.83c.52.08 1.03.22 1.5.42V4.25C20 3.01 19 2 17.75 2H6.25zM17.5 23a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm3.5-5.5a.5.5 0 01-.5.5h-4.8l1.65 1.65a.5.5 0 01-.7.7l-2.5-2.5a.5.5 0 010-.7l2.5-2.5a.5.5 0 01.7.7L15.71 17h4.79c.28 0 .5.22.5.5zM8.5 13.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
}

const DoorArrowLeft24Regular = wrapIcon(rawSvg({}), 'DoorArrowLeft24Regular');
export default DoorArrowLeft24Regular;
      