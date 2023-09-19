package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Highlight16: ImageVector
  get() {
    if (_highlight16 != null) {
      return _highlight16!!
    }
    _highlight16 = fluentIcon(name = "Regular.Highlight16", 16f) {
      materialPath {
          moveTo(2.5F, 1.0F)
          curveTo(2.776F, 1.0F, 3.0F, 1.224F, 3.0F, 1.5F)
          verticalLineToRelative(3.0F)
          curveTo(3.0F, 4.776F, 3.224F, 5.0F, 3.5F, 5.0F)
          horizontalLineToRelative(9.002F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.654F, -0.418F, 1.21F, -1.001F, 1.415F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, 1.105F, -0.896F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(11.0F)
          lineToRelative(0.003F, 1.74F)
          curveToRelative(0.0F, 0.511F, -0.26F, 0.988F, -0.69F, 1.265F)
          lineToRelative(-4.54F, 2.916F)
          curveToRelative(-0.154F, 0.099F, -0.35F, 0.106F, -0.51F, 0.018F)
          curveToRelative(-0.16F, -0.088F, -0.26F, -0.256F, -0.26F, -0.439F)
          verticalLineTo(9.0F)
          horizontalLineTo(5.0F)
          curveTo(3.895F, 9.0F, 3.0F, 8.105F, 3.0F, 7.0F)
          verticalLineTo(5.915F)
          curveTo(2.418F, 5.709F, 2.0F, 5.154F, 2.0F, 4.5F)
          verticalLineToRelative(-3.0F)
          curveTo(2.0F, 1.224F, 2.224F, 1.0F, 2.5F, 1.0F)
          close()
          moveToRelative(3.503F, 8.0F)
          verticalLineToRelative(4.585F)
          lineToRelative(3.77F, -2.422F)
          curveToRelative(0.144F, -0.092F, 0.23F, -0.25F, 0.23F, -0.421F)
          lineTo(10.0F, 9.0F)
          horizontalLineTo(6.003F)
          close()
          moveTo(4.0F, 7.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.0F)
          close()        
      }
    }
    return _highlight16!!
  }

private var _highlight16: ImageVector? = null
