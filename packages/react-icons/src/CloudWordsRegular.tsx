import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 7a.5.5 0 000 1h3a.5.5 0 000-1h-3zM4 11.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm7.5-.5a.5.5 0 000 1h4a.5.5 0 000-1h-4zm3.15-2.75C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 002 11.62 3.33 3.33 0 005.28 15h9.44A3.33 3.33 0 0018 11.62a3.33 3.33 0 00-3.28-3.37h-.07zm-8.3.1C6.55 6.32 7.89 5 10 5c2.1 0 3.45 1.32 3.65 3.35a1 1 0 001 .9h.07A2.33 2.33 0 0117 11.62 2.33 2.33 0 0114.72 14H5.28A2.33 2.33 0 013 11.62a2.33 2.33 0 012.28-2.37h.07a1 1 0 001-.9z" fill={primaryFill} /></svg>;
}

const CloudWordsRegular = wrapIcon(rawSvg({}), 'CloudWordsRegular');
export default CloudWordsRegular;
      