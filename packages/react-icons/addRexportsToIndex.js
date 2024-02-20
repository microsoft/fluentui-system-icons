module.exports = function addRexportsToIndex(indexContents, rootPath = `.`) {
    indexContents.push(`export { FluentIconsProps } from \'${rootPath}/utils/FluentIconsProps.types\'`);
    indexContents.push(`export { default as wrapIcon } from \'${rootPath}/utils/wrapIcon\'`);
    indexContents.push(`export { default as bundleIcon } from \'${rootPath}/utils/bundleIcon\'`);
    indexContents.push(`export { createFluentIcon } from \'${rootPath}/utils/createFluentIcon\'`);
    indexContents.push(`export { createFluentFontIcon } from \'${rootPath}/utils/fonts/createFluentFontIcon\'`);
    indexContents.push(`export type { FluentIcon } from \'${rootPath}/utils/createFluentIcon\'`);
    indexContents.push(`export * from \'${rootPath}/utils/useIconState\'`);
    indexContents.push(`export * from \'${rootPath}/utils/constants\'`);
    indexContents.push(`export { IconDirectionContextProvider, useIconContext } from \'${rootPath}/contexts/index\'`);
    indexContents.push(`export type { IconDirectionContextValue } from \'${rootPath}/contexts/index\'`);
}