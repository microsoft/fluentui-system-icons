package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CheckmarkNote20: ImageVector
  get() {
    if (_checkmarkNote20 != null) {
      return _checkmarkNote20!!
    }
    _checkmarkNote20 = fluentIcon(name = "Filled.CheckmarkNote20", 20f) {
      materialPath {
          moveTo(6.032F, 12.907F)
          lineTo(2.561F, 9.002F)
          curveTo(2.285F, 8.692F, 1.81F, 8.664F, 1.5F, 8.939F)
          curveTo(1.193F, 9.215F, 1.165F, 9.69F, 1.44F, 10.0F)
          lineToRelative(4.0F, 4.5F)
          curveToRelative(0.286F, 0.322F, 0.785F, 0.336F, 1.09F, 0.031F)
          lineToRelative(10.5F, -10.5F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-9.938F, 9.937F)
          close()
          moveTo(11.0F, 13.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-4.0F)
          close()
          moveToRelative(6.5F, 3.0F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 16.0F, 17.5F, 16.0F)
          close()
          moveToRelative(-4.0F, -3.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 13.0F, 17.5F, 13.0F)
          horizontalLineToRelative(-4.0F)
          close()        
      }
    }
    return _checkmarkNote20!!
  }

private var _checkmarkNote20: ImageVector? = null
