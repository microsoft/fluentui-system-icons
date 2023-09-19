package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SquareArrowForward24: ImageVector
  get() {
    if (_squareArrowForward24 != null) {
      return _squareArrowForward24!!
    }
    _squareArrowForward24 = fluentIcon(name = "Regular.SquareArrowForward24", 24f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(5.772F)
          curveToRelative(-0.463F, -0.297F, -0.966F, -0.536F, -1.5F, -0.709F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(6.25F)
          curveTo(5.284F, 4.5F, 4.5F, 5.284F, 4.5F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(5.063F)
          curveToRelative(0.173F, 0.534F, 0.412F, 1.037F, 0.709F, 1.5F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(6.25F)
          close()
          moveToRelative(9.0F, 11.25F)
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
