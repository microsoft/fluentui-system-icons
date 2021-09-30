import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.46 3.8a.5.5 0 00-.92 0l-4 9.5a.5.5 0 10.92.4L8.02 10h3.96l1.56 3.7a.5.5 0 10.92-.4l-4-9.5zm1.1 5.2H8.44L10 5.29 11.56 9zM2.5 16a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /></svg>;
}

const TextBaselineRegular = wrapIcon(rawSvg({}), 'TextBaselineRegular');
export default TextBaselineRegular;
      