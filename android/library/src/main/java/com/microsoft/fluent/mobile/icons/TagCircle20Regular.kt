package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TagCircle20: ImageVector
  get() {
    if (_tagCircle20 != null) {
      return _tagCircle20!!
    }
    _tagCircle20 = fluentIcon(name = "Regular.TagCircle20", 20f) {
      materialPath {
          moveTo(7.5F, 7.0F)
          curveTo(6.672F, 7.0F, 6.0F, 7.672F, 6.0F, 8.5F)
          verticalLineToRelative(3.0F)
          curveTo(6.0F, 12.328F, 6.672F, 13.0F, 7.5F, 13.0F)
          horizontalLineToRelative(4.058F)
          curveToRelative(0.4F, 0.0F, 0.789F, -0.137F, 1.1F, -0.39F)
          lineToRelative(1.786F, -1.444F)
          curveToRelative(0.742F, -0.6F, 0.742F, -1.732F, 0.0F, -2.332F)
          lineTo(12.658F, 7.39F)
          curveToRelative(-0.311F, -0.252F, -0.7F, -0.39F, -1.1F, -0.39F)
          horizontalLineTo(7.5F)
          close()
          moveTo(7.0F, 8.5F)
          curveTo(7.0F, 8.224F, 7.224F, 8.0F, 7.5F, 8.0F)
          horizontalLineToRelative(4.058F)
          curveToRelative(0.171F, 0.0F, 0.338F, 0.059F, 0.471F, 0.167F)
          lineToRelative(1.786F, 1.444F)
          curveToRelative(0.247F, 0.2F, 0.247F, 0.578F, 0.0F, 0.778F)
          lineToRelative(-1.786F, 1.444F)
          curveTo(11.896F, 11.941F, 11.73F, 12.0F, 11.558F, 12.0F)
          horizontalLineTo(7.5F)
          curveTo(7.224F, 12.0F, 7.0F, 11.776F, 7.0F, 11.5F)
          verticalLineToRelative(-3.0F)
          close()
          moveTo(10.0F, 2.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()
          moveToRelative(-7.0F, 8.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          close()        
      }
    }
    return _tagCircle20!!
  }

private var _tagCircle20: ImageVector? = null
