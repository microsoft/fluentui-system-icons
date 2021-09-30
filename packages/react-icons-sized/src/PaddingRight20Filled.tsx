import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3.75c.41 0 .75.34.75.75V15A.75.75 0 012 15V4.5c0-.41.34-.75.75-.75zm14.5 0c.41 0 .75.34.75.75v1.31a.75.75 0 01-1.5 0V4.5c0-.41.34-.75.75-.75zm0 3.94c.41 0 .75.33.75.75v2.62a.75.75 0 01-1.5 0V8.44c0-.42.34-.75.75-.75zm0 5.25c.41 0 .75.33.75.75V15a.75.75 0 01-1.5 0v-1.31c0-.42.34-.75.75-.75zm-1.97-2.66c.3-.3.3-.77 0-1.06l-4.25-4.25a.75.75 0 10-1.06 1.06L12.94 9H5.75a.75.75 0 000 1.5h7.19l-2.97 2.97a.75.75 0 101.06 1.06l4.25-4.25z" fill={primaryFill} /></svg>;
}

const PaddingRight20Filled = wrapIcon(rawSvg({}), 'PaddingRight20Filled');
export default PaddingRight20Filled;
      