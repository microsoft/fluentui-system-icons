import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 3.5c.28 0 .5.22.5.5v4.9c.53-.56 1.23-.9 2-.9 1.66 0 3 1.57 3 3.5S15.66 15 14 15c-.77 0-1.47-.34-2-.9v.4a.5.5 0 01-1 0V4c0-.28.22-.5.5-.5zM14 14c.97 0 2-.97 2-2.5S14.97 9 14 9s-2 .97-2 2.5 1.03 2.5 2 2.5zM5.9 8.69c-.5.02-.92.13-1.18.26a.5.5 0 11-.44-.9c.4-.2.98-.34 1.58-.36.6-.03 1.27.07 1.86.36C9 8.7 9 9.96 9 10.46v4.04a.5.5 0 01-1 0v-.41c-.91.66-2.01 1.1-3.13.8a2.36 2.36 0 01-.65-4.3c.72-.48 1.59-.61 2.38-.57.49.02.97.11 1.4.25-.02-.48-.12-1.02-.72-1.32-.4-.2-.9-.28-1.39-.26zM8 11.33c-.4-.17-.92-.29-1.45-.32-.66-.03-1.3.09-1.77.4-1.12.75-.77 2.21.35 2.5.9.25 1.94-.24 2.87-1.12v-1.46z" fill={primaryFill} /></svg>;
}

const TextCaseLowercaseRegular = wrapIcon(rawSvg({}), 'TextCaseLowercaseRegular');
export default TextCaseLowercaseRegular;
      