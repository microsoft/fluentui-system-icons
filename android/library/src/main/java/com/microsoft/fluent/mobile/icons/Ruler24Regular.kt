package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Ruler24: ImageVector
  get() {
    if (_ruler24 != null) {
      return _ruler24!!
    }
    _ruler24 = fluentIcon(name = "Regular.Ruler24", 24f) {
      materialPath {
          moveTo(9.25F, 2.0F)
          curveTo(8.007F, 2.0F, 7.0F, 3.007F, 7.0F, 4.25F)
          verticalLineToRelative(15.5F)
          curveTo(7.0F, 20.993F, 8.007F, 22.0F, 9.25F, 22.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(4.25F)
          curveTo(17.0F, 3.007F, 15.993F, 2.0F, 14.75F, 2.0F)
          horizontalLineToRelative(-5.5F)
          close()
          moveTo(8.5F, 19.0F)
          horizontalLineToRelative(1.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(8.5F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(3.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(8.5F)
          verticalLineToRelative(-1.75F)
          horizontalLineToRelative(1.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(8.5F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(3.75F)
          curveTo(12.664F, 9.5F, 13.0F, 9.164F, 13.0F, 8.75F)
          reflectiveCurveTo(12.664F, 8.0F, 12.25F, 8.0F)
          horizontalLineTo(8.5F)
          verticalLineTo(6.5F)
          horizontalLineToRelative(1.75F)
          curveTo(10.664F, 6.5F, 11.0F, 6.164F, 11.0F, 5.75F)
          reflectiveCurveTo(10.664F, 5.0F, 10.25F, 5.0F)
          horizontalLineTo(8.5F)
          verticalLineTo(4.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-5.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(19.0F)
          close()        
      }
    }
    return _ruler24!!
  }

private var _ruler24: ImageVector? = null
