import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 3.5c.28 0 .5.22.5.5v4.9c.53-.56 1.23-.9 2-.9 1.66 0 3 1.57 3 3.5S16.66 15 15 15c-.77 0-1.47-.34-2-.9v.4a.5.5 0 01-1 0V4c0-.28.22-.5.5-.5zM15 14c.97 0 2-.97 2-2.5S15.97 9 15 9s-2 .97-2 2.5 1.03 2.5 2 2.5zM6.96 3.84a.5.5 0 00-.94-.02L3.29 11h-.02v.05l-1.24 3.27a.5.5 0 00.94.36L3.98 12h4.76l.92 2.66a.5.5 0 10.95-.32L6.96 3.84zM4.36 11l2.1-5.54L8.4 11H4.36z" fill={primaryFill} /></svg>;
}

const TextCaseTitle20Regular = wrapIcon(rawSvg({}), 'TextCaseTitle20Regular');
export default TextCaseTitle20Regular;
      