import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 5.75a.75.75 0 00-1.5 0v12.5a.75.75 0 001.5 0V12.5H10v5.75a.75.75 0 001.5 0V5.75a.75.75 0 00-1.5 0V11H3.5V5.75zm11.92 2.09c.23-.46.91-1.34 2.58-1.34.84 0 1.46.26 1.86.64.4.37.64.92.64 1.61 0 .6-.16 1.03-.38 1.33-.23.32-.56.56-.96.74-.81.37-1.8.43-2.38.43a.75.75 0 000 1.5c.58 0 1.57.06 2.38.43.4.18.73.42.96.74.22.3.38.72.38 1.33 0 1.09-.91 2.25-2.5 2.25-1.73 0-2.35-.76-2.55-1.28a.75.75 0 10-1.4.56C14.51 17.93 15.73 19 18 19c2.41 0 4-1.84 4-3.75 0-.9-.25-1.63-.67-2.21A3.68 3.68 0 0020.14 12c.44-.25.86-.58 1.19-1.04.42-.58.67-1.32.67-2.21 0-1.06-.38-2.01-1.11-2.7A4.12 4.12 0 0018 5c-2.33 0-3.48 1.3-3.92 2.16a.75.75 0 101.34.68z" fill={primaryFill} /></svg>;
}

const TextHeader324Regular = wrapIcon(rawSvg({}), 'TextHeader324Regular');
export default TextHeader324Regular;
      