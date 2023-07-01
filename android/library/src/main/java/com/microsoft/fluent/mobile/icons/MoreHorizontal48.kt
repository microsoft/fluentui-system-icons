package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MoreHorizontal48: ImageVector
  get() {
    if (_moreHorizontal48 != null) {
      return _moreHorizontal48!!
    }
    _moreHorizontal48 = fluentIcon(name = "Filled.MoreHorizontal48", 48f) {
      materialPath {
          moveTo(16.0F, 24.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          reflectiveCurveTo(9.0F, 25.933F, 9.0F, 24.0F)
          reflectiveCurveToRelative(1.567F, -3.5F, 3.5F, -3.5F)
          reflectiveCurveTo(16.0F, 22.067F, 16.0F, 24.0F)
          close()
          moveToRelative(11.5F, 0.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          reflectiveCurveToRelative(-3.5F, -1.567F, -3.5F, -3.5F)
          reflectiveCurveToRelative(1.567F, -3.5F, 3.5F, -3.5F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          close()
          moveToRelative(8.0F, 3.5F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          reflectiveCurveToRelative(-1.567F, -3.5F, -3.5F, -3.5F)
          reflectiveCurveTo(32.0F, 22.067F, 32.0F, 24.0F)
          reflectiveCurveToRelative(1.567F, 3.5F, 3.5F, 3.5F)
          close()        
      }
    }
    return _moreHorizontal48!!
  }

private var _moreHorizontal48: ImageVector? = null
