package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowHookUpLeft16: ImageVector
  get() {
    if (_arrowHookUpLeft16 != null) {
      return _arrowHookUpLeft16!!
    }
    _arrowHookUpLeft16 = fluentIcon(name = "Regular.ArrowHookUpLeft16", 16f) {
      materialPath {
          moveTo(5.0F, 11.5F)
          curveTo(5.0F, 11.776F, 5.224F, 12.0F, 5.5F, 12.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.136F, 0.0F, 2.024F, -0.43F, 2.624F, -1.105F)
          curveTo(11.715F, 10.229F, 12.0F, 9.357F, 12.0F, 8.5F)
          curveToRelative(0.0F, -0.856F, -0.285F, -1.73F, -0.876F, -2.395F)
          curveTo(10.524F, 5.431F, 9.636F, 5.0F, 8.5F, 5.0F)
          horizontalLineTo(4.707F)
          lineToRelative(1.147F, -1.147F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(4.707F, 6.0F)
          horizontalLineTo(8.5F)
          curveToRelative(0.864F, 0.0F, 1.476F, 0.32F, 1.876F, 0.77F)
          curveTo(10.785F, 7.23F, 11.0F, 7.857F, 11.0F, 8.5F)
          reflectiveCurveToRelative(-0.215F, 1.27F, -0.624F, 1.73F)
          curveTo(9.976F, 10.68F, 9.364F, 11.0F, 8.5F, 11.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(5.224F, 11.0F, 5.0F, 11.224F, 5.0F, 11.5F)
          close()        
      }
    }
    return _arrowHookUpLeft16!!
  }

private var _arrowHookUpLeft16: ImageVector? = null
