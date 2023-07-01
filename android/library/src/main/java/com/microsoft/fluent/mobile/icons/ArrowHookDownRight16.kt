package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowHookDownRight16: ImageVector
  get() {
    if (_arrowHookDownRight16 != null) {
      return _arrowHookDownRight16!!
    }
    _arrowHookDownRight16 = fluentIcon(name = "Regular.ArrowHookDownRight16", 16f) {
      materialPath {
          moveTo(4.876F, 5.105F)
          curveTo(5.476F, 4.431F, 6.364F, 4.0F, 7.5F, 4.0F)
          horizontalLineToRelative(3.0F)
          curveTo(10.776F, 4.0F, 11.0F, 4.224F, 11.0F, 4.5F)
          reflectiveCurveTo(10.776F, 5.0F, 10.5F, 5.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(6.636F, 5.0F, 6.024F, 5.32F, 5.624F, 5.77F)
          curveTo(5.215F, 6.23F, 5.0F, 6.857F, 5.0F, 7.5F)
          reflectiveCurveToRelative(0.215F, 1.27F, 0.624F, 1.73F)
          curveTo(6.024F, 9.68F, 6.636F, 10.0F, 7.5F, 10.0F)
          horizontalLineToRelative(3.793F)
          lineToRelative(-1.146F, -1.146F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.707F)
          lineTo(11.293F, 11.0F)
          horizontalLineTo(7.5F)
          curveToRelative(-1.136F, 0.0F, -2.024F, -0.43F, -2.624F, -1.105F)
          curveTo(4.285F, 9.229F, 4.0F, 8.357F, 4.0F, 7.5F)
          curveToRelative(0.0F, -0.856F, 0.285F, -1.73F, 0.876F, -2.395F)
          close()        
      }
    }
    return _arrowHookDownRight16!!
  }

private var _arrowHookDownRight16: ImageVector? = null
