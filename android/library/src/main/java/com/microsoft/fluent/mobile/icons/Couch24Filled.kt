package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Couch24: ImageVector
  get() {
    if (_couch24 != null) {
      return _couch24!!
    }
    _couch24 = fluentIcon(name = "Filled.Couch24", 24f) {
      materialPath {
          moveTo(16.75F, 4.0F)
          horizontalLineToRelative(-9.5F)
          curveTo(5.731F, 4.0F, 4.5F, 5.231F, 4.5F, 6.75F)
          verticalLineTo(8.0F)
          curveToRelative(1.763F, 0.0F, 3.222F, 1.304F, 3.465F, 3.0F)
          horizontalLineToRelative(8.07F)
          curveToRelative(0.243F, -1.696F, 1.702F, -3.0F, 3.465F, -3.0F)
          verticalLineTo(6.75F)
          curveTo(19.5F, 5.231F, 18.269F, 4.0F, 16.75F, 4.0F)
          close()
          moveTo(17.0F, 11.5F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineToRelative(2.75F)
          curveToRelative(0.0F, 1.434F, -1.098F, 2.613F, -2.5F, 2.739F)
          verticalLineToRelative(1.261F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(18.0F, 18.664F, 18.0F, 18.25F)
          verticalLineTo(17.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(1.25F)
          curveTo(6.0F, 18.664F, 5.664F, 19.0F, 5.25F, 19.0F)
          reflectiveCurveTo(4.5F, 18.664F, 4.5F, 18.25F)
          verticalLineToRelative(-1.261F)
          curveTo(3.098F, 16.862F, 2.0F, 15.684F, 2.0F, 14.25F)
          verticalLineTo(11.5F)
          curveTo(2.0F, 10.12F, 3.12F, 9.0F, 4.5F, 9.0F)
          reflectiveCurveTo(7.0F, 10.12F, 7.0F, 11.5F)
          curveTo(7.0F, 11.776F, 7.224F, 12.0F, 7.5F, 12.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          close()        
      }
    }
    return _couch24!!
  }

private var _couch24: ImageVector? = null
