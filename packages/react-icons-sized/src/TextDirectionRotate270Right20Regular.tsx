import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.85 5.15a.5.5 0 11-.7.7L7 4.71V9.5a.5.5 0 01-1 0V4.7L4.85 5.86a.5.5 0 11-.7-.7l2-2c.2-.2.5-.2.7 0l2 2zm8 0a.5.5 0 11-.7.7L15 4.71V16.5a.5.5 0 01-1 0V4.7l-1.15 1.15a.5.5 0 11-.7-.7l2-2c.2-.2.5-.2.7 0l2 2zM3 13.5c0-.2.13-.4.32-.47l8-3a.5.5 0 01.36.94l-2.68 1v3.06l2.68 1a.5.5 0 01-.36.94l-8-3A.5.5 0 013 13.5zm1.92 0L8 14.65v-2.3L4.92 13.5z" fill={primaryFill} /></svg>;
}

const TextDirectionRotate270Right20Regular = wrapIcon(rawSvg({}), 'TextDirectionRotate270Right20Regular');
export default TextDirectionRotate270Right20Regular;
      