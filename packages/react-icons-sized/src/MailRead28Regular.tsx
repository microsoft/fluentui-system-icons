import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.41 3.37l9.35 6.16c.77.51 1.24 1.37 1.24 2.3v8.92c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 20.75v-8.92c0-.93.47-1.79 1.24-2.3l9.35-6.16a.75.75 0 01.82 0zm9.09 9.08l-9.1 5.69a.75.75 0 01-.8 0l-9.1-5.7v8.31c0 .97.78 1.75 1.75 1.75h15.5c.97 0 1.75-.78 1.75-1.75v-8.3zM14 4.9l-8.94 5.88-.17.14 9.11 5.7 9.11-5.7-.17-.14L14 4.9z" fill={primaryFill} /></svg>;
}

const MailRead28Regular = wrapIcon(rawSvg({}), 'MailRead28Regular');
export default MailRead28Regular;
      