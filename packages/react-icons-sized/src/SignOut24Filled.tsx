import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4.35V11h7.44l-1.72-1.72a.75.75 0 01-.07-.98l.07-.08a.75.75 0 01.98-.07l.08.07 3 3c.26.26.29.68.07.97l-.07.09-3 3a.75.75 0 01-1.13-.97l.07-.09 1.71-1.72H12v6.75c0 .47-.42.82-.88.74l-8.5-1.5a.75.75 0 01-.62-.74v-12c0-.37.27-.68.63-.74l8.5-1.4c.46-.07.87.28.87.74zM8.5 11.5a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M13 18.5h.87a.75.75 0 00.65-.75l-.01-4.25H13v5z" fill={primaryFill} /><path d="M13 10V5h.75c.37 0 .69.28.74.65v.1L14.5 10H13z" fill={primaryFill} /></svg>;
}

const SignOut24Filled = wrapIcon(rawSvg({}), 'SignOut24Filled');
export default SignOut24Filled;
      