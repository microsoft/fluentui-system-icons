package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSwap20: ImageVector
  get() {
    if (_arrowSwap20 != null) {
      return _arrowSwap20!!
    }
    _arrowSwap20 = fluentIcon(name = "Regular.ArrowSwap20", 20f) {
      materialPath {
          moveTo(12.146F, 3.147F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineToRelative(3.0F, 3.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(14.293F, 7.0F)
          horizontalLineTo(4.5F)
          curveTo(4.224F, 7.0F, 4.0F, 6.776F, 4.0F, 6.5F)
          reflectiveCurveTo(4.224F, 6.0F, 4.5F, 6.0F)
          horizontalLineToRelative(9.793F)
          lineToRelative(-2.147F, -2.147F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          close()
          moveToRelative(-4.293F, 7.0F)
          curveToRelative(0.196F, 0.195F, 0.196F, 0.511F, 0.0F, 0.707F)
          lineTo(5.708F, 13.0F)
          horizontalLineTo(15.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(15.776F, 14.0F, 15.5F, 14.0F)
          horizontalLineTo(5.707F)
          lineToRelative(2.147F, 2.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()        
      }
    }
    return _arrowSwap20!!
  }

private var _arrowSwap20: ImageVector? = null
