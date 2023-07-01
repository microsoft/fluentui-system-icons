package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Location12: ImageVector
  get() {
    if (_location12 != null) {
      return _location12!!
    }
    _location12 = fluentIcon(name = "Regular.Location12", 12f) {
      materialPath {
          moveTo(6.0F, 0.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, 2.015F, 4.5F, 4.5F)
          curveToRelative(0.0F, 1.863F, -1.42F, 3.815F, -4.2F, 5.9F)
          curveToRelative(-0.178F, 0.133F, -0.422F, 0.133F, -0.6F, 0.0F)
          curveTo(2.92F, 8.815F, 1.5F, 6.863F, 1.5F, 5.0F)
          curveToRelative(0.0F, -2.485F, 2.015F, -4.5F, 4.5F, -4.5F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(4.067F, 1.5F, 2.5F, 3.067F, 2.5F, 5.0F)
          curveToRelative(0.0F, 1.355F, 1.06F, 2.918F, 3.224F, 4.653F)
          lineTo(6.0F, 9.871F)
          lineToRelative(0.276F, -0.218F)
          curveTo(8.441F, 7.918F, 9.5F, 6.355F, 9.5F, 5.0F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          close()
          moveTo(6.0F, 4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveTo(6.552F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveTo(5.0F, 5.552F, 5.0F, 5.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _location12!!
  }

private var _location12: ImageVector? = null
