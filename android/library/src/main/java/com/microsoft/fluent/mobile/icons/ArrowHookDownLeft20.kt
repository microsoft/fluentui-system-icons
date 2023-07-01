package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowHookDownLeft20: ImageVector
  get() {
    if (_arrowHookDownLeft20 != null) {
      return _arrowHookDownLeft20!!
    }
    _arrowHookDownLeft20 = fluentIcon(name = "Regular.ArrowHookDownLeft20", 20f) {
      materialPath {
          moveTo(6.0F, 4.5F)
          curveTo(6.0F, 4.224F, 6.224F, 4.0F, 6.5F, 4.0F)
          horizontalLineTo(11.0F)
          curveToRelative(1.636F, 0.0F, 2.9F, 0.618F, 3.749F, 1.574F)
          curveTo(15.59F, 6.521F, 16.0F, 7.77F, 16.0F, 9.0F)
          curveToRelative(0.0F, 1.232F, -0.41F, 2.48F, -1.251F, 3.426F)
          curveTo(13.899F, 13.382F, 12.636F, 14.0F, 11.0F, 14.0F)
          horizontalLineTo(5.707F)
          lineToRelative(2.647F, 2.646F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          lineToRelative(3.5F, -3.5F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(5.707F, 13.0F)
          horizontalLineTo(11.0F)
          curveToRelative(1.364F, 0.0F, 2.35F, -0.507F, 3.001F, -1.238F)
          curveTo(14.66F, 11.02F, 15.0F, 10.018F, 15.0F, 9.0F)
          curveToRelative(0.0F, -1.019F, -0.34F, -2.02F, -0.999F, -2.762F)
          curveTo(13.351F, 5.507F, 12.364F, 5.0F, 11.0F, 5.0F)
          horizontalLineTo(6.5F)
          curveTo(6.224F, 5.0F, 6.0F, 4.776F, 6.0F, 4.5F)
          close()        
      }
    }
    return _arrowHookDownLeft20!!
  }

private var _arrowHookDownLeft20: ImageVector? = null
