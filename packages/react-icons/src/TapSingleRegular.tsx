import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 8.5a3.5 3.5 0 117 .16l.99.17.01-.33a4.5 4.5 0 10-8.62 1.82 4.2 4.2 0 011.05-.13A3.48 3.48 0 016 8.5z" fill={primaryFill} /><path d="M9.5 6C8.67 6 8 6.67 8 7.5v4.25a4.46 4.46 0 00-1.87-.25c-.45.05-.91.2-1.3.52s-.67.77-.82 1.36a.5.5 0 00.43.62c2.6.28 3.92 1.7 4.56 2.72.48.78 1.4 1.41 2.43 1.23l1.52-.26a2.5 2.5 0 001.92-1.6l.98-2.67a2.5 2.5 0 00-1.91-3.33L11 9.58V7.5c0-.83-.67-1.5-1.5-1.5zM9 7.5a.5.5 0 011 0V10c0 .24.17.45.41.5l3.35.58a1.5 1.5 0 011.15 2l-.98 2.67c-.19.5-.62.86-1.15.95l-1.52.27c-.5.09-1.07-.23-1.41-.77a6.77 6.77 0 00-4.65-3.1c.08-.13.17-.23.26-.3.2-.17.47-.27.78-.3.64-.07 1.42.14 2.04.45A.5.5 0 009 12.5v-5z" fill={primaryFill} /></svg>;
}

const TapSingleRegular = wrapIcon(rawSvg({}), 'TapSingleRegular');
export default TapSingleRegular;
      