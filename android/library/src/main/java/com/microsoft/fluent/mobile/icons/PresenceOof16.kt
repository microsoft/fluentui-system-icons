package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceOof16: ImageVector
  get() {
    if (_presenceOof16 != null) {
      return _presenceOof16!!
    }
    _presenceOof16 = fluentIcon(name = "Regular.PresenceOof16", 16f) {
      materialPath {
          moveTo(8.207F, 6.207F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.023F, 0.0F, -1.414F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineToRelative(-2.5F, 2.5F)
          curveTo(4.105F, 7.481F, 4.0F, 7.735F, 4.0F, 8.0F)
          curveToRelative(0.0F, 0.265F, 0.105F, 0.52F, 0.293F, 0.707F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.023F, 0.0F, -1.414F)
          lineTo(7.414F, 9.0F)
          horizontalLineTo(11.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(7.414F)
          lineToRelative(0.793F, -0.793F)
          close()
          moveTo(8.0F, 0.0F)
          curveTo(3.582F, 0.0F, 0.0F, 3.582F, 0.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()        
      }
    }
    return _presenceOof16!!
  }

private var _presenceOof16: ImageVector? = null
