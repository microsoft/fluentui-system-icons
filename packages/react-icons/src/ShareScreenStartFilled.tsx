import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm6 10a.5.5 0 01-.5-.5V7.7L7.85 9.36a.5.5 0 11-.7-.7l2.5-2.5c.2-.2.5-.2.7 0l2.5 2.5a.5.5 0 01-.7.7L10.5 7.71v5.79a.5.5 0 01-.5.5z" fill={primaryFill} /></svg>;
}

const ShareScreenStartFilled = wrapIcon(rawSvg({}), 'ShareScreenStartFilled');
export default ShareScreenStartFilled;
      