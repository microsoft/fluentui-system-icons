package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SquareArrowForward24: ImageVector
  get() {
    if (_squareArrowForward24 != null) {
      return _squareArrowForward24!!
    }
    _squareArrowForward24 = fluentIcon(name = "Filled.SquareArrowForward24", 24f) {
      materialPath {
          moveTo(6.25F, 3.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(5.772F)
          curveTo(11.375F, 19.99F, 11.0F, 18.789F, 11.0F, 17.5F)
          curveToRelative(0.0F, -3.59F, 2.91F, -6.5F, 6.5F, -6.5F)
          curveToRelative(1.289F, 0.0F, 2.49F, 0.375F, 3.5F, 1.022F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(6.25F)
          close()
          moveTo(12.0F, 17.5F)
          curveToRelative(0.0F, 3.038F, 2.462F, 5.5F, 5.5F, 5.5F)
          reflectiveCurveToRelative(5.5F, -2.462F, 5.5F, -5.5F)
          reflectiveCurveToRelative(-2.462F, -5.5F, -5.5F, -5.5F)
          reflectiveCurveToRelative(-5.5F, 2.462F, -5.5F, 5.5F)
          close()
          moveToRelative(6.646F, -2.146F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(19.293F, 17.0F)
          horizontalLineTo(17.25F)
          curveTo(16.007F, 17.0F, 15.0F, 18.007F, 15.0F, 19.25F)
          verticalLineToRelative(0.25F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(14.0F, 19.776F, 14.0F, 19.5F)
          verticalLineToRelative(-0.25F)
          curveToRelative(0.0F, -1.795F, 1.455F, -3.25F, 3.25F, -3.25F)
          horizontalLineToRelative(2.043F)
          lineToRelative(-0.647F, -0.646F)
          close()        
      }
    }
    return _squareArrowForward24!!
  }

private var _squareArrowForward24: ImageVector? = null
