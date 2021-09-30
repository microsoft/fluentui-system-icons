import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 6.01c.18 0 .34.06.47.17a5 5 0 01-3 8.82H8.56l1.22 1.22c.27.27.3.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07-2.5-2.5a.75.75 0 01-.07-.98l.07-.08 2.5-2.5a.75.75 0 011.13.98l-.07.08-1.22 1.22H13a3.5 3.5 0 003.5-3.3V10a3.5 3.5 0 00-1.26-2.69.75.75 0 01.5-1.3zm-5.53-3.29a.75.75 0 01.98-.07l.08.07 2.5 2.5.07.08c.2.26.2.62.01.89l-.08.09-2.5 2.5-.08.07c-.26.2-.62.2-.89.01l-.09-.08-.07-.08a.75.75 0 01-.01-.89l.08-.09 1.22-1.22H7a3.5 3.5 0 00-3.5 3.3v.2c0 1.08.49 2.05 1.26 2.7.15.13.24.32.24.54a.75.75 0 01-1.25.56A5 5 0 016.78 5h4.66l-1.22-1.22-.07-.08a.75.75 0 01.07-.98z" fill={primaryFill} /></svg>;
}

const ArrowRepeatAllFilled = wrapIcon(rawSvg({}), 'ArrowRepeatAllFilled');
export default ArrowRepeatAllFilled;
      