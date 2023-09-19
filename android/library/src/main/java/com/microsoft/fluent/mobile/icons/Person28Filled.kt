package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Person28: ImageVector
  get() {
    if (_person28 != null) {
      return _person28!!
    }
    _person28 = fluentIcon(name = "Filled.Person28", 28f) {
      materialPath {
          moveTo(21.0F, 16.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(0.715F)
          curveTo(24.0F, 23.292F, 19.79F, 26.0F, 14.0F, 26.0F)
          reflectiveCurveTo(4.0F, 23.433F, 4.0F, 19.715F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(14.0F)
          close()
          moveTo(14.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()        
      }
    }
    return _person28!!
  }

private var _person28: ImageVector? = null
