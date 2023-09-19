package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FolderOpen20: ImageVector
  get() {
    if (_folderOpen20 != null) {
      return _folderOpen20!!
    }
    _folderOpen20 = fluentIcon(name = "Filled.FolderOpen20", 20f) {
      materialPath {
          moveTo(2.0F, 5.5F)
          curveTo(2.0F, 4.12F, 3.12F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(2.664F)
          curveToRelative(0.325F, 0.0F, 0.64F, 0.105F, 0.9F, 0.3F)
          lineToRelative(1.6F, 1.2F)
          horizontalLineToRelative(4.832F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineToRelative(0.002F)
          horizontalLineTo(5.824F)
          curveToRelative(-0.718F, 0.0F, -1.335F, 0.509F, -1.473F, 1.213F)
          lineToRelative(-1.577F, 8.09F)
          curveToRelative(-0.476F, -0.455F, -0.773F, -1.096F, -0.773F, -1.807F)
          lineTo(2.0F, 5.5F)
          close()
          moveToRelative(1.773F, 10.907F)
          curveToRelative(-0.06F, 0.308F, 0.176F, 0.595F, 0.491F, 0.595F)
          horizontalLineTo(15.18F)
          curveToRelative(0.718F, 0.0F, 1.336F, -0.51F, 1.472F, -1.214F)
          lineToRelative(1.395F, -7.19F)
          curveToRelative(0.06F, -0.31F, -0.177F, -0.596F, -0.491F, -0.596F)
          horizontalLineTo(5.824F)
          curveToRelative(-0.24F, 0.0F, -0.445F, 0.17F, -0.491F, 0.404F)
          lineToRelative(-1.56F, 8.0F)
          close()        
      }
    }
    return _folderOpen20!!
  }

private var _folderOpen20: ImageVector? = null
