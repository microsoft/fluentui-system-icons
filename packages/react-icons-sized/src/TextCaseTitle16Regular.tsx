import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2.5c.21 0 .4.13.47.33l3.5 9.5a.5.5 0 01-.94.34L7.05 10h-4.1l-.98 2.67a.5.5 0 01-.94-.34l3.5-9.5A.5.5 0 015 2.5zm0 1.95L3.32 9h3.36L5 4.45zm5.5-1.95c.28 0 .5.22.5.5v4.6c.42-.38.94-.6 1.5-.6 1.38 0 2.5 1.34 2.5 3s-1.12 3-2.5 3c-.56 0-1.08-.22-1.5-.6v.1a.5.5 0 01-1 0V3c0-.28.22-.5.5-.5zm2 9.5c.67 0 1.5-.72 1.5-2s-.83-2-1.5-2-1.5.72-1.5 2 .83 2 1.5 2z" fill={primaryFill} /></svg>;
}

const TextCaseTitle16Regular = wrapIcon(rawSvg({}), 'TextCaseTitle16Regular');
export default TextCaseTitle16Regular;
      