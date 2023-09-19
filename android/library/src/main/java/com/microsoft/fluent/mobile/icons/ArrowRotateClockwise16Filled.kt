package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRotateClockwise16: ImageVector
  get() {
    if (_arrowRotateClockwise16 != null) {
      return _arrowRotateClockwise16!!
    }
    _arrowRotateClockwise16 = fluentIcon(name = "Filled.ArrowRotateClockwise16", 16f) {
      materialPath {
          moveTo(8.0F, 3.25F)
          curveTo(5.377F, 3.25F, 3.25F, 5.377F, 3.25F, 8.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(1.75F, 8.414F, 1.75F, 8.0F)
          curveToRelative(0.0F, -3.452F, 2.798F, -6.25F, 6.25F, -6.25F)
          reflectiveCurveTo(14.25F, 4.548F, 14.25F, 8.0F)
          curveToRelative(0.0F, 1.768F, -0.734F, 3.364F, -1.913F, 4.5F)
          horizontalLineToRelative(0.913F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(13.664F, 14.0F, 13.25F, 14.0F)
          horizontalLineToRelative(-2.5F)
          curveTo(10.336F, 14.0F, 10.0F, 13.664F, 10.0F, 13.25F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(0.461F)
          curveToRelative(0.777F, -0.845F, 1.25F, -1.973F, 1.25F, -3.211F)
          curveToRelative(0.0F, -2.623F, -2.127F, -4.75F, -4.75F, -4.75F)
          close()
          moveTo(5.75F, 8.0F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          reflectiveCurveTo(10.25F, 6.757F, 10.25F, 8.0F)
          reflectiveCurveTo(9.243F, 10.25F, 8.0F, 10.25F)
          reflectiveCurveTo(5.75F, 9.243F, 5.75F, 8.0F)
          close()
          moveTo(8.0F, 7.25F)
          curveTo(7.586F, 7.25F, 7.25F, 7.586F, 7.25F, 8.0F)
          reflectiveCurveTo(7.586F, 8.75F, 8.0F, 8.75F)
          reflectiveCurveTo(8.75F, 8.414F, 8.75F, 8.0F)
          reflectiveCurveTo(8.414F, 7.25F, 8.0F, 7.25F)
          close()        
      }
    }
    return _arrowRotateClockwise16!!
  }

private var _arrowRotateClockwise16: ImageVector? = null
