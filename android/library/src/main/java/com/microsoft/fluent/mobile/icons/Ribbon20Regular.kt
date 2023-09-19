package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Ribbon20: ImageVector
  get() {
    if (_ribbon20 != null) {
      return _ribbon20!!
    }
    _ribbon20 = fluentIcon(name = "Regular.Ribbon20", 20f) {
      materialPath {
          moveTo(16.0F, 8.0F)
          curveToRelative(0.0F, 1.777F, -0.773F, 3.374F, -2.0F, 4.472F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.178F, -0.095F, 0.343F, -0.249F, 0.433F)
          curveToRelative(-0.154F, 0.09F, -0.344F, 0.09F, -0.5F, 0.001F)
          lineTo(10.0F, 16.076F)
          lineToRelative(-3.252F, 1.858F)
          curveToRelative(-0.155F, 0.089F, -0.345F, 0.088F, -0.499F, -0.001F)
          curveTo(6.095F, 17.843F, 6.0F, 17.678F, 6.0F, 17.5F)
          verticalLineToRelative(-5.028F)
          curveTo(4.772F, 11.374F, 4.0F, 9.777F, 4.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveToRelative(-6.0F, 6.0F)
          curveToRelative(-1.093F, 0.0F, -2.117F, -0.292F, -3.0F, -0.803F)
          verticalLineToRelative(3.442F)
          lineToRelative(2.752F, -1.573F)
          curveToRelative(0.154F, -0.088F, 0.342F, -0.088F, 0.496F, 0.0F)
          lineTo(13.0F, 16.64F)
          verticalLineToRelative(-3.442F)
          curveTo(12.117F, 13.707F, 11.093F, 14.0F, 10.0F, 14.0F)
          close()
          moveToRelative(0.0F, -1.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          reflectiveCurveToRelative(-5.0F, 2.239F, -5.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          close()        
      }
    }
    return _ribbon20!!
  }

private var _ribbon20: ImageVector? = null
