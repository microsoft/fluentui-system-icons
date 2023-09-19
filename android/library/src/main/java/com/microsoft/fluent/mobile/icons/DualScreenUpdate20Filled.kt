package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DualScreenUpdate20: ImageVector
  get() {
    if (_dualScreenUpdate20 != null) {
      return _dualScreenUpdate20!!
    }
    _dualScreenUpdate20 = fluentIcon(name = "Filled.DualScreenUpdate20", 20f) {
      materialPath {
          moveTo(16.0F, 16.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(16.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          close()
          moveTo(4.0F, 4.0F)
          horizontalLineToRelative(5.5F)
          verticalLineToRelative(12.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()
          moveToRelative(12.854F, 7.854F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(15.0F, 12.293F)
          verticalLineTo(6.5F)
          curveTo(15.0F, 6.224F, 14.776F, 6.0F, 14.5F, 6.0F)
          reflectiveCurveTo(14.0F, 6.224F, 14.0F, 6.5F)
          verticalLineToRelative(5.793F)
          lineToRelative(-1.146F, -1.147F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          close()        
      }
    }
    return _dualScreenUpdate20!!
  }

private var _dualScreenUpdate20: ImageVector? = null
