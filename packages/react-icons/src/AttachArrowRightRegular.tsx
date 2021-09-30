import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.83 10.49l5.66-5.66A3 3 0 0114.79 9c.39.02.77.08 1.13.18a4 4 0 00-6.14-5.07L4.12 9.78a.5.5 0 00.7.7zM8 15.79l1-1c.02.42.09.83.2 1.21l-.5.5a2.5 2.5 0 01-3.53-3.54l6.01-6.01a.5.5 0 01.71.7l-6.01 6.02A1.5 1.5 0 108 15.79zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /></svg>;
}

const AttachArrowRightRegular = wrapIcon(rawSvg({}), 'AttachArrowRightRegular');
export default AttachArrowRightRegular;
      