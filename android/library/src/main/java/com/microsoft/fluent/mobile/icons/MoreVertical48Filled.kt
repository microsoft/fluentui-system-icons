package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MoreVertical48: ImageVector
  get() {
    if (_moreVertical48 != null) {
      return _moreVertical48!!
    }
    _moreVertical48 = fluentIcon(name = "Filled.MoreVertical48", 48f) {
      materialPath {
          moveTo(24.0F, 16.0F)
          curveToRelative(-1.933F, 0.0F, -3.5F, -1.567F, -3.5F, -3.5F)
          reflectiveCurveTo(22.067F, 9.0F, 24.0F, 9.0F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          reflectiveCurveTo(25.933F, 16.0F, 24.0F, 16.0F)
          close()
          moveToRelative(0.0F, 11.5F)
          curveToRelative(-1.933F, 0.0F, -3.5F, -1.567F, -3.5F, -3.5F)
          reflectiveCurveToRelative(1.567F, -3.5F, 3.5F, -3.5F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          reflectiveCurveToRelative(-1.567F, 3.5F, -3.5F, 3.5F)
          close()
          moveToRelative(-3.5F, 8.0F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          reflectiveCurveToRelative(3.5F, -1.567F, 3.5F, -3.5F)
          reflectiveCurveTo(25.933F, 32.0F, 24.0F, 32.0F)
          reflectiveCurveToRelative(-3.5F, 1.567F, -3.5F, 3.5F)
          close()        
      }
    }
    return _moreVertical48!!
  }

private var _moreVertical48: ImageVector? = null
