package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.VideoPerson16: ImageVector
  get() {
    if (_videoPerson16 != null) {
      return _videoPerson16!!
    }
    _videoPerson16 = fluentIcon(name = "Regular.VideoPerson16", 16f) {
      materialPath {
          moveTo(8.0F, 9.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveTo(9.105F, 5.0F, 8.0F, 5.0F)
          reflectiveCurveTo(6.0F, 5.895F, 6.0F, 7.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()
          moveToRelative(0.0F, -1.0F)
          curveTo(7.448F, 8.0F, 7.0F, 7.552F, 7.0F, 7.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          close()
          moveTo(1.0F, 4.75F)
          curveTo(1.0F, 3.784F, 1.784F, 3.0F, 2.75F, 3.0F)
          horizontalLineToRelative(10.5F)
          curveTo(14.216F, 3.0F, 15.0F, 3.784F, 15.0F, 4.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(2.75F)
          curveTo(1.784F, 13.0F, 1.0F, 12.216F, 1.0F, 11.25F)
          verticalLineToRelative(-6.5F)
          close()
          moveTo(6.0F, 12.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(1.0F)
          close()
          moveToRelative(5.0F, 0.0F)
          horizontalLineToRelative(2.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-6.5F)
          curveTo(14.0F, 4.336F, 13.664F, 4.0F, 13.25F, 4.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 4.0F, 2.0F, 4.336F, 2.0F, 4.75F)
          verticalLineToRelative(6.5F)
          curveTo(2.0F, 11.664F, 2.336F, 12.0F, 2.75F, 12.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(1.0F)
          close()        
      }
    }
    return _videoPerson16!!
  }

private var _videoPerson16: ImageVector? = null
