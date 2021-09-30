import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.85 1.15a.5.5 0 00-.7 0L9.48 5.82a3.68 3.68 0 00-4.83.37l-.68.64-2.68 1.21a.5.5 0 00-.14.81l6 6a.5.5 0 00.8-.14l1.22-2.67.68-.69a3.67 3.67 0 00.33-4.83l4.67-4.67a.5.5 0 000-.7zm-10.7 6.7l4 4-.8 1.79-4.99-4.98 1.78-.81zm4.6 3.2L4.97 7.25l.37-.34.01-.02a2.67 2.67 0 113.8 3.75l-.4.4z" fill={primaryFill} /></svg>;
}

const Broom16Regular = wrapIcon(rawSvg({}), 'Broom16Regular');
export default Broom16Regular;
      