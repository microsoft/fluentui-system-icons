package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowHookDownLeft20: ImageVector
  get() {
    if (_arrowHookDownLeft20 != null) {
      return _arrowHookDownLeft20!!
    }
    _arrowHookDownLeft20 = fluentIcon(name = "Filled.ArrowHookDownLeft20", 20f) {
      materialPath {
          moveTo(6.0F, 4.75F)
          curveTo(6.0F, 4.336F, 6.336F, 4.0F, 6.75F, 4.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(1.586F, 0.0F, 2.696F, 0.621F, 3.53F, 1.588F)
          curveTo(15.6F, 6.54F, 16.0F, 7.784F, 16.0F, 9.0F)
          curveToRelative(0.0F, 1.216F, -0.3F, 2.46F, -1.12F, 3.412F)
          curveTo(14.046F, 13.379F, 12.836F, 14.0F, 11.25F, 14.0F)
          horizontalLineTo(6.56F)
          lineToRelative(2.22F, 2.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-3.5F, -3.5F)
          curveTo(4.076F, 13.636F, 3.996F, 13.44F, 4.0F, 13.236F)
          curveToRelative(0.004F, -0.204F, 0.09F, -0.397F, 0.24F, -0.536F)
          lineToRelative(3.5F, -3.25F)
          curveTo(8.043F, 9.17F, 8.518F, 9.186F, 8.8F, 9.49F)
          curveToRelative(0.281F, 0.303F, 0.264F, 0.778F, -0.04F, 1.06F)
          lineToRelative(-2.1F, 1.95F)
          horizontalLineToRelative(4.59F)
          curveToRelative(1.164F, 0.0F, 1.86F, -0.441F, 2.4F, -1.068F)
          curveTo(14.204F, 10.79F, 14.5F, 9.909F, 14.5F, 9.0F)
          reflectiveCurveToRelative(-0.296F, -1.79F, -0.85F, -2.432F)
          curveTo(13.11F, 5.941F, 12.414F, 5.5F, 11.25F, 5.5F)
          horizontalLineToRelative(-4.5F)
          curveTo(6.336F, 5.5F, 6.0F, 5.164F, 6.0F, 4.75F)
          close()        
      }
    }
    return _arrowHookDownLeft20!!
  }

private var _arrowHookDownLeft20: ImageVector? = null
