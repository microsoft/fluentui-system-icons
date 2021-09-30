import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2c.28 0 .5.22.5.5V4h1c.83 0 1.5.67 1.5 1.5V9h2.5c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 16.5v-6.18c0-.53.28-1.02.73-1.29l3-1.8c.09-.05.18-.1.27-.13V5.5C7 4.67 7.67 4 8.5 4h1V2.5c0-.28.22-.5.5-.5zM8 7.1c.56.2 1 .73 1 1.42V17h2v-6.5c0-.65.42-1.2 1-1.41V5.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v1.6zm4.5 2.9a.5.5 0 00-.5.5V17h3.5a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-3zM7.24 8.09l-3 1.8a.5.5 0 00-.24.43v6.18c0 .28.22.5.5.5H8V8.52a.5.5 0 00-.76-.43z" fill={primaryFill} /></svg>;
}

const CityRegular = wrapIcon(rawSvg({}), 'CityRegular');
export default CityRegular;
      