package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LeafOne16: ImageVector
  get() {
    if (_leafOne16 != null) {
      return _leafOne16!!
    }
    _leafOne16 = fluentIcon(name = "Regular.LeafOne16", 16f) {
      materialPath {
          moveTo(7.5F, 13.022F)
          verticalLineTo(14.5F)
          curveTo(7.5F, 14.776F, 7.724F, 15.0F, 8.0F, 15.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-1.478F)
          curveToRelative(1.079F, -0.11F, 2.128F, -0.579F, 2.955F, -1.406F)
          curveToRelative(1.976F, -1.976F, 1.895F, -5.206F, -0.18F, -7.08F)
          lineToRelative(-2.437F, -2.2F)
          curveToRelative(-0.476F, -0.43F, -1.2F, -0.43F, -1.676F, 0.0F)
          lineToRelative(-2.437F, 2.2F)
          curveTo(2.65F, 6.41F, 2.568F, 9.64F, 4.545F, 11.616F)
          curveToRelative(0.827F, 0.827F, 1.876F, 1.296F, 2.955F, 1.406F)
          close()
          moveToRelative(3.104F, -7.744F)
          curveToRelative(1.65F, 1.49F, 1.716F, 4.059F, 0.144F, 5.631F)
          curveToRelative(-0.632F, 0.631F, -1.426F, 1.0F, -2.248F, 1.106F)
          verticalLineTo(7.501F)
          curveTo(8.5F, 7.225F, 8.276F, 7.0F, 8.0F, 7.0F)
          reflectiveCurveTo(7.5F, 7.225F, 7.5F, 7.5F)
          verticalLineToRelative(4.514F)
          curveTo(6.678F, 11.91F, 5.884F, 11.54F, 5.252F, 10.91F)
          curveTo(3.68F, 9.337F, 3.745F, 6.77F, 5.395F, 5.28F)
          lineToRelative(2.437F, -2.202F)
          curveToRelative(0.095F, -0.086F, 0.24F, -0.086F, 0.336F, 0.0F)
          lineToRelative(2.437F, 2.201F)
          close()        
      }
    }
    return _leafOne16!!
  }

private var _leafOne16: ImageVector? = null
