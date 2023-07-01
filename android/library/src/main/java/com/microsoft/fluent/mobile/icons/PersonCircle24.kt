package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PersonCircle24: ImageVector
  get() {
    if (_personCircle24 != null) {
      return _personCircle24!!
    }
    _personCircle24 = fluentIcon(name = "Regular.PersonCircle24", 24f) {
      materialPath {
          moveTo(17.0F, 13.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(7.672F, 12.0F, 7.0F, 12.672F, 7.0F, 13.5F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 1.971F, 1.86F, 4.0F, 5.0F, 4.0F)
          curveToRelative(3.14F, 0.0F, 5.0F, -2.029F, 5.0F, -4.0F)
          verticalLineToRelative(-0.5F)
          close()
          moveToRelative(-2.25F, -5.25F)
          curveToRelative(0.0F, -1.519F, -1.231F, -2.75F, -2.75F, -2.75F)
          reflectiveCurveTo(9.25F, 6.731F, 9.25F, 8.25F)
          reflectiveCurveTo(10.481F, 11.0F, 12.0F, 11.0F)
          reflectiveCurveToRelative(2.75F, -1.231F, 2.75F, -2.75F)
          close()
          moveTo(22.0F, 12.0F)
          curveToRelative(0.0F, 5.523F, -4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          close()
          moveToRelative(-1.5F, 0.0F)
          curveToRelative(0.0F, -4.694F, -3.806F, -8.5F, -8.5F, -8.5F)
          reflectiveCurveTo(3.5F, 7.306F, 3.5F, 12.0F)
          reflectiveCurveToRelative(3.806F, 8.5F, 8.5F, 8.5F)
          reflectiveCurveToRelative(8.5F, -3.806F, 8.5F, -8.5F)
          close()        
      }
    }
    return _personCircle24!!
  }

private var _personCircle24: ImageVector? = null
