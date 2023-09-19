package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Snooze16: ImageVector
  get() {
    if (_snooze16 != null) {
      return _snooze16!!
    }
    _snooze16 = fluentIcon(name = "Regular.Snooze16", 16f) {
      materialPath {
          moveTo(4.001F, 8.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.396F, 0.0F, 0.624F, 0.43F, 0.432F, 0.753F)
          lineTo(6.885F, 8.82F)
          lineTo(5.07F, 11.0F)
          horizontalLineTo(6.5F)
          curveTo(6.776F, 11.0F, 7.0F, 11.224F, 7.0F, 11.5F)
          curveToRelative(0.0F, 0.245F, -0.177F, 0.45F, -0.41F, 0.492F)
          lineTo(6.5F, 12.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.396F, 0.0F, -0.624F, -0.43F, -0.432F, -0.753F)
          lineToRelative(0.048F, -0.067F)
          lineTo(5.433F, 9.0F)
          horizontalLineTo(4.001F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          curveToRelative(0.0F, -0.245F, 0.177F, -0.45F, 0.41F, -0.492F)
          lineTo(4.001F, 8.0F)
          horizontalLineToRelative(2.5F)
          close()
          moveToRelative(5.0F, -5.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.376F, 0.0F, 0.607F, 0.393F, 0.452F, 0.714F)
          lineToRelative(-0.042F, 0.073F)
          lineTo(9.96F, 8.0F)
          horizontalLineToRelative(2.54F)
          curveTo(12.776F, 8.0F, 13.0F, 8.224F, 13.0F, 8.5F)
          curveToRelative(0.0F, 0.245F, -0.177F, 0.45F, -0.41F, 0.492F)
          lineTo(12.5F, 9.0F)
          horizontalLineTo(9.0F)
          curveTo(8.625F, 9.0F, 8.394F, 8.607F, 8.549F, 8.286F)
          lineTo(8.59F, 8.213F)
          lineTo(11.541F, 4.0F)
          horizontalLineTo(9.0F)
          curveTo(8.724F, 4.0F, 8.5F, 3.776F, 8.5F, 3.5F)
          curveToRelative(0.0F, -0.245F, 0.177F, -0.45F, 0.41F, -0.492F)
          lineTo(9.001F, 3.0F)
          horizontalLineToRelative(3.5F)
          close()        
      }
    }
    return _snooze16!!
  }

private var _snooze16: ImageVector? = null
