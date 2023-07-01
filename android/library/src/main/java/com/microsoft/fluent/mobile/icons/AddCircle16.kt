package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.AddCircle16: ImageVector
  get() {
    if (_addCircle16 != null) {
      return _addCircle16!!
    }
    _addCircle16 = fluentIcon(name = "Regular.AddCircle16", 16f) {
      materialPath {
          moveTo(8.0F, 5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(2.0F)
          curveTo(10.776F, 7.5F, 11.0F, 7.724F, 11.0F, 8.0F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(2.0F)
          curveTo(8.5F, 10.776F, 8.276F, 11.0F, 8.0F, 11.0F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(5.224F, 8.5F, 5.0F, 8.276F, 5.0F, 8.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(-2.0F)
          curveTo(7.5F, 5.224F, 7.724F, 5.0F, 8.0F, 5.0F)
          close()
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()
          moveToRelative(6.0F, -5.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()        
      }
    }
    return _addCircle16!!
  }

private var _addCircle16: ImageVector? = null
