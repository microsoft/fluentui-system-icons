package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonClock20: ImageVector
  get() {
    if (_personClock20 != null) {
      return _personClock20!!
    }
    _personClock20 = fluentIcon(name = "Filled.PersonClock20", 20f) {
      materialPath {
          moveTo(5.0F, 6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          reflectiveCurveToRelative(-1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          close()
          moveToRelative(-3.0F, 7.0F)
          curveToRelative(0.0F, -1.113F, 0.903F, -2.0F, 2.009F, -2.0F)
          horizontalLineToRelative(6.248F)
          curveTo(9.472F, 11.95F, 9.0F, 13.17F, 9.0F, 14.5F)
          curveToRelative(0.0F, 1.303F, 0.453F, 2.5F, 1.21F, 3.443F)
          curveTo(9.816F, 17.98F, 9.41F, 18.0F, 9.0F, 18.0F)
          curveToRelative(-1.855F, 0.0F, -3.583F, -0.386F, -4.865F, -1.203F)
          curveTo(2.833F, 15.967F, 2.0F, 14.69F, 2.0F, 13.0F)
          close()
          moveToRelative(17.0F, 1.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveTo(14.5F, 12.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(16.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.276F, 14.0F, 16.0F, 14.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(-1.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _personClock20!!
  }

private var _personClock20: ImageVector? = null
