package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowExit20: ImageVector
  get() {
    if (_arrowExit20 != null) {
      return _arrowExit20!!
    }
    _arrowExit20 = fluentIcon(name = "Regular.ArrowExit20", 20f) {
      materialPath {
          moveTo(12.5F, 17.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.776F, 16.0F, 12.5F, 16.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.5F)
          curveTo(12.776F, 4.0F, 13.0F, 3.776F, 13.0F, 3.5F)
          reflectiveCurveTo(12.776F, 3.0F, 12.5F, 3.0F)
          horizontalLineTo(6.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(6.5F)
          close()
          moveToRelative(1.146F, -10.854F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(2.647F, -2.646F)
          horizontalLineTo(7.5F)
          curveTo(7.224F, 10.5F, 7.0F, 10.276F, 7.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(8.793F)
          lineToRelative(-2.647F, -2.646F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _arrowExit20!!
  }

private var _arrowExit20: ImageVector? = null
