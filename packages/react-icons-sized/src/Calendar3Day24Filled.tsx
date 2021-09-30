import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm-10 4c-.38 0-.7.28-.74.65l-.01.1v8.6a.75.75 0 001.5 0v-8.7A.75.75 0 007.74 7zm8.5 0c-.38 0-.7.28-.74.65l-.01.1v8.6a.75.75 0 001.5 0v-8.7a.75.75 0 00-.75-.65zM12 7c-.38 0-.7.28-.74.65l-.01.1v8.6a.75.75 0 001.5 0v-8.7A.75.75 0 0012 7z" fill={primaryFill} /></svg>;
}

const Calendar3Day24Filled = wrapIcon(rawSvg({}), 'Calendar3Day24Filled');
export default Calendar3Day24Filled;
      