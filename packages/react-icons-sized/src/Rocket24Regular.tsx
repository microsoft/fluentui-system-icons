import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.06 7.43a2.5 2.5 0 113.53 3.54 2.5 2.5 0 01-3.53-3.54zm2.47 1.06a1 1 0 10-1.41 1.42 1 1 0 001.41-1.42z" fill={primaryFill} /><path d="M21.5 4.32a2.75 2.75 0 00-1.8-1.8l-.66-.21c-2.4-.75-5-.1-6.78 1.67l-1 1a3.5 3.5 0 00-4.56.32L5.45 6.55c-.29.29-.29.76 0 1.06l1.6 1.59-.18.18c-.69.68-.69 1.79 0 2.47l.5.5-1.4.8a.75.75 0 00-.16 1.17l3.89 3.9a.75.75 0 001.18-.16l.8-1.4.5.5c.68.68 1.78.68 2.47 0l.17-.18 1.6 1.6c.29.28.76.28 1.05 0l1.25-1.25a3.5 3.5 0 00.32-4.57l1-1A6.75 6.75 0 0021.72 5l-.21-.67zm-2.25-.38c.4.13.7.43.83.83l.2.66c.58 1.86.08 3.9-1.3 5.27l-5.4 5.4c-.1.1-.25.1-.35 0l-5.3-5.3a.25.25 0 010-.36l5.4-5.4a5.25 5.25 0 015.26-1.3l.66.2zm-1.29 9.9a2 2 0 01-.3 2.43l-.72.71-1.06-1.06 2.08-2.08zM7.76 6.36a2 2 0 012.43-.3L8.1 8.14 7.05 7.08l.7-.72zm2.82 9.2l-.52.9-2.5-2.5.9-.51 2.12 2.11z" fill={primaryFill} /><path d="M6.69 18.4a.75.75 0 00-1.06-1.07l-2.48 2.48a.75.75 0 001.06 1.06l2.48-2.48z" fill={primaryFill} /><path d="M4.75 15.39c.29.3.29.77 0 1.06l-1.07 1.06a.75.75 0 11-1.06-1.06l1.06-1.06c.3-.3.77-.3 1.07 0z" fill={primaryFill} /><path d="M8.63 20.34a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06z" fill={primaryFill} /></svg>;
}

const Rocket24Regular = wrapIcon(rawSvg({}), 'Rocket24Regular');
export default Rocket24Regular;
      