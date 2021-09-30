import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 2a1 1 0 000 2h5v2.5c0 .83-.32 1.42-.8 1.82-.5.41-1.26.68-2.2.68a1 1 0 100 2c1.3 0 2.54-.37 3.47-1.14A4.23 4.23 0 0020 6.5V3a1 1 0 00-1-1h-6zm-2.07 5.61a1 1 0 00-1.85 0l-7 17a1 1 0 101.84.77L5.73 21h8.54l1.8 4.4a1 1 0 101.86-.77l-1.96-4.76a1 1 0 00-.2-.47L10.94 7.6zM13.45 19h-6.9L10 10.62 13.45 19zM22 2a1 1 0 011 1v5h2a1 1 0 110 2h-2v9a1 1 0 11-2 0V3a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const LocalLanguage28Filled = wrapIcon(rawSvg({}), 'LocalLanguage28Filled');
export default LocalLanguage28Filled;
      