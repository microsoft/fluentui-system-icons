package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SwipeRight20: ImageVector
  get() {
    if (_swipeRight20 != null) {
      return _swipeRight20!!
    }
    _swipeRight20 = fluentIcon(name = "Regular.SwipeRight20", 20f) {
      materialPath {
          moveTo(6.0F, 6.0F)
          curveToRelative(1.679F, 0.0F, 3.116F, 1.034F, 3.71F, 2.5F)
          horizontalLineTo(8.598F)
          curveTo(8.079F, 7.603F, 7.11F, 7.0F, 6.0F, 7.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          curveToRelative(1.11F, 0.0F, 2.08F, -0.603F, 2.599F, -1.5F)
          horizontalLineToRelative(1.11F)
          curveTo(9.116F, 12.966F, 7.68F, 14.0F, 6.0F, 14.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          close()
          moveToRelative(8.854F, 7.354F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.195F, -0.196F, -0.512F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.511F, 0.0F, 0.707F)
          lineTo(16.293F, 9.5F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 9.5F, 5.0F, 9.724F, 5.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(10.793F)
          lineToRelative(-2.146F, 2.146F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          close()        
      }
    }
    return _swipeRight20!!
  }

private var _swipeRight20: ImageVector? = null
