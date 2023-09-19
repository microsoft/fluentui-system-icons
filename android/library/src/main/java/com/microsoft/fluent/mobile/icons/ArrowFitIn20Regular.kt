package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowFitIn20: ImageVector
  get() {
    if (_arrowFitIn20 != null) {
      return _arrowFitIn20!!
    }
    _arrowFitIn20 = fluentIcon(name = "Regular.ArrowFitIn20", 20f) {
      materialPath {
          moveTo(5.646F, 7.354F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          lineTo(7.293F, 10.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 10.0F, 2.0F, 9.776F, 2.0F, 9.5F)
          reflectiveCurveTo(2.224F, 9.0F, 2.5F, 9.0F)
          horizontalLineToRelative(4.793F)
          lineTo(5.646F, 7.354F)
          close()
          moveToRelative(8.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          lineTo(12.707F, 10.0F)
          horizontalLineTo(17.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 9.0F, 17.5F, 9.0F)
          horizontalLineToRelative(-4.793F)
          lineToRelative(1.647F, -1.646F)
          close()        
      }
    }
    return _arrowFitIn20!!
  }

private var _arrowFitIn20: ImageVector? = null
