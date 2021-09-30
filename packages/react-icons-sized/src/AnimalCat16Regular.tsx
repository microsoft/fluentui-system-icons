import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.64 15h8.04c.86 0 1.56-.7 1.56-1.55V6.9a1.9 1.9 0 001.47-2.9l-.43-.7a1.9 1.9 0 00-1.62-.9h-1.18v-.49c0-.5-.41-.92-.92-.92-1.2 0-2.19.98-2.19 2.19v2.93c-1.1.13-1.93.65-2.54 1.39a7.1 7.1 0 00-1.33 2.92A14.84 14.84 0 004.14 14h-.5a1.64 1.64 0 01-1.2-2.76l.8-.86a3.18 3.18 0 00-.08-4.41l-.78-.78a.5.5 0 10-.7.7l.78.79A2.18 2.18 0 012.5 9.7l-.8.86A2.64 2.64 0 003.64 15zm6.84-13v.9c0 .28.22.5.5.5h1.68c.31 0 .6.17.77.43l.43.7a.9.9 0 01-.77 1.39h-.35a.5.5 0 00-.5.5v7.03c0 .3-.25.55-.56.55h-.55v-.55a2.6 2.6 0 00-2.6-2.61h-.89a.5.5 0 000 1h.88c.89 0 1.61.72 1.61 1.6V14H5.14a15.66 15.66 0 01.34-3.34c.22-.95.57-1.85 1.12-2.51a2.8 2.8 0 012.27-1.06.5.5 0 00.5-.5V3.2c0-.63.5-1.15 1.11-1.19z" fill={primaryFill} /></svg>;
}

const AnimalCat16Regular = wrapIcon(rawSvg({}), 'AnimalCat16Regular');
export default AnimalCat16Regular;
      