package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PersonCircle32: ImageVector
  get() {
    if (_personCircle32 != null) {
      return _personCircle32!!
    }
    _personCircle32 = fluentIcon(name = "Regular.PersonCircle32", 32f) {
      materialPath {
          moveTo(16.0F, 4.0F)
          curveTo(9.373F, 4.0F, 4.0F, 9.373F, 4.0F, 16.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(22.627F, 4.0F, 16.0F, 4.0F)
          close()
          moveTo(2.0F, 16.0F)
          curveTo(2.0F, 8.268F, 8.268F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(14.0F, 6.268F, 14.0F, 14.0F)
          reflectiveCurveToRelative(-6.268F, 14.0F, -14.0F, 14.0F)
          reflectiveCurveTo(2.0F, 23.732F, 2.0F, 16.0F)
          close()
          moveToRelative(14.0F, 8.5F)
          curveToRelative(3.866F, 0.0F, 7.0F, -2.429F, 7.0F, -6.071F)
          curveTo(23.0F, 17.087F, 21.913F, 16.0F, 20.571F, 16.0F)
          horizontalLineTo(11.43F)
          curveTo(10.087F, 16.0F, 9.0F, 17.087F, 9.0F, 18.429F)
          curveToRelative(0.0F, 3.642F, 3.134F, 6.071F, 7.0F, 6.071F)
          close()
          moveToRelative(0.0F, -10.0F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          curveTo(19.75F, 8.679F, 18.071F, 7.0F, 16.0F, 7.0F)
          curveToRelative(-2.071F, 0.0F, -3.75F, 1.679F, -3.75F, 3.75F)
          curveToRelative(0.0F, 2.071F, 1.679F, 3.75F, 3.75F, 3.75F)
          close()        
      }
    }
    return _personCircle32!!
  }

private var _personCircle32: ImageVector? = null
