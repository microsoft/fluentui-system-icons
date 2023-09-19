package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SquareArrowForward16: ImageVector
  get() {
    if (_squareArrowForward16 != null) {
      return _squareArrowForward16!!
    }
    _squareArrowForward16 = fluentIcon(name = "Filled.SquareArrowForward16", 16f) {
      materialPath {
          moveTo(2.5F, 4.5F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.39F)
          curveTo(12.637F, 5.327F, 11.607F, 5.0F, 10.5F, 5.0F)
          curveTo(7.462F, 5.0F, 5.0F, 7.462F, 5.0F, 10.5F)
          curveToRelative(0.0F, 1.107F, 0.327F, 2.137F, 0.89F, 3.0F)
          horizontalLineTo(4.5F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-7.0F)
          close()
          moveToRelative(8.0F, 10.5F)
          curveTo(8.015F, 15.0F, 6.0F, 12.985F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(15.0F, 8.015F, 15.0F, 10.5F)
          reflectiveCurveTo(12.985F, 15.0F, 10.5F, 15.0F)
          close()
          moveToRelative(0.896F, -6.396F)
          lineTo(12.293F, 9.5F)
          horizontalLineTo(10.75F)
          curveTo(9.231F, 9.5F, 8.0F, 10.731F, 8.0F, 12.25F)
          verticalLineToRelative(0.25F)
          curveTo(8.0F, 12.776F, 8.224F, 13.0F, 8.5F, 13.0F)
          reflectiveCurveTo(9.0F, 12.776F, 9.0F, 12.5F)
          verticalLineToRelative(-0.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(1.543F)
          lineToRelative(-0.897F, 0.896F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(1.752F, -1.753F)
          curveToRelative(0.047F, -0.047F, 0.082F, -0.102F, 0.106F, -0.16F)
          curveTo(13.986F, 10.132F, 14.0F, 10.068F, 14.0F, 10.0F)
          reflectiveCurveToRelative(-0.014F, -0.132F, -0.038F, -0.191F)
          curveToRelative(-0.024F, -0.06F, -0.06F, -0.115F, -0.108F, -0.162F)
          lineToRelative(-1.75F, -1.75F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          close()        
      }
    }
    return _squareArrowForward16!!
  }

private var _squareArrowForward16: ImageVector? = null
