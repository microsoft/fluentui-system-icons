import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2c-.77 0-1.28.53-1.57 1.02-.3.5-.45 1.07-.47 1.44-.04.74.07 1.39.44 1.86.38.49.96.67 1.6.67.64 0 1.22-.2 1.6-.7.37-.47.49-1.11.44-1.83a3.56 3.56 0 00-.47-1.43C11.28 2.55 10.77 2 10 2zM8.96 4.51c0-.2.11-.63.33-.99.22-.37.46-.54.7-.54.25 0 .5.17.72.55.21.37.32.8.33.98.04.6-.07.96-.23 1.16-.14.18-.38.31-.81.31-.45 0-.69-.12-.82-.3-.15-.18-.26-.54-.22-1.17z" fill={primaryFill} /><path d="M5 8a2 2 0 00-2 2v6h-.5a.5.5 0 000 1h15a.5.5 0 000-1H17v-6a2 2 0 00-2-2H5zm11 8H4v-3.88l1.54 1.38a2 2 0 002.83-.16l.88-1a1 1 0 011.5 0l.88 1a2 2 0 002.83.16L16 12.12V16zm0-5.22l-2.21 1.97a1 1 0 01-1.42-.08l-.87-.99a2 2 0 00-3 0l-.87 1a1 1 0 01-1.42.07L4 10.78V10a1 1 0 011-1h10a1 1 0 011 1v.78z" fill={primaryFill} /></svg>;
}

const FoodCakeRegular = wrapIcon(rawSvg({}), 'FoodCakeRegular');
export default FoodCakeRegular;
      