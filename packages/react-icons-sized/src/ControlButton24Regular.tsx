import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 8A2.75 2.75 0 005 10.75v2.5A2.75 2.75 0 007.75 16h.5a.75.75 0 000-1.5h-.5c-.69 0-1.25-.56-1.25-1.25v-2.5c0-.69.56-1.25 1.25-1.25h.5a.75.75 0 000-1.5h-.5zm3.75.75a.75.75 0 00-1.5 0V11h-.25a.75.75 0 000 1.5H10V14c0 1.1.9 2 2 2h.25a.75.75 0 000-1.5H12a.5.5 0 01-.5-.5v-1.5h.75a.75.75 0 000-1.5h-.75V8.75zm8 0a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5zm-4 4.25c0-.28.22-.5.5-.5h.25a.75.75 0 000-1.5H16a2 2 0 00-2 2v2.25a.75.75 0 001.5 0V13zM5.25 4A3.25 3.25 0 002 7.25v9.5C2 18.55 3.46 20 5.25 20h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 5.45 20.54 4 18.75 4H5.25zM3.5 7.25c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75v9.5c0 .97-.78 1.75-1.75 1.75H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5z" fill={primaryFill} /></svg>;
}

const ControlButton24Regular = wrapIcon(rawSvg({}), 'ControlButton24Regular');
export default ControlButton24Regular;
      