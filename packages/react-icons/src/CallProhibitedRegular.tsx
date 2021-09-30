import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.15 4.66A10.37 10.37 0 0010 2C6.67 2 4.1 3.29 2.68 4.67c-.6.59-.83 1.46-.58 2.28l.25.83A1.74 1.74 0 004.17 9l1.63-.16c.7-.07 1-.66 1.2-1.33.3-1 .5-1.75.5-1.75a6.63 6.63 0 015 0s.2.75.5 1.75c.22.74.75 1.26 1.47 1.33l1.63.16c.83.08 1.55-.44 1.7-1.22l.16-.83c.16-.82-.15-1.7-.8-2.28zm-3.65.96l-.02-.1-.01-.02c-.1-.4-.44-.61-.6-.68a7.62 7.62 0 00-5.73-.01c-.16.09-.51.34-.61.7l-.03.1a90.96 90.96 0 01-.46 1.6c-.09.3-.17.47-.24.56a.2.2 0 01-.05.05l-.05.01L4.07 8a.74.74 0 01-.77-.5l-.24-.83c-.15-.48-.02-.96.31-1.28A9.62 9.62 0 0110 3a9.37 9.37 0 016.5 2.4c.4.37.57.89.48 1.35l-.16.83c-.05.24-.27.45-.62.41l-1.64-.16c-.21-.02-.47-.17-.6-.62a59.02 59.02 0 01-.46-1.59z" fill={primaryFill} /><path d="M6.82 16.68a4.5 4.5 0 106.36-6.36 4.5 4.5 0 00-6.36 6.36zm5.65-.7a3.5 3.5 0 01-4.57.32l4.9-4.9a3.5 3.5 0 01-.33 4.57zm-.37-5.28l-4.9 4.9a3.5 3.5 0 014.9-4.9z" fill={primaryFill} /></svg>;
}

const CallProhibitedRegular = wrapIcon(rawSvg({}), 'CallProhibitedRegular');
export default CallProhibitedRegular;
      