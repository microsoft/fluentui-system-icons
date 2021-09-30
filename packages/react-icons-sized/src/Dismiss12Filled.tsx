import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.9 2.05l.07-.08a.75.75 0 01.98-.07l.08.07L6 4.94l2.97-2.97a.75.75 0 111.06 1.06L7.06 6l2.97 2.97c.27.27.3.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07L6 7.06l-2.97 2.97a.75.75 0 11-1.06-1.06L4.94 6 1.97 3.03a.75.75 0 01-.07-.98l.07-.08-.07.08z" fill={primaryFill} /></svg>;
}

const Dismiss12Filled = wrapIcon(rawSvg({}), 'Dismiss12Filled');
export default Dismiss12Filled;
      