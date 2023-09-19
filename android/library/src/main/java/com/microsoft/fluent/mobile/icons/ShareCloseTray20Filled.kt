package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShareCloseTray20: ImageVector
  get() {
    if (_shareCloseTray20 != null) {
      return _shareCloseTray20!!
    }
    _shareCloseTray20 = fluentIcon(name = "Filled.ShareCloseTray20", 20f) {
      materialPath {
          moveTo(4.0F, 16.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(6.0F, -10.0F)
          curveTo(9.724F, 6.0F, 9.5F, 6.224F, 9.5F, 6.5F)
          verticalLineToRelative(5.793F)
          lineToRelative(-1.646F, -1.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(2.5F, -2.5F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(10.5F, 12.293F)
          verticalLineTo(6.5F)
          curveTo(10.5F, 6.224F, 10.276F, 6.0F, 10.0F, 6.0F)
          close()        
      }
    }
    return _shareCloseTray20!!
  }

private var _shareCloseTray20: ImageVector? = null
