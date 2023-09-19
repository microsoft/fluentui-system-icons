package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageShadow20: ImageVector
  get() {
    if (_imageShadow20 != null) {
      return _imageShadow20!!
    }
    _imageShadow20 = fluentIcon(name = "Filled.ImageShadow20", 20f) {
      materialPath {
          moveTo(5.0F, 2.0F)
          curveTo(3.343F, 2.0F, 2.0F, 3.343F, 2.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.648F, 0.205F, 1.248F, 0.555F, 1.738F)
          lineToRelative(4.243F, -4.243F)
          curveToRelative(0.664F, -0.664F, 1.74F, -0.664F, 2.404F, 0.0F)
          lineToRelative(4.243F, 4.243F)
          curveTo(13.795F, 12.248F, 14.0F, 11.648F, 14.0F, 11.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(0.0F, 12.0F)
          curveToRelative(-0.648F, 0.0F, -1.248F, -0.205F, -1.738F, -0.555F)
          lineToRelative(4.243F, -4.243F)
          curveToRelative(0.273F, -0.273F, 0.717F, -0.273F, 0.99F, 0.0F)
          lineToRelative(4.243F, 4.243F)
          curveTo(12.248F, 13.795F, 11.648F, 14.0F, 11.0F, 14.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(6.0F, -8.0F)
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
