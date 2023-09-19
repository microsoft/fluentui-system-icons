package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Emoji20: ImageVector
  get() {
    if (_emoji20 != null) {
      return _emoji20!!
    }
    _emoji20 = fluentIcon(name = "Filled.Emoji20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          close()
          moveTo(7.155F, 12.427F)
          curveToRelative(-0.195F, -0.196F, -0.512F, -0.197F, -0.707F, -0.002F)
          curveToRelative(-0.196F, 0.195F, -0.197F, 0.511F, -0.003F, 0.707F)
          curveToRelative(1.892F, 1.904F, 4.933F, 1.971F, 6.905F, 0.194F)
          lineToRelative(0.205F, -0.194F)
          lineToRelative(0.057F, -0.07F)
          curveToRelative(0.135F, -0.195F, 0.114F, -0.464F, -0.06F, -0.637F)
          reflectiveCurveToRelative(-0.443F, -0.191F, -0.638F, -0.056F)
          lineToRelative(-0.069F, 0.058F)
          lineToRelative(-0.178F, 0.17F)
          curveToRelative(-1.58F, 1.408F, -4.003F, 1.35F, -5.512F, -0.17F)
          close()
          moveTo(12.5F, 7.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(-5.0F, 0.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()        
      }
    }
    return _emoji20!!
  }

private var _emoji20: ImageVector? = null
