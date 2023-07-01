package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CenterVertical24: ImageVector
  get() {
    if (_centerVertical24 != null) {
      return _centerVertical24!!
    }
    _centerVertical24 = fluentIcon(name = "Regular.CenterVertical24", 24f) {
      materialPath {
          moveTo(21.0F, 3.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 4.5F, 3.0F, 4.164F, 3.0F, 3.75F)
          reflectiveCurveTo(3.336F, 3.0F, 3.75F, 3.0F)
          horizontalLineToRelative(16.5F)
          curveTo(20.664F, 3.0F, 21.0F, 3.336F, 21.0F, 3.75F)
          close()
          moveToRelative(0.0F, 16.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 21.0F, 3.0F, 20.664F, 3.0F, 20.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          close()
          moveTo(7.25F, 8.0F)
          curveTo(6.007F, 8.0F, 5.0F, 9.007F, 5.0F, 10.25F)
          verticalLineToRelative(3.5F)
          curveTo(5.0F, 14.993F, 6.007F, 16.0F, 7.25F, 16.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineToRelative(-3.5F)
          curveTo(19.0F, 9.007F, 17.993F, 8.0F, 16.75F, 8.0F)
          horizontalLineToRelative(-9.5F)
          close()
          moveTo(6.5F, 10.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-9.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-3.5F)
          close()        
      }
    }
    return _centerVertical24!!
  }

private var _centerVertical24: ImageVector? = null
