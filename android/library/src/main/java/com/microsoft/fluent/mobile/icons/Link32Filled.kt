package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Link32: ImageVector
  get() {
    if (_link32 != null) {
      return _link32!!
    }
    _link32 = fluentIcon(name = "Filled.Link32", 32f) {
      materialPath {
          moveTo(2.0F, 16.25F)
          curveTo(2.0F, 12.246F, 5.246F, 9.0F, 9.25F, 9.0F)
          horizontalLineToRelative(3.5F)
          curveTo(13.44F, 9.0F, 14.0F, 9.56F, 14.0F, 10.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-3.5F)
          curveToRelative(-2.623F, 0.0F, -4.75F, 2.127F, -4.75F, 4.75F)
          reflectiveCurveTo(6.627F, 21.0F, 9.25F, 21.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-3.5F)
          curveTo(5.246F, 23.5F, 2.0F, 20.254F, 2.0F, 16.25F)
          close()
          moveToRelative(28.0F, 0.0F)
          curveTo(30.0F, 12.246F, 26.754F, 9.0F, 22.75F, 9.0F)
          horizontalLineToRelative(-3.5F)
          curveTo(18.56F, 9.0F, 18.0F, 9.56F, 18.0F, 10.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(3.5F)
          curveToRelative(2.623F, 0.0F, 4.75F, 2.127F, 4.75F, 4.75F)
          reflectiveCurveTo(25.373F, 21.0F, 22.75F, 21.0F)
          horizontalLineToRelative(-3.5F)
          curveTo(18.56F, 21.0F, 18.0F, 21.56F, 18.0F, 22.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(3.5F)
          curveToRelative(4.004F, 0.0F, 7.25F, -3.246F, 7.25F, -7.25F)
          close()
          moveTo(9.75F, 15.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(22.94F, 15.0F, 22.25F, 15.0F)
          horizontalLineTo(9.75F)
          close()        
      }
    }
    return _link32!!
  }

private var _link32: ImageVector? = null
