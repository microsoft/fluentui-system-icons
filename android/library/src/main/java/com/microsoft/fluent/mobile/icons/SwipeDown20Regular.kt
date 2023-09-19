package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SwipeDown20: ImageVector
  get() {
    if (_swipeDown20 != null) {
      return _swipeDown20!!
    }
    _swipeDown20 = fluentIcon(name = "Regular.SwipeDown20", 20f) {
      materialPath {
          moveTo(14.0F, 6.0F)
          curveToRelative(0.0F, 1.679F, -1.034F, 3.116F, -2.5F, 3.71F)
          verticalLineTo(8.598F)
          curveTo(12.397F, 8.079F, 13.0F, 7.11F, 13.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveTo(7.0F, 4.343F, 7.0F, 6.0F)
          curveToRelative(0.0F, 1.11F, 0.603F, 2.08F, 1.5F, 2.599F)
          verticalLineToRelative(1.11F)
          curveTo(7.034F, 9.116F, 6.0F, 7.68F, 6.0F, 6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          close()
          moveTo(9.646F, 17.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineTo(10.5F, 16.293F)
          verticalLineTo(5.5F)
          curveTo(10.5F, 5.224F, 10.276F, 5.0F, 10.0F, 5.0F)
          reflectiveCurveTo(9.5F, 5.224F, 9.5F, 5.5F)
          verticalLineToRelative(10.793F)
          lineToRelative(-2.146F, -2.146F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(3.0F, 3.0F)
          close()        
      }
    }
    return _swipeDown20!!
  }

private var _swipeDown20: ImageVector? = null
