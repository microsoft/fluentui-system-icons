package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowFitIn16: ImageVector
  get() {
    if (_arrowFitIn16 != null) {
      return _arrowFitIn16!!
    }
    _arrowFitIn16 = fluentIcon(name = "Regular.ArrowFitIn16", 16f) {
      materialPath {
          moveTo(4.854F, 5.146F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(5.293F, 7.0F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 7.0F, 1.0F, 7.224F, 1.0F, 7.5F)
          reflectiveCurveTo(1.224F, 8.0F, 1.5F, 8.0F)
          horizontalLineToRelative(3.793F)
          lineTo(4.146F, 9.146F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.708F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(-2.0F, -2.0F)
          close()
          moveToRelative(7.0F, 0.708F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(10.707F, 8.0F)
          horizontalLineTo(14.5F)
          curveTo(14.776F, 8.0F, 15.0F, 7.776F, 15.0F, 7.5F)
          reflectiveCurveTo(14.776F, 7.0F, 14.5F, 7.0F)
          horizontalLineToRelative(-3.793F)
          lineToRelative(1.147F, -1.146F)
          close()        
      }
    }
    return _arrowFitIn16!!
  }

private var _arrowFitIn16: ImageVector? = null
