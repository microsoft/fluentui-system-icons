import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2.39a1.5 1.5 0 012 0l5.5 4.94c.32.28.5.69.5 1.12v.31a3 3 0 00-1.11-.63.5.5 0 00-.06-.06l-5.5-4.94a.5.5 0 00-.66 0l-5.5 4.94a.5.5 0 00-.17.38v7.05c0 .28.22.5.5.5H7a.5.5 0 00.5-.5V12c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v1h-.25c-.26 0-.52.04-.75.12V12a.5.5 0 00-.5-.5H9a.5.5 0 00-.5.5v3.5c0 .83-.67 1.5-1.5 1.5H4.5A1.5 1.5 0 013 15.5V8.45c0-.43.18-.84.5-1.12L9 2.39zm6 6.6a2 2 0 100 4 2 2 0 000-4zm-4 6.26c0-.7.56-1.25 1.25-1.25h5.5c.69 0 1.25.56 1.25 1.25v.09a3.7 3.7 0 01-.01.31l-.06.35a3 3 0 01-.46 1.03c-.55.78-1.59 1.47-3.47 1.47-1.89 0-2.93-.69-3.47-1.47a3 3 0 01-.53-1.48v-.3z" fill={primaryFill} /></svg>;
}

const HomePersonRegular = wrapIcon(rawSvg({}), 'HomePersonRegular');
export default HomePersonRegular;
      