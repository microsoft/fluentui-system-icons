import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1c.2 0 .38.12.46.3l2.5 6a.5.5 0 01-.92.4L6.34 6H3.66l-.7 1.7a.5.5 0 11-.93-.4l2.5-6A.5.5 0 015 1zm0 1.8L4.08 5h1.84L5 2.8zM3 9a.5.5 0 100 1h2.54l-2.95 4.21A.5.5 0 003 15h3.5a.5.5 0 100-1H3.96l2.95-4.21a.5.5 0 00-.4-.79H3zm5.15 2.15c.2-.2.5-.2.7 0L11 13.29V1.5a.5.5 0 111 0v11.8l2.15-2.15a.5.5 0 11.7.7l-3 3a.5.5 0 01-.7 0l-3-3a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const TextSortAscending16Regular = wrapIcon(rawSvg({}), 'TextSortAscending16Regular');
export default TextSortAscending16Regular;
      