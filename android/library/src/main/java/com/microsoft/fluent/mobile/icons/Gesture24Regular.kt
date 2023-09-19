package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Gesture24: ImageVector
  get() {
    if (_gesture24 != null) {
      return _gesture24!!
    }
    _gesture24 = fluentIcon(name = "Regular.Gesture24", 24f) {
      materialPath {
          moveTo(3.75F, 17.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(4.164F, 19.0F, 3.75F, 19.0F)
          reflectiveCurveTo(3.0F, 18.664F, 3.0F, 18.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          close()
          moveTo(6.749F, 4.005F)
          horizontalLineToRelative(10.505F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.335F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.283F, 0.693F, -0.649F, 0.743F)
          lineToRelative(-0.102F, 0.007F)
          horizontalLineToRelative(-6.502F)
          lineTo(20.524F, 9.3F)
          curveToRelative(0.57F, 0.222F, 0.64F, 0.981F, 0.16F, 1.313F)
          lineTo(20.59F, 10.67F)
          lineTo(6.1F, 17.928F)
          curveToRelative(-0.37F, 0.185F, -0.821F, 0.036F, -1.007F, -0.335F)
          curveToRelative(-0.17F, -0.34F, -0.058F, -0.746F, 0.247F, -0.954F)
          lineToRelative(0.088F, -0.052F)
          lineToRelative(12.976F, -6.5F)
          lineTo(6.477F, 5.454F)
          curveTo(5.737F, 5.166F, 5.902F, 4.103F, 6.644F, 4.01F)
          lineToRelative(0.105F, -0.006F)
          horizontalLineToRelative(10.505F)
          horizontalLineTo(6.748F)
          close()
          moveTo(19.75F, 4.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(20.164F, 5.5F, 19.75F, 5.5F)
          reflectiveCurveTo(19.0F, 5.164F, 19.0F, 4.75F)
          reflectiveCurveTo(19.336F, 4.0F, 19.75F, 4.0F)
          close()        
      }
    }
    return _gesture24!!
  }

private var _gesture24: ImageVector? = null
