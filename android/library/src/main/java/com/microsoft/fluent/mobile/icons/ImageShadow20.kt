package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ImageShadow20: ImageVector
  get() {
    if (_imageShadow20 != null) {
      return _imageShadow20!!
    }
    _imageShadow20 = fluentIcon(name = "Regular.ImageShadow20", 20f) {
      materialPath {
          moveTo(5.0F, 2.0F)
          curveTo(3.343F, 2.0F, 2.0F, 3.343F, 2.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(5.0F)
          close()
          moveTo(3.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.37F, -0.101F, 0.718F, -0.277F, 1.016F)
          lineToRelative(-3.52F, -3.521F)
          curveToRelative(-0.665F, -0.664F, -1.741F, -0.664F, -2.405F, 0.0F)
          lineToRelative(-3.521F, 3.521F)
          curveTo(3.1F, 11.718F, 3.0F, 11.371F, 3.0F, 11.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(5.495F, 4.202F)
          lineToRelative(3.521F, 3.521F)
          curveTo(11.718F, 12.9F, 11.371F, 13.0F, 11.0F, 13.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.37F, 0.0F, -0.718F, -0.101F, -1.016F, -0.277F)
          lineToRelative(3.521F, -3.52F)
          curveToRelative(0.273F, -0.274F, 0.717F, -0.274F, 0.99F, 0.0F)
          close()
          moveTo(11.0F, 6.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveTo(9.0F, 6.552F, 9.0F, 6.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveToRelative(-5.0F, 9.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _imageShadow20!!
  }

private var _imageShadow20: ImageVector? = null
