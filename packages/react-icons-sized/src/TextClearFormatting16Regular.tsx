import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 1c.2 0 .38.12.46.3l2.88 6.73-.75.76a.5.5 0 01-.05-.1L6.31 7H2.7l-.73 1.7a.5.5 0 01-.92-.4l3-7A.5.5 0 014.5 1zm1.38 5L4.5 2.77 3.12 6h2.76zm8.43.2V6c0-1.82-.95-3-2.42-3a2 2 0 00-1.82 1.02H10V1.5a.5.5 0 10-1 0v5.38l1-1v-.4c.15-1.03.76-1.65 1.67-1.65.86 0 1.43.53 1.62 1.44.17.1.33.23.48.38l.54.54zM9.51 15a1.5 1.5 0 01-1.57-.35l-1.59-1.59a1.5 1.5 0 010-2.12l4.59-4.59a1.5 1.5 0 012.12 0l1.59 1.59a1.5 1.5 0 010 2.12l-3.29 3.29-.01.01-.64.64h1.79a.5.5 0 010 1h-3zm.78-2L8 10.7l-.94.95a.5.5 0 000 .7l1.59 1.59c.2.2.5.2.7 0l.94-.94zm.71-.7l2.94-2.95a.5.5 0 000-.7l-1.59-1.59a.5.5 0 00-.7 0L8.7 10 11 12.3z" fill={primaryFill} /></svg>;
}

const TextClearFormatting16Regular = wrapIcon(rawSvg({}), 'TextClearFormatting16Regular');
export default TextClearFormatting16Regular;
      