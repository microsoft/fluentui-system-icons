import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm3.45 4.9l.08.07c.27.27.3.68.07.98l-.07.08L13.06 12l2.47 2.47c.27.27.3.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07L12 13.06l-2.47 2.47a.75.75 0 01-.98.07l-.08-.07a.75.75 0 01-.07-.98l.07-.08L10.94 12 8.47 9.53a.75.75 0 01-.07-.98l.07-.08a.75.75 0 01.98-.07l.08.07L12 10.94l2.47-2.47a.75.75 0 01.98-.07z" fill={primaryFill} /></svg>;
}

const DismissCircle24Regular = wrapIcon(rawSvg({}), 'DismissCircle24Regular');
export default DismissCircle24Regular;
      