import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.75 3C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 21.75V6.25C3 4.45 4.46 3 6.25 3h15.5zM14 8.25c-.38 0-.7.28-.74.65l-.01.1v10.1a.75.75 0 001.5 0V8.9a.75.75 0 00-.75-.65zm5.25 0c-.38 0-.7.28-.74.65l-.01.1v10.1a.75.75 0 001.5 0V8.9a.75.75 0 00-.75-.65zm-10.5 0c-.38 0-.7.28-.74.65L8 9v10.1a.75.75 0 001.5 0V8.9a.75.75 0 00-.75-.65z" fill={primaryFill} /></svg>;
}

const Calendar3Day28Filled = wrapIcon(rawSvg({}), 'Calendar3Day28Filled');
export default Calendar3Day28Filled;
      