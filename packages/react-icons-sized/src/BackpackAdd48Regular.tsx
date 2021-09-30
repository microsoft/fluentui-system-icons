import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a8 8 0 00-7.95 7.11A16 16 0 008 25v13.75c0 2.9 2.35 5.25 5.25 5.25h12.37c-.72-.75-1.36-1.6-1.88-2.5H13.25a2.75 2.75 0 01-2.75-2.75V30.5H16v3.25a1.25 1.25 0 102.5 0V30.5h4.3c.33-.88.74-1.72 1.24-2.5H10.5v-3a13.5 13.5 0 0126.7-2.81c.93.15 1.82.41 2.67.75a16 16 0 00-7.92-11.83A8 8 0 0024 4zm0 5c-1.76 0-3.46.29-5.05.81a5.5 5.5 0 0110.1 0A15.98 15.98 0 0024 9z" fill={primaryFill} /><path d="M28.07 24c1.11-.7 2.34-1.24 3.64-1.58.19-.38.29-.8.29-1.24A5.18 5.18 0 0026.82 16h-5.64A5.18 5.18 0 0016 21.18 2.82 2.82 0 0018.82 24h9.25zm-6.9-5.5h5.65c1.48 0 2.68 1.2 2.68 2.68 0 .18-.14.32-.32.32H18.82a.32.32 0 01-.32-.32c0-1.48 1.2-2.68 2.68-2.68z" fill={primaryFill} /><path d="M46 35a11 11 0 11-22 0 11 11 0 0122 0zm-10-7a1 1 0 10-2 0v6h-6a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6v-6z" fill={primaryFill} /></svg>;
}

const BackpackAdd48Regular = wrapIcon(rawSvg({}), 'BackpackAdd48Regular');
export default BackpackAdd48Regular;
      