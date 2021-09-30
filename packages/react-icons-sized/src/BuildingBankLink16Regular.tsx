import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 5a.75.75 0 100-1.5A.75.75 0 008 5zm.74-3.55a1.17 1.17 0 00-1.48 0l-5 4.07A.83.83 0 002.8 7H3v4.2c-.6.3-1 .92-1 1.63v.67c0 .28.22.5.5.5h2.84a3.48 3.48 0 01-.3-1H3v-.17c0-.46.37-.83.83-.83h1.2c.11-.75.46-1.43.97-1.95V7h1.5v2.14c.32-.09.65-.14 1-.14V7H10v2h1V7h1v2h.5c.17 0 .34.01.5.04V7h.21a.83.83 0 00.53-1.48l-5-4.07zm-.84.78a.17.17 0 01.2 0L12.75 6H3.26L7.9 2.23zM5 11H4V7h1v4zm3.5-1a2.5 2.5 0 000 5H9a.5.5 0 000-1h-.5a1.5 1.5 0 010-3H9a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H12a.5.5 0 000 1h.5a2.5 2.5 0 000-5H12zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const BuildingBankLink16Regular = wrapIcon(rawSvg({}), 'BuildingBankLink16Regular');
export default BuildingBankLink16Regular;
      