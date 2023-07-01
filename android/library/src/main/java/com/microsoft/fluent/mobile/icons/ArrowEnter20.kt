package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowEnter20: ImageVector
  get() {
    if (_arrowEnter20 != null) {
      return _arrowEnter20!!
    }
    _arrowEnter20 = fluentIcon(name = "Regular.ArrowEnter20", 20f) {
      materialPath {
          moveTo(7.5F, 17.0F)
          curveTo(7.224F, 17.0F, 7.0F, 16.776F, 7.0F, 16.5F)
          reflectiveCurveTo(7.224F, 16.0F, 7.5F, 16.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(7.5F)
          curveTo(7.224F, 4.0F, 7.0F, 3.776F, 7.0F, 3.5F)
          reflectiveCurveTo(7.224F, 3.0F, 7.5F, 3.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(7.5F)
          close()
          moveTo(7.646F, 6.146F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          lineToRelative(2.646F, -2.646F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 10.5F, 1.0F, 10.276F, 1.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(8.793F)
          lineTo(7.647F, 6.854F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _arrowEnter20!!
  }

private var _arrowEnter20: ImageVector? = null
