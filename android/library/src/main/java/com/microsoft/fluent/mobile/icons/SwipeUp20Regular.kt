package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SwipeUp20: ImageVector
  get() {
    if (_swipeUp20 != null) {
      return _swipeUp20!!
    }
    _swipeUp20 = fluentIcon(name = "Regular.SwipeUp20", 20f) {
      materialPath {
          moveTo(10.354F, 2.147F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.707F, 0.0F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineTo(9.5F, 3.707F)
          verticalLineTo(14.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(3.707F)
          lineToRelative(2.146F, 2.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-3.0F, -3.0F)
          close()
          moveTo(6.0F, 14.0F)
          curveToRelative(0.0F, -1.679F, 1.034F, -3.116F, 2.5F, -3.71F)
          verticalLineToRelative(1.111F)
          curveTo(7.603F, 11.921F, 7.0F, 12.89F, 7.0F, 14.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          reflectiveCurveToRelative(3.0F, -1.343F, 3.0F, -3.0F)
          curveToRelative(0.0F, -1.11F, -0.603F, -2.08F, -1.5F, -2.599F)
          verticalLineToRelative(-1.11F)
          curveTo(12.966F, 10.884F, 14.0F, 12.32F, 14.0F, 14.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          close()        
      }
    }
    return _swipeUp20!!
  }

private var _swipeUp20: ImageVector? = null
