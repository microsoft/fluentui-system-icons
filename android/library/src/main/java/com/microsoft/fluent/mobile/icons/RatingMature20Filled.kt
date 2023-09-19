package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RatingMature20: ImageVector
  get() {
    if (_ratingMature20 != null) {
      return _ratingMature20!!
    }
    _ratingMature20 = fluentIcon(name = "Filled.RatingMature20", 20f) {
      materialPath {
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(4.924F, 1.235F)
          curveToRelative(-0.118F, -0.19F, -0.347F, -0.277F, -0.562F, -0.216F)
          curveTo(7.148F, 7.081F, 7.0F, 7.277F, 7.0F, 7.5F)
          verticalLineToRelative(5.0F)
          curveTo(7.0F, 12.776F, 7.224F, 13.0F, 7.5F, 13.0F)
          reflectiveCurveTo(8.0F, 12.776F, 8.0F, 12.5F)
          verticalLineTo(9.243F)
          lineToRelative(1.576F, 2.522F)
          curveTo(9.667F, 11.911F, 9.828F, 12.0F, 10.0F, 12.0F)
          reflectiveCurveToRelative(0.333F, -0.089F, 0.424F, -0.235F)
          lineTo(12.0F, 9.243F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -0.223F, -0.148F, -0.42F, -0.362F, -0.48F)
          curveToRelative(-0.215F, -0.062F, -0.444F, 0.026F, -0.562F, 0.215F)
          lineTo(10.0F, 10.557F)
          lineTo(7.924F, 7.235F)
          close()        
      }
    }
    return _ratingMature20!!
  }

private var _ratingMature20: ImageVector? = null
