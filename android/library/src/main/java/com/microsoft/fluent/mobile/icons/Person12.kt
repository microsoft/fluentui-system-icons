package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Person12: ImageVector
  get() {
    if (_person12 != null) {
      return _person12!!
    }
    _person12 = fluentIcon(name = "Regular.Person12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveTo(4.895F, 1.0F, 4.0F, 1.895F, 4.0F, 3.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveTo(5.0F, 3.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          close()
          moveToRelative(3.5F, 3.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(2.672F, 6.0F, 2.0F, 6.672F, 2.0F, 7.5F)
          curveToRelative(0.0F, 1.116F, 0.459F, 2.01F, 1.212F, 2.615F)
          curveTo(3.953F, 10.71F, 4.947F, 11.0F, 6.0F, 11.0F)
          curveToRelative(1.053F, 0.0F, 2.047F, -0.29F, 2.788F, -0.885F)
          curveTo(9.54F, 9.51F, 10.0F, 8.616F, 10.0F, 7.5F)
          curveTo(10.0F, 6.672F, 9.328F, 6.0F, 8.5F, 6.0F)
          close()
          moveToRelative(-5.0F, 1.0F)
          horizontalLineToRelative(5.0F)
          curveTo(8.776F, 7.0F, 9.0F, 7.224F, 9.0F, 7.5F)
          curveToRelative(0.0F, 0.817F, -0.325F, 1.423F, -0.838F, 1.835F)
          curveTo(7.636F, 9.757F, 6.88F, 10.0F, 6.0F, 10.0F)
          curveToRelative(-0.88F, 0.0F, -1.636F, -0.243F, -2.162F, -0.665F)
          curveTo(3.324F, 8.923F, 3.0F, 8.317F, 3.0F, 7.5F)
          curveTo(3.0F, 7.224F, 3.224F, 7.0F, 3.5F, 7.0F)
          close()        
      }
    }
    return _person12!!
  }

private var _person12: ImageVector? = null
