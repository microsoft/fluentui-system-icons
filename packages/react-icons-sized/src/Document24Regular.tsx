import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 20a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v10zm-5-15.38l3.88 3.88H14a.5.5 0 01-.5-.5V4.62zm5.91 3.8L13.6 2.58l-.09-.07a2.07 2.07 0 00-.22-.18l-.13-.07-.21-.12c-.2-.08-.41-.12-.63-.14L12.17 2H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V9.83a2 2 0 00-.59-1.42z" fill={primaryFill} /></svg>;
}

const Document24Regular = wrapIcon(rawSvg({}), 'Document24Regular');
export default Document24Regular;
      