import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 4.5c.41 0 .75.34.75.75v13a.75.75 0 01-1.5 0v-13c0-.41.34-.75.75-.75zm18.5 0c.41 0 .75.34.75.75v.87a.75.75 0 01-1.5 0v-.87c0-.41.34-.75.75-.75zm0 3.47c.41 0 .75.33.75.75v1.73a.75.75 0 01-1.5 0V8.72c0-.42.34-.75.75-.75zm0 4.33c.41 0 .75.34.75.75v1.73a.75.75 0 01-1.5 0v-1.73c0-.41.34-.75.75-.75zm0 4.33c.41 0 .75.34.75.75v.87a.75.75 0 01-1.5 0v-.87c0-.41.34-.75.75-.75zm-2.47-4.35c.3-.3.3-.77 0-1.06l-5-5a.75.75 0 10-1.06 1.06L16.44 11H5.75a.75.75 0 000 1.5h10.69l-3.72 3.72a.75.75 0 101.06 1.06l5-5z" fill={primaryFill} /></svg>;
}

const PaddingRight24Regular = wrapIcon(rawSvg({}), 'PaddingRight24Regular');
export default PaddingRight24Regular;
      