import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.43 6.24a2 2 0 113.3-.23L12.5 6h-2c-.38 0-.75.09-1.07.24zM6 13c-2.58-.01-4-.92-4-2.73V9.5C2 8.67 2.67 8 3.5 8h4.55v.04A2.5 2.5 0 006 10.5V13zm2.5-8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm.5 4V9h-.5C7.67 9 7 9.67 7 10.5V12h2v-.5a.5.5 0 011 0v.5h3v-.5a.5.5 0 011 0v.5h2v-1.5c0-.83-.67-1.5-1.5-1.5H14v-.5c0-.83-.67-1.5-1.5-1.5h-2C9.67 7 9 7.67 9 8.5zm1.5-.5h2c.28 0 .5.22.5.5V9h-3v-.5c0-.28.22-.5.5-.5zm5.5 5h-2v.5a.5.5 0 01-1 0V13h-3v.5a.5.5 0 01-1 0V13H7v1.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5V13z" fill={primaryFill} /></svg>;
}

const PeopleToolbox16Filled = wrapIcon(rawSvg({}), 'PeopleToolbox16Filled');
export default PeopleToolbox16Filled;
      