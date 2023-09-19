package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PersonSubtract20: ImageVector
  get() {
    if (_personSubtract20 != null) {
      return _personSubtract20!!
    }
    _personSubtract20 = fluentIcon(name = "Regular.PersonSubtract20", 20f) {
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
          curveTo(6.417F, 17.614F, 8.145F, 18.0F, 10.0F, 18.0F)
          curveToRelative(0.085F, 0.0F, 0.17F, 0.0F, 0.255F, -0.003F)
          curveToRelative(-0.254F, -0.308F, -0.476F, -0.644F, -0.659F, -1.004F)
          curveToRelative(-1.567F, -0.052F, -2.937F, -0.41F, -3.923F, -1.04F)
          curveTo(4.623F, 15.283F, 4.0F, 14.31F, 4.0F, 13.0F)
          curveToRelative(0.0F, -0.553F, 0.448F, -1.0F, 1.009F, -1.0F)
          horizontalLineToRelative(4.59F)
          curveToRelative(0.184F, -0.358F, 0.405F, -0.693F, 0.658F, -1.0F)
          horizontalLineTo(5.01F)
          close()
          moveTo(19.0F, 14.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-7.0F, 0.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 14.0F, 16.5F, 14.0F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          close()        
      }
    }
    return _personSubtract20!!
  }

private var _personSubtract20: ImageVector? = null
