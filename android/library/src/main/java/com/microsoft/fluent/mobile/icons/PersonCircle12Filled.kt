package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonCircle12: ImageVector
  get() {
    if (_personCircle12 != null) {
      return _personCircle12!!
    }
    _personCircle12 = fluentIcon(name = "Filled.PersonCircle12", 12f) {
      materialPath {
          moveTo(11.0F, 6.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveTo(1.0F, 8.761F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          close()
          moveTo(4.217F, 6.264F)
          curveTo(4.087F, 6.41F, 4.0F, 6.609F, 4.0F, 6.81F)
          verticalLineToRelative(0.16F)
          curveTo(4.0F, 7.787F, 4.817F, 8.5F, 6.0F, 8.5F)
          reflectiveCurveToRelative(2.0F, -0.713F, 2.0F, -1.53F)
          verticalLineTo(6.81F)
          curveToRelative(0.0F, -0.202F, -0.087F, -0.4F, -0.217F, -0.545F)
          curveTo(7.653F, 6.117F, 7.457F, 6.0F, 7.225F, 6.0F)
          horizontalLineToRelative(-2.45F)
          curveTo(4.543F, 6.0F, 4.347F, 6.118F, 4.217F, 6.264F)
          close()
          moveTo(6.0F, 5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveTo(6.552F, 3.0F, 6.0F, 3.0F)
          reflectiveCurveTo(5.0F, 3.448F, 5.0F, 4.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()        
      }
    }
    return _personCircle12!!
  }

private var _personCircle12: ImageVector? = null
