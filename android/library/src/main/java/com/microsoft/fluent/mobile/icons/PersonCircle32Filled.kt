package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonCircle32: ImageVector
  get() {
    if (_personCircle32 != null) {
      return _personCircle32!!
    }
    _personCircle32 = fluentIcon(name = "Filled.PersonCircle32", 32f) {
      materialPath {
          moveTo(16.0F, 2.0F)
          curveTo(8.268F, 2.0F, 2.0F, 8.268F, 2.0F, 16.0F)
          reflectiveCurveToRelative(6.268F, 14.0F, 14.0F, 14.0F)
          reflectiveCurveToRelative(14.0F, -6.268F, 14.0F, -14.0F)
          reflectiveCurveTo(23.732F, 2.0F, 16.0F, 2.0F)
          close()
          moveToRelative(0.0F, 22.5F)
          curveToRelative(-3.866F, 0.0F, -7.0F, -2.429F, -7.0F, -6.071F)
          curveTo(9.0F, 17.087F, 10.087F, 16.0F, 11.429F, 16.0F)
          horizontalLineToRelative(9.142F)
          curveTo(21.913F, 16.0F, 23.0F, 17.087F, 23.0F, 18.429F)
          curveToRelative(0.0F, 3.642F, -3.134F, 6.071F, -7.0F, 6.071F)
          close()
          moveToRelative(0.0F, -10.0F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          curveTo(12.25F, 8.679F, 13.929F, 7.0F, 16.0F, 7.0F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          close()        
      }
    }
    return _personCircle32!!
  }

private var _personCircle32: ImageVector? = null
