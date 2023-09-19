package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FolderOpen16: ImageVector
  get() {
    if (_folderOpen16 != null) {
      return _folderOpen16!!
    }
    _folderOpen16 = fluentIcon(name = "Filled.FolderOpen16", 16f) {
      materialPath {
          moveTo(3.0F, 3.0F)
          curveTo(1.895F, 3.0F, 1.0F, 3.895F, 1.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.413F, 0.125F, 0.797F, 0.34F, 1.116F)
          lineTo(2.81F, 7.08F)
          curveTo(2.997F, 6.44F, 3.583F, 6.0F, 4.25F, 6.0F)
          horizontalLineToRelative(8.753F)
          verticalLineTo(5.996F)
          curveToRelative(0.0F, -1.104F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.174F)
          lineTo(5.066F, 3.11F)
          curveTo(4.976F, 3.04F, 4.866F, 3.0F, 4.753F, 3.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(11.941F, 4.64F)
          curveTo(15.035F, 7.32F, 14.795F, 7.0F, 14.461F, 7.0F)
          horizontalLineTo(4.25F)
          curveTo(4.028F, 7.0F, 3.832F, 7.147F, 3.77F, 7.36F)
          lineToRelative(-1.46F, 5.0F)
          curveTo(2.218F, 12.68F, 2.458F, 13.0F, 2.79F, 13.0F)
          horizontalLineToRelative(9.46F)
          curveToRelative(0.667F, 0.0F, 1.253F, -0.44F, 1.44F, -1.08F)
          lineToRelative(1.251F, -4.28F)
          close()        
      }
    }
    return _folderOpen16!!
  }

private var _folderOpen16: ImageVector? = null
