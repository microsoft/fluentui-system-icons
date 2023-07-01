package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HomePerson24: ImageVector
  get() {
    if (_homePerson24 != null) {
      return _homePerson24!!
    }
    _homePerson24 = fluentIcon(name = "Filled.HomePerson24", 24f) {
      materialPath {
          moveTo(10.55F, 2.533F)
          curveToRelative(0.837F, -0.707F, 2.063F, -0.707F, 2.9F, 0.0F)
          lineToRelative(6.75F, 5.695F)
          curveToRelative(0.508F, 0.427F, 0.8F, 1.056F, 0.8F, 1.72F)
          verticalLineToRelative(2.102F)
          curveTo(20.365F, 11.402F, 19.48F, 11.0F, 18.5F, 11.0F)
          curveToRelative(-1.933F, 0.0F, -3.5F, 1.567F, -3.5F, 3.5F)
          verticalLineTo(15.0F)
          curveToRelative(-0.114F, -0.56F, -0.627F, -0.984F, -1.217F, -1.0F)
          horizontalLineToRelative(-3.566F)
          curveTo(9.542F, 14.018F, 9.0F, 14.57F, 9.0F, 15.25F)
          verticalLineToRelative(4.003F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-2.5F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineTo(9.947F)
          curveToRelative(0.0F, -0.662F, 0.292F, -1.292F, 0.8F, -1.72F)
          lineToRelative(6.75F, -5.694F)
          close()
          moveTo(21.0F, 14.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveTo(16.0F, 15.88F, 16.0F, 14.5F)
          reflectiveCurveToRelative(1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          close()
          moveToRelative(2.0F, 5.375F)
          curveTo(23.0F, 21.431F, 21.714F, 23.0F, 18.5F, 23.0F)
          reflectiveCurveTo(14.0F, 21.437F, 14.0F, 19.875F)
          verticalLineToRelative(-0.103F)
          curveTo(14.0F, 18.792F, 14.794F, 18.0F, 15.773F, 18.0F)
          horizontalLineToRelative(5.454F)
          curveTo(22.207F, 18.0F, 23.0F, 18.793F, 23.0F, 19.772F)
          verticalLineToRelative(0.103F)
          close()        
      }
    }
    return _homePerson24!!
  }

private var _homePerson24: ImageVector? = null
