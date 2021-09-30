import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.32 6.5c.17-.87.4-1.66.67-2.32.3-.73.65-1.3 1-1.66C9.36 2.15 9.7 2 10 2c.3 0 .65.15 1 .52.36.37.71.93 1.01 1.66.28.66.5 1.45.67 2.32H7.32zm-.26-2.7c.24-.58.52-1.1.83-1.52A8.02 8.02 0 002.8 6.5h3.5c.18-1 .44-1.92.76-2.7zm5.88 0a7.19 7.19 0 00-.83-1.52A8.02 8.02 0 0117.2 6.5h-3.5c-.18-1-.44-1.92-.76-2.7zm.91 3.7h3.75a8 8 0 01.4 2.59 4.66 4.66 0 00-4.02-.98c-.02-.55-.07-1.09-.13-1.61zm-3.59 6l-.01.36c0 1.09.41 2.13 1.14 3.14a3.6 3.6 0 01-.39.48c-.35.37-.7.52-1 .52-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32h2.94zm.18-1a4.85 4.85 0 012.55-3.05c-.02-.68-.07-1.33-.15-1.95H7.16a19.44 19.44 0 000 5h3.28zm-7.64 1c1 2.05 2.85 3.6 5.1 4.22a7.19 7.19 0 01-.84-1.52c-.32-.78-.58-1.7-.76-2.7H2.8zm3.35-1H2.4a8 8 0 010-5h3.75a20.52 20.52 0 000 5zM15 10a3.8 3.8 0 013.75 3.86c0 1.6-1.18 3.27-3.5 5.05a.4.4 0 01-.5 0c-2.32-1.78-3.5-3.46-3.5-5.05A3.8 3.8 0 0115 10zm0 2.57c-.69 0-1.25.58-1.25 1.29 0 .7.56 1.28 1.25 1.28s1.25-.57 1.25-1.28c0-.71-.56-1.29-1.25-1.29z" fill={primaryFill} /></svg>;
}

const GlobeLocationFilled = wrapIcon(rawSvg({}), 'GlobeLocationFilled');
export default GlobeLocationFilled;
      