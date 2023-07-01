package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FolderOpen16: ImageVector
  get() {
    if (_folderOpen16 != null) {
      return _folderOpen16!!
    }
    _folderOpen16 = fluentIcon(name = "Regular.FolderOpen16", 16f) {
      materialPath {
          moveTo(13.003F, 6.0F)
          verticalLineTo(5.996F)
          curveToRelative(0.0F, -1.104F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.174F)
          lineTo(5.066F, 3.11F)
          curveTo(4.976F, 3.04F, 4.866F, 3.0F, 4.753F, 3.0F)
          horizontalLineTo(3.0F)
          curveTo(1.895F, 3.0F, 1.0F, 3.895F, 1.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(9.25F)
          curveToRelative(0.667F, 0.0F, 1.253F, -0.44F, 1.44F, -1.08F)
          lineToRelative(1.17F, -4.0F)
          curveTo(15.14F, 6.96F, 14.42F, 6.0F, 13.42F, 6.0F)
          horizontalLineToRelative(-0.417F)
          close()
          moveTo(3.0F, 4.0F)
          horizontalLineToRelative(1.578F)
          lineToRelative(1.11F, 0.887F)
          curveToRelative(0.088F, 0.07F, 0.198F, 0.11F, 0.311F, 0.11F)
          horizontalLineToRelative(5.004F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.447F, 1.0F, 1.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(4.25F)
          curveTo(3.583F, 6.0F, 2.997F, 6.44F, 2.81F, 7.08F)
          lineTo(2.0F, 9.857F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveToRelative(0.77F, 3.36F)
          curveTo(3.832F, 7.147F, 4.028F, 7.0F, 4.25F, 7.0F)
          horizontalLineToRelative(9.17F)
          curveToRelative(0.333F, 0.0F, 0.573F, 0.32F, 0.48F, 0.64F)
          lineToRelative(-1.17F, 4.0F)
          curveTo(12.668F, 11.853F, 12.472F, 12.0F, 12.25F, 12.0F)
          horizontalLineTo(3.083F)
          curveToRelative(-0.333F, 0.0F, -0.573F, -0.32F, -0.48F, -0.64F)
          lineToRelative(1.167F, -4.0F)
          close()        
      }
    }
    return _folderOpen16!!
  }

private var _folderOpen16: ImageVector? = null
