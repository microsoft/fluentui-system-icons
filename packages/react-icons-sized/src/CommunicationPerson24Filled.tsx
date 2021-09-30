import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 5a8 8 0 00-5.66 13.65 1 1 0 11-1.42 1.41 10 10 0 1116.45-3.56h-.82a3.77 3.77 0 00.18-5.32 3.76 3.76 0 00-1.19-.85A8 8 0 0012 5zm3.46 6c.49-.46 1.1-.78 1.78-.92a6 6 0 10-9.48 7.16 1 1 0 101.41-1.41 4 4 0 116.29-4.84zM12 11a2 2 0 100 4 2 2 0 000-4zm8 .86a2.74 2.74 0 10-4 3.77 2.74 2.74 0 004-3.77zm-5.5 5.64h-.13A1.5 1.5 0 0013 19v.5c0 .5.12 1.02.36 1.5.28.57.72 1.09 1.3 1.5.83.61 1.96 1 3.34 1 3.14 0 5-2.03 5-4V19c0-.83-.67-1.5-1.5-1.5h-7z" fill={primaryFill} /></svg>;
}

const CommunicationPerson24Filled = wrapIcon(rawSvg({}), 'CommunicationPerson24Filled');
export default CommunicationPerson24Filled;
      