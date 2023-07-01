package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowHookUpLeft20: ImageVector
  get() {
    if (_arrowHookUpLeft20 != null) {
      return _arrowHookUpLeft20!!
    }
    _arrowHookUpLeft20 = fluentIcon(name = "Regular.ArrowHookUpLeft20", 20f) {
      materialPath {
          moveTo(6.0F, 15.5F)
          curveTo(6.0F, 15.776F, 6.224F, 16.0F, 6.5F, 16.0F)
          horizontalLineTo(11.0F)
          curveToRelative(1.636F, 0.0F, 2.9F, -0.618F, 3.749F, -1.574F)
          curveTo(15.59F, 13.479F, 16.0F, 12.232F, 16.0F, 11.0F)
          curveToRelative(0.0F, -1.232F, -0.41F, -2.48F, -1.251F, -3.426F)
          curveTo(13.899F, 6.618F, 12.636F, 6.0F, 11.0F, 6.0F)
          horizontalLineTo(5.707F)
          lineToRelative(2.647F, -2.647F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(5.707F, 7.0F)
          horizontalLineTo(11.0F)
          curveToRelative(1.364F, 0.0F, 2.35F, 0.507F, 3.001F, 1.238F)
          curveTo(14.66F, 8.98F, 15.0F, 9.982F, 15.0F, 11.0F)
          reflectiveCurveToRelative(-0.34F, 2.02F, -0.999F, 2.762F)
          curveTo(13.351F, 14.493F, 12.364F, 15.0F, 11.0F, 15.0F)
          horizontalLineTo(6.5F)
          curveTo(6.224F, 15.0F, 6.0F, 15.224F, 6.0F, 15.5F)
          close()        
      }
    }
    return _arrowHookUpLeft20!!
  }

private var _arrowHookUpLeft20: ImageVector? = null
