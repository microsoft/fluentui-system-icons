package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonClock24: ImageVector
  get() {
    if (_personClock24 != null) {
      return _personClock24!!
    }
    _personClock24 = fluentIcon(name = "Filled.PersonClock24", 24f) {
      materialPath {
          moveTo(11.0F, 17.5F)
          curveToRelative(0.0F, -1.288F, 0.375F, -2.49F, 1.022F, -3.5F)
          horizontalLineToRelative(-7.77F)
          curveToRelative(-1.241F, 0.0F, -2.248F, 1.007F, -2.248F, 2.25F)
          verticalLineToRelative(0.577F)
          curveToRelative(0.0F, 0.892F, 0.318F, 1.756F, 0.898F, 2.435F)
          curveToRelative(1.566F, 1.834F, 3.952F, 2.74F, 7.098F, 2.74F)
          curveToRelative(0.931F, 0.0F, 1.796F, -0.08F, 2.593F, -0.24F)
          curveTo(11.6F, 20.623F, 11.0F, 19.133F, 11.0F, 17.5F)
          close()
          moveTo(10.0F, 2.005F)
          curveToRelative(2.762F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.238F, 5.0F, -5.0F, 5.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          close()
          moveTo(17.5F, 12.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, 2.463F, 5.5F, 5.5F)
          curveToRelative(0.0F, 3.038F, -2.462F, 5.5F, -5.5F, 5.5F)
          reflectiveCurveTo(12.0F, 20.538F, 12.0F, 17.5F)
          curveToRelative(0.0F, -3.037F, 2.462F, -5.5F, 5.5F, -5.5F)
          close()
          moveToRelative(2.0F, 5.5F)
          horizontalLineToRelative(-2.0F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _personClock24!!
  }

private var _personClock24: ImageVector? = null
