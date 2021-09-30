import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M34 14a10 10 0 01.28 20h-6.03a1.25 1.25 0 01-.13-2.5H34a7.5 7.5 0 00.24-15h-5.99a1.25 1.25 0 01-.13-2.5H34zm-14.25 0a1.25 1.25 0 01.13 2.5H14a7.5 7.5 0 00-.24 15h5.99a1.25 1.25 0 01.13 2.5H14a10 10 0 01-.28-20h6.03zM13 22.75h22a1.25 1.25 0 01.13 2.5H13a1.25 1.25 0 01-.13-2.5H35 13z" fill={primaryFill} /></svg>;
}

const Link48Regular = wrapIcon(rawSvg({}), 'Link48Regular');
export default Link48Regular;
      