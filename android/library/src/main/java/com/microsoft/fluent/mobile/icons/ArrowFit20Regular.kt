package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowFit20: ImageVector
  get() {
    if (_arrowFit20 != null) {
      return _arrowFit20!!
    }
    _arrowFit20 = fluentIcon(name = "Regular.ArrowFit20", 20f) {
      materialPath {
          moveTo(5.354F, 6.646F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(3.707F, 9.0F)
          horizontalLineTo(8.5F)
          curveTo(8.776F, 9.0F, 9.0F, 9.224F, 9.0F, 9.5F)
          reflectiveCurveTo(8.776F, 10.0F, 8.5F, 10.0F)
          horizontalLineTo(3.707F)
          lineToRelative(1.647F, 1.646F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(2.5F, -2.5F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          close()
          moveToRelative(9.292F, 0.0F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          lineTo(16.293F, 10.0F)
          horizontalLineTo(11.5F)
          curveTo(11.224F, 10.0F, 11.0F, 9.776F, 11.0F, 9.5F)
          reflectiveCurveTo(11.224F, 9.0F, 11.5F, 9.0F)
          horizontalLineToRelative(4.793F)
          lineToRelative(-1.647F, -1.646F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _arrowFit20!!
  }

private var _arrowFit20: ImageVector? = null
