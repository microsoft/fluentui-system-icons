import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.33 3.13a1.98 1.98 0 00-3 .22A2.4 2.4 0 009.2 7.43l1.01 1-1.06 1.08 1.36 1.36 1.07-1.07 1.01 1.02a2.4 2.4 0 004.08-2.13 1.98 1.98 0 00.23-3l-.6-.6.52-.52a.97.97 0 10-1.37-1.37l-.52.53-.6-.6zm.27 3.54a.5.5 0 11-.7.71l-1.28-1.27a.5.5 0 11.7-.71l1.28 1.27zM4.02 9.2a2.4 2.4 0 013.4 0l3.4 3.4a2.4 2.4 0 01-2.13 4.07 1.98 1.98 0 01-3 .23l-.6-.6-.54.54a.97.97 0 01-1.37-1.37l.54-.54-.6-.6a1.98 1.98 0 01.23-3 2.4 2.4 0 01.67-2.13zm2.94 5.82a.5.5 0 000-.71L5.7 13.04a.5.5 0 10-.7.7l1.27 1.28c.2.2.5.2.7 0z" fill={primaryFill} /></svg>;
}

const Dumbbell20Filled = wrapIcon(rawSvg({}), 'Dumbbell20Filled');
export default Dumbbell20Filled;
      