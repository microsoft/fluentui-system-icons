module.exports = function addRexportsToIndex(indexContents) {
    indexContents.push('export { FluentIconsProps } from \'./utils/FluentIconsProps.types\'');
    indexContents.push('export { default as wrapIcon } from \'./utils/wrapIcon\'');
    indexContents.push('export { default as bundleIcon } from \'./utils/bundleIcon\'');
    indexContents.push('export { createFluentIcon } from \'./utils/createFluentIcon\'');
    indexContents.push('export { createFluentFontIcon } from \'../utils/fonts/createFluentFontIcon\'');
    indexContents.push('export type { FluentIcon } from \'./utils/createFluentIcon\'');
    indexContents.push('export * from \'./utils/useIconState\'');
    indexContents.push('export * from \'./utils/constants\'');
    indexContents.push('export { IconDirectionContextProvider, useIconContext } from \'./contexts/index\'');
    indexContents.push('export type { IconDirectionContextValue } from \'./contexts/index\'');
}