package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlideText24: ImageVector
  get() {
    if (_slideText24 != null) {
      return _slideText24!!
    }
    _slideText24 = fluentIcon(name = "Filled.SlideText24", 24f) {
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
          moveTo(6.75F, 8.0F)
          curveTo(6.336F, 8.0F, 6.0F, 8.336F, 6.0F, 8.75F)
          reflectiveCurveTo(6.336F, 9.5F, 6.75F, 9.5F)
          horizontalLineToRelative(4.5F)
          curveTo(11.664F, 9.5F, 12.0F, 9.164F, 12.0F, 8.75F)
          reflectiveCurveTo(11.664F, 8.0F, 11.25F, 8.0F)
          horizontalLineToRelative(-4.5F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(6.336F, 11.0F, 6.0F, 11.336F, 6.0F, 11.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(15.664F, 11.0F, 15.25F, 11.0F)
          horizontalLineToRelative(-8.5F)
          close()
          moveTo(6.0F, 14.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.664F, 14.0F, 13.25F, 14.0F)
          horizontalLineToRelative(-6.5F)
          curveTo(6.336F, 14.0F, 6.0F, 14.336F, 6.0F, 14.75F)
          close()        
      }
    }
    return _slideText24!!
  }

private var _slideText24: ImageVector? = null
