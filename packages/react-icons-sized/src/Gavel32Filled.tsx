import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.43 3.15a3.5 3.5 0 015.35.48l.48.7-8.75 8.74-.53-.32a3.5 3.5 0 01-.67-5.47l4.12-4.13z" fill={primaryFill} /><path d="M12.28 14.13l3.28 1.97a1 1 0 01.34.34l1.78 2.97 7.93-7.93-2.75-2.09a1 1 0 01-.22-.22l-2.22-3.18-8.14 8.14z" fill={primaryFill} /><path d="M19.3 22.1l-.56-.92 8.48-8.48 1.28.97a3.5 3.5 0 01.28 5.34l-4.08 3.84a3.5 3.5 0 01-5.4-.75z" fill={primaryFill} /><path d="M12.35 16.5L3.69 25A2.35 2.35 0 107 28.35l8.57-8.57-1.25-2.08-1.96-1.18z" fill={primaryFill} /><path d="M19 26a1 1 0 100 2h-2a1 1 0 100 2h11.33a1 1 0 100-2H26a1 1 0 100-2h-7z" fill={primaryFill} /></svg>;
}

const Gavel32Filled = wrapIcon(rawSvg({}), 'Gavel32Filled');
export default Gavel32Filled;
      