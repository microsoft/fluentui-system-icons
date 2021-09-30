import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 10.99a1 1 0 100-2 1 1 0 000 2zm5 2a1 1 0 11-2 0 1 1 0 012 0zm-5 4a1 1 0 100-2 1 1 0 000 2zM5 4.66a2.6 2.6 0 012.82-2.65 20.78 20.78 0 0113.44 6.83 2.6 2.6 0 01-.48 3.85l-5.28 3.83V18.24a1.75 1.75 0 01-2.06 1.72c-.2.83-.93 1.53-1.94 1.53-.7 0-1.26-.34-1.61-.82l-1.33.96A2.25 2.25 0 015 19.81V4.66zm2.67-1.15c-.6-.06-1.17.44-1.17 1.15v.52c5.25.22 9.91 2.75 12.98 6.6l.42-.3c.58-.43.65-1.18.25-1.64A19.28 19.28 0 007.66 3.51zM6.5 19.8c0 .6.69.96 1.19.6.72-.52 1.5-1.07 2.12-1.53a.75.75 0 011.2.6c0 .28.2.5.49.5.3 0 .5-.22.5-.5v-1.24a.75.75 0 011.5 0 .25.25 0 10.5 0v-.62-1.5c0-.23.12-.45.31-.6l3.96-2.86A16.04 16.04 0 006.5 6.68v13.13z" fill={primaryFill} /></svg>;
}

const FoodPizza24Regular = wrapIcon(rawSvg({}), 'FoodPizza24Regular');
export default FoodPizza24Regular;
      