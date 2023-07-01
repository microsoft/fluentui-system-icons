package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SquareArrowForward32: ImageVector
  get() {
    if (_squareArrowForward32 != null) {
      return _squareArrowForward32!!
    }
    _squareArrowForward32 = fluentIcon(name = "Regular.SquareArrowForward32", 32f) {
      materialPath {
          moveTo(3.0F, 7.5F)
          curveTo(3.0F, 5.015F, 5.015F, 3.0F, 7.5F, 3.0F)
          horizontalLineToRelative(17.0F)
          curveTo(26.985F, 3.0F, 29.0F, 5.015F, 29.0F, 7.5F)
          verticalLineToRelative(8.775F)
          curveToRelative(-0.587F, -0.613F, -1.26F, -1.143F, -2.0F, -1.571F)
          verticalLineTo(7.5F)
          curveTo(27.0F, 6.12F, 25.88F, 5.0F, 24.5F, 5.0F)
          horizontalLineToRelative(-17.0F)
          curveTo(6.12F, 5.0F, 5.0F, 6.12F, 5.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveTo(5.0F, 25.88F, 6.12F, 27.0F, 7.5F, 27.0F)
          horizontalLineToRelative(7.204F)
          curveToRelative(0.428F, 0.74F, 0.958F, 1.413F, 1.571F, 2.0F)
          horizontalLineTo(7.5F)
          curveTo(5.015F, 29.0F, 3.0F, 26.985F, 3.0F, 24.5F)
          verticalLineToRelative(-17.0F)
          close()
          moveToRelative(27.0F, 15.0F)
          curveToRelative(0.0F, 4.142F, -3.358F, 7.5F, -7.5F, 7.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, -3.358F, -7.5F, -7.5F)
          curveToRelative(0.0F, -4.142F, 3.358F, -7.5F, 7.5F, -7.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.358F, 7.5F, 7.5F)
          close()
          moveToRelative(-4.72F, -3.78F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(25.44F, 21.0F)
          horizontalLineTo(22.5F)
          curveToRelative(-2.347F, 0.0F, -4.25F, 1.903F, -4.25F, 4.25F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-0.5F)
          curveToRelative(0.0F, -1.519F, 1.231F, -2.75F, 2.75F, -2.75F)
          horizontalLineToRelative(2.94F)
          lineToRelative(-1.22F, 1.22F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(2.5F, -2.5F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.5F, -2.5F)
          close()        
      }
    }
    return _squareArrowForward32!!
  }

private var _squareArrowForward32: ImageVector? = null
