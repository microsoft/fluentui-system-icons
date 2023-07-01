package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TagCircle20: ImageVector
  get() {
    if (_tagCircle20 != null) {
      return _tagCircle20!!
    }
    _tagCircle20 = fluentIcon(name = "Filled.TagCircle20", 20f) {
      materialPath {
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()
          moveToRelative(4.0F, -1.5F)
          verticalLineToRelative(3.0F)
          curveTo(6.0F, 12.328F, 6.672F, 13.0F, 7.5F, 13.0F)
          horizontalLineToRelative(4.058F)
          curveToRelative(0.4F, 0.0F, 0.789F, -0.137F, 1.1F, -0.39F)
          lineToRelative(1.786F, -1.444F)
          curveToRelative(0.742F, -0.6F, 0.742F, -1.732F, 0.0F, -2.332F)
          lineTo(12.658F, 7.39F)
          curveToRelative(-0.311F, -0.252F, -0.7F, -0.39F, -1.1F, -0.39F)
          horizontalLineTo(7.5F)
          curveTo(6.672F, 7.0F, 6.0F, 7.672F, 6.0F, 8.5F)
          close()        
      }
    }
    return _tagCircle20!!
  }

private var _tagCircle20: ImageVector? = null
