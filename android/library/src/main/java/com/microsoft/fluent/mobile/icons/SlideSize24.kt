package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlideSize24: ImageVector
  get() {
    if (_slideSize24 != null) {
      return _slideSize24!!
    }
    _slideSize24 = fluentIcon(name = "Filled.SlideSize24", 24f) {
      materialPath {
          moveTo(2.0F, 6.75F)
          curveTo(2.0F, 5.231F, 3.231F, 4.0F, 4.75F, 4.0F)
          horizontalLineToRelative(14.5F)
          curveTo(20.769F, 4.0F, 22.0F, 5.231F, 22.0F, 6.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineTo(4.75F)
          curveTo(3.231F, 20.0F, 2.0F, 18.769F, 2.0F, 17.25F)
          verticalLineTo(6.75F)
          close()
          moveToRelative(14.78F, 0.47F)
          curveTo(16.64F, 7.079F, 16.45F, 7.0F, 16.25F, 7.0F)
          horizontalLineToRelative(-2.5F)
          curveTo(13.334F, 7.0F, 13.0F, 7.336F, 13.0F, 7.75F)
          reflectiveCurveToRelative(0.335F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(0.69F)
          lineToRelative(-1.72F, 1.719F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(0.292F, 0.294F, 0.767F, 0.294F, 1.06F, 0.0F)
          lineTo(15.5F, 9.56F)
          verticalLineToRelative(0.69F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -0.199F, -0.078F, -0.39F, -0.22F, -0.53F)
          close()
          moveTo(7.75F, 17.0F)
          horizontalLineToRelative(2.501F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-0.69F)
          lineToRelative(1.72F, -1.72F)
          curveToRelative(0.292F, -0.293F, 0.292F, -0.768F, 0.0F, -1.061F)
          curveToRelative(-0.294F, -0.293F, -0.769F, -0.293F, -1.061F, 0.0F)
          lineTo(8.5F, 14.44F)
          verticalLineToRelative(-0.69F)
          curveTo(8.5F, 13.337F, 8.164F, 13.0F, 7.75F, 13.0F)
          reflectiveCurveTo(7.0F, 13.337F, 7.0F, 13.75F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.2F, 0.079F, 0.39F, 0.22F, 0.531F)
          curveTo(7.36F, 16.92F, 7.55F, 17.0F, 7.75F, 17.0F)
          close()        
      }
    }
    return _slideSize24!!
  }

private var _slideSize24: ImageVector? = null
