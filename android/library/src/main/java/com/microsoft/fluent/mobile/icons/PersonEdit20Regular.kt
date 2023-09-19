package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PersonEdit20: ImageVector
  get() {
    if (_personEdit20 != null) {
      return _personEdit20!!
    }
    _personEdit20 = fluentIcon(name = "Regular.PersonEdit20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveTo(7.79F, 2.0F, 6.0F, 3.79F, 6.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveTo(7.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          close()
          moveToRelative(-1.991F, 5.0F)
          curveTo(3.903F, 11.0F, 3.0F, 11.887F, 3.0F, 13.0F)
          curveToRelative(0.0F, 1.691F, 0.833F, 2.966F, 2.135F, 3.797F)
          curveToRelative(1.05F, 0.669F, 2.398F, 1.049F, 3.87F, 1.165F)
          curveToRelative(0.01F, -0.102F, 0.026F, -0.205F, 0.052F, -0.309F)
          lineToRelative(0.17F, -0.678F)
          curveToRelative(-1.413F, -0.093F, -2.646F, -0.442F, -3.554F, -1.022F)
          curveTo(4.623F, 15.283F, 4.0F, 14.31F, 4.0F, 13.0F)
          curveToRelative(0.0F, -0.553F, 0.448F, -1.0F, 1.009F, -1.0F)
          horizontalLineToRelative(7.934F)
          lineToRelative(1.0F, -1.0F)
          horizontalLineTo(5.009F)
          close()
          moveToRelative(5.97F, 4.377F)
          lineToRelative(4.83F, -4.83F)
          curveToRelative(0.73F, -0.73F, 1.915F, -0.73F, 2.645F, 0.0F)
          curveToRelative(0.73F, 0.731F, 0.73F, 1.915F, 0.0F, 2.646F)
          lineToRelative(-4.83F, 4.829F)
          curveToRelative(-0.281F, 0.282F, -0.634F, 0.481F, -1.02F, 0.578F)
          lineToRelative(-1.498F, 0.374F)
          curveToRelative(-0.651F, 0.163F, -1.242F, -0.427F, -1.079F, -1.078F)
          lineToRelative(0.375F, -1.498F)
          curveToRelative(0.096F, -0.386F, 0.296F, -0.74F, 0.578F, -1.02F)
          close()        
      }
    }
    return _personEdit20!!
  }

private var _personEdit20: ImageVector? = null
