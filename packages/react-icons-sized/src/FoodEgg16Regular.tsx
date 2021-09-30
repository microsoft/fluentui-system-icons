import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.7 8.22a.73.73 0 01.2-.37.38.38 0 01.11-.07.5.5 0 00.19-.99c-.4-.08-.76.13-.98.33-.24.23-.43.54-.5.9a.5.5 0 10.97.2z" fill={primaryFill} /><path d="M8.3 11.6a3.3 3.3 0 100-6.6 3.3 3.3 0 000 6.6zm0-1a2.3 2.3 0 110-4.6 2.3 2.3 0 010 4.6z" fill={primaryFill} /><path d="M9.2 2c.79.06 1.53.29 2.07.63a5.38 5.38 0 012.02 2.12c.39.67.79 1.53.79 2.85 0 .62-.07.93-.13 1.2v.04c-.05.21-.1.4-.05.9a4.2 4.2 0 01-.35 1.99c-.27.62-.7 1.2-1.28 1.57-1.19.74-2.62.9-3.96.36-.59-.23-.77-.28-.97-.3l-.46.01h-.01L6 13.4a3.84 3.84 0 01-3.46-2.16C1.68 9.59 1.7 7.1 3.59 5.61a3 3 0 00.88-.87c.31-.52.61-.93.98-1.3.37-.35.78-.64 1.3-.93a4.47 4.47 0 012.45-.5zm-.06 1a3.47 3.47 0 00-1.9.39c-.47.26-.8.5-1.09.77-.28.28-.53.62-.82 1.1-.28.46-.57.7-1.12 1.13-1.41 1.12-1.48 3.04-.79 4.38.46.88 1.31 1.62 2.58 1.62l.83-.02H7.4c.38.02.7.13 1.29.37 1.03.4 2.12.29 3.05-.29.36-.23.68-.63.9-1.12.2-.5.3-1.03.26-1.5-.05-.61 0-.91.07-1.21v-.05a4.37 4.37 0 00-.55-3.32 4.4 4.4 0 00-1.69-1.78A3.53 3.53 0 009.13 3z" fill={primaryFill} /></svg>;
}

const FoodEgg16Regular = wrapIcon(rawSvg({}), 'FoodEgg16Regular');
export default FoodEgg16Regular;
      