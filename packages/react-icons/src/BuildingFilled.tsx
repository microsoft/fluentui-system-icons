import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3.5C4 2.67 4.67 2 5.5 2h6c.83 0 1.5.67 1.5 1.5V8h1.5c.83 0 1.5.67 1.5 1.5v8a.5.5 0 01-.5.5H13v-3.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V18H4.5a.5.5 0 01-.5-.5v-14zm2.75 3a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-.75 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zm3.75-6.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM9.75 9.5a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M12 15v3h-1.5v-3H12z" fill={primaryFill} /><path d="M9.5 15H8v3h1.5v-3z" fill={primaryFill} /></svg>;
}

const BuildingFilled = wrapIcon(rawSvg({}), 'BuildingFilled');
export default BuildingFilled;
      