import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.5c0-.28.22-.5.5-.5h8a.5.5 0 110 1h-8a.5.5 0 01-.5-.5zM3.56 7.73a.5.5 0 01.7.7L3.22 9.5l1.06 1.06a.5.5 0 11-.7.7l-1.42-1.4a.5.5 0 010-.71l1.41-1.42zM6.5 9a.5.5 0 000 1h11a.5.5 0 100-1h-11zM6 14.5c0-.28.22-.5.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const TextIndentDecreaseLtr20Regular = wrapIcon(rawSvg({}), 'TextIndentDecreaseLtr20Regular');
export default TextIndentDecreaseLtr20Regular;
      