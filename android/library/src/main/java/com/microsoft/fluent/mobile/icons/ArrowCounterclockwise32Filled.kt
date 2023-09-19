package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCounterclockwise32: ImageVector
  get() {
    if (_arrowCounterclockwise32 != null) {
      return _arrowCounterclockwise32!!
    }
    _arrowCounterclockwise32 = fluentIcon(name = "Filled.ArrowCounterclockwise32", 32f) {
      materialPath {
          moveTo(27.0F, 16.0F)
          curveToRelative(0.0F, -6.075F, -4.925F, -11.0F, -11.0F, -11.0F)
          curveToRelative(-2.923F, 0.0F, -5.58F, 1.14F, -7.55F, 3.0F)
          horizontalLineToRelative(2.3F)
          curveTo(11.44F, 8.0F, 12.0F, 8.56F, 12.0F, 9.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-4.5F)
          curveTo(5.56F, 10.5F, 5.0F, 9.94F, 5.0F, 9.25F)
          verticalLineToRelative(-4.5F)
          curveTo(5.0F, 4.06F, 5.56F, 3.5F, 6.25F, 3.5F)
          reflectiveCurveTo(7.5F, 4.06F, 7.5F, 4.75F)
          verticalLineToRelative(0.761F)
          curveTo(9.82F, 3.628F, 12.779F, 2.5F, 16.0F, 2.5F)
          curveToRelative(7.456F, 0.0F, 13.5F, 6.044F, 13.5F, 13.5F)
          reflectiveCurveTo(23.456F, 29.5F, 16.0F, 29.5F)
          reflectiveCurveTo(2.5F, 23.456F, 2.5F, 16.0F)
          curveToRelative(0.0F, -0.28F, 0.009F, -0.558F, 0.025F, -0.833F)
          curveTo(2.566F, 14.494F, 3.146F, 14.0F, 3.821F, 14.0F)
          curveToRelative(0.708F, 0.0F, 1.24F, 0.643F, 1.198F, 1.35F)
          curveTo(5.006F, 15.565F, 5.0F, 15.782F, 5.0F, 16.0F)
          curveToRelative(0.0F, 6.075F, 4.925F, 11.0F, 11.0F, 11.0F)
          reflectiveCurveToRelative(11.0F, -4.925F, 11.0F, -11.0F)
          close()        
      }
    }
    return _arrowCounterclockwise32!!
  }

private var _arrowCounterclockwise32: ImageVector? = null
