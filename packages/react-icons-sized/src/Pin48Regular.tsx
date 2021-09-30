import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M42.45 16.18L31.82 5.55a4.75 4.75 0 00-7.61 1.23l-5.27 10.55c-.15.3-.4.51-.71.62l-7.77 2.69a2.75 2.75 0 00-1.05 4.54L15.23 31 6 40.23V42h1.77L17 32.77l5.82 5.82a2.75 2.75 0 004.54-1.05l2.69-7.77c.1-.3.33-.56.62-.7l10.55-5.28a4.75 4.75 0 001.23-7.6zm-12.4-8.86l10.63 10.63a2.25 2.25 0 01-.58 3.6l-10.55 5.28a3.75 3.75 0 00-1.86 2.13L25 36.73a.25.25 0 01-.41.1L11.18 23.4a.25.25 0 01.1-.41l7.76-2.69c.93-.32 1.7-.99 2.13-1.86L26.45 7.9a2.25 2.25 0 013.6-.58z" fill={primaryFill} /></svg>;
}

const Pin48Regular = wrapIcon(rawSvg({}), 'Pin48Regular');
export default Pin48Regular;
      