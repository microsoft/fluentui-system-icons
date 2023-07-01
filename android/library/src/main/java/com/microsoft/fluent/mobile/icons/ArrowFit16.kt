package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowFit16: ImageVector
  get() {
    if (_arrowFit16 != null) {
      return _arrowFit16!!
    }
    _arrowFit16 = fluentIcon(name = "Regular.ArrowFit16", 16f) {
      materialPath {
          moveTo(3.853F, 5.146F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          lineTo(2.708F, 7.0F)
          horizontalLineTo(6.5F)
          curveTo(6.776F, 7.0F, 7.0F, 7.224F, 7.0F, 7.5F)
          reflectiveCurveTo(6.776F, 8.0F, 6.5F, 8.0F)
          horizontalLineTo(2.707F)
          lineToRelative(1.147F, 1.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.708F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()
          moveToRelative(8.293F, 0.0F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(13.293F, 8.0F)
          horizontalLineTo(9.5F)
          curveTo(9.224F, 8.0F, 9.0F, 7.776F, 9.0F, 7.5F)
          reflectiveCurveTo(9.224F, 7.0F, 9.5F, 7.0F)
          horizontalLineToRelative(3.793F)
          lineToRelative(-1.147F, -1.146F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _arrowFit16!!
  }

private var _arrowFit16: ImageVector? = null
