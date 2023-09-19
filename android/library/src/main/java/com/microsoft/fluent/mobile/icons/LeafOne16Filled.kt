package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LeafOne16: ImageVector
  get() {
    if (_leafOne16 != null) {
      return _leafOne16!!
    }
    _leafOne16 = fluentIcon(name = "Filled.LeafOne16", 16f) {
      materialPath {
          moveTo(11.275F, 4.536F)
          curveToRelative(2.075F, 1.874F, 2.156F, 5.104F, 0.18F, 7.08F)
          curveToRelative(-0.827F, 0.827F, -1.876F, 1.296F, -2.955F, 1.406F)
          verticalLineTo(14.5F)
          curveTo(8.5F, 14.776F, 8.276F, 15.0F, 8.0F, 15.0F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-1.478F)
          curveToRelative(-1.079F, -0.11F, -2.128F, -0.579F, -2.955F, -1.406F)
          curveTo(2.568F, 9.64F, 2.65F, 6.41F, 4.725F, 4.536F)
          lineToRelative(2.437F, -2.2F)
          curveToRelative(0.476F, -0.43F, 1.2F, -0.43F, 1.676F, 0.0F)
          lineToRelative(2.437F, 2.2F)
          close()
          moveTo(8.5F, 7.501F)
          curveTo(8.5F, 7.225F, 8.276F, 7.0F, 8.0F, 7.0F)
          reflectiveCurveTo(7.5F, 7.225F, 7.5F, 7.5F)
          verticalLineToRelative(4.514F)
          curveToRelative(0.332F, 0.043F, 0.668F, 0.043F, 1.0F, 0.0F)
          verticalLineTo(7.501F)
          close()        
      }
    }
    return _leafOne16!!
  }

private var _leafOne16: ImageVector? = null
