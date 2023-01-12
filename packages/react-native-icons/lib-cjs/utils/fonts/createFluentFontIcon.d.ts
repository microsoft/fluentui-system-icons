import * as React from 'react';
import { FluentIconsProps } from '../FluentIconsProps.types';
export declare const enum FontFile {
    Filled = 0,
    Regular = 1,
    Resizable = 2
}
export declare function createFluentFontIcon(displayName: string, codepoint: string, font: FontFile, fontSize?: number): React.FC<FluentIconsProps<React.HTMLAttributes<HTMLElement>>> & {
    codepoint: string;
};
//# sourceMappingURL=createFluentFontIcon.d.ts.map