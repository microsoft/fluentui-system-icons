import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.25C2 3.45 3.46 2 5.25 2h10.5C17.55 2 19 3.46 19 5.25v6.03a2.75 2.75 0 00-1.22-.28h-.28V5.25c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h3.37L7.36 20H5.25A3.25 3.25 0 012 16.75V5.25zM6.75 6a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm.32 6.43a.75.75 0 01.68-.43h10.03c.52 0 1.01.23 1.34.62l3.7 4.4c.24.28.24.68 0 .96l-3.7 4.4c-.33.4-.82.62-1.34.62H7.75a.75.75 0 01-.57-1.23l3.59-4.27-3.6-4.27a.75.75 0 01-.1-.8zm2.3 1.07l2.95 3.52c.24.28.24.68 0 .96L9.36 21.5h8.42c.08 0 .15-.03.2-.09l3.29-3.91-3.3-3.91a.25.25 0 00-.19-.09H9.36zM6.74 9a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" fill={primaryFill} /></svg>;
}

const Diagram24Regular = wrapIcon(rawSvg({}), 'Diagram24Regular');
export default Diagram24Regular;
      