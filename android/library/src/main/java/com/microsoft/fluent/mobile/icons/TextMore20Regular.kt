package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextMore20: ImageVector
  get() {
    if (_textMore20 != null) {
      return _textMore20!!
    }
    _textMore20 = fluentIcon(name = "Regular.TextMore20", 20f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(0.203F, 0.0F, 0.386F, 0.123F, 0.463F, 0.311F)
          lineTo(13.56F, 14.82F)
          curveToRelative(-0.178F, -0.046F, -0.366F, -0.07F, -0.559F, -0.07F)
          curveToRelative(-0.18F, 0.0F, -0.356F, 0.021F, -0.524F, 0.061F)
          lineTo(11.331F, 12.0F)
          horizontalLineTo(4.67F)
          lineToRelative(-1.707F, 4.189F)
          curveToRelative(-0.104F, 0.255F, -0.396F, 0.378F, -0.651F, 0.274F)
          curveToRelative(-0.256F, -0.104F, -0.38F, -0.396F, -0.275F, -0.652F)
          lineToRelative(5.5F, -13.5F)
          curveTo(7.614F, 2.123F, 7.797F, 2.0F, 8.0F, 2.0F)
          close()
          moveToRelative(5.0F, 13.75F)
          curveToRelative(0.385F, 0.0F, 0.73F, 0.174F, 0.96F, 0.448F)
          curveToRelative(0.18F, 0.217F, 0.29F, 0.497F, 0.29F, 0.802F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveToRelative(-1.25F, -0.56F, -1.25F, -1.25F)
          curveToRelative(0.0F, -0.673F, 0.532F, -1.222F, 1.198F, -1.249F)
          lineTo(13.0F, 15.75F)
          close()
          moveToRelative(0.0F, 0.0F)
          close()
          moveTo(5.077F, 11.0F)
          horizontalLineToRelative(5.846F)
          lineTo(8.0F, 3.825F)
          lineTo(5.077F, 11.0F)
          close()
          moveToRelative(5.173F, 6.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(7.75F, 17.69F, 7.75F, 17.0F)
          reflectiveCurveTo(8.31F, 15.75F, 9.0F, 15.75F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          close()
          moveTo(17.0F, 18.25F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveToRelative(-1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          close()        
      }
    }
    return _textMore20!!
  }

private var _textMore20: ImageVector? = null
