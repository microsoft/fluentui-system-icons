package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Directions20: ImageVector
  get() {
    if (_directions20 != null) {
      return _directions20!!
    }
    _directions20 = fluentIcon(name = "Regular.Directions20", 20f) {
      materialPath {
          moveTo(10.5F, 8.5F)
          curveTo(9.67F, 8.5F, 9.0F, 9.17F, 9.0F, 10.0F)
          verticalLineToRelative(2.5F)
          curveTo(9.0F, 12.776F, 8.776F, 13.0F, 8.5F, 13.0F)
          curveTo(8.223F, 13.0F, 8.0F, 12.776F, 8.0F, 12.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -1.381F, 1.119F, -2.5F, 2.5F, -2.5F)
          horizontalLineToRelative(0.793F)
          lineToRelative(-0.647F, -0.647F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.196F, 0.195F, 0.196F, 0.512F, 0.0F, 0.707F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.195F, 0.196F, -0.512F, 0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          lineTo(11.293F, 8.5F)
          horizontalLineTo(10.5F)
          close()
          moveTo(8.232F, 3.06F)
          curveToRelative(0.976F, -0.976F, 2.56F, -0.976F, 3.536F, 0.0F)
          lineToRelative(5.171F, 5.172F)
          curveToRelative(0.976F, 0.976F, 0.976F, 2.56F, 0.0F, 3.536F)
          lineToRelative(-5.171F, 5.171F)
          curveToRelative(-0.977F, 0.976F, -2.56F, 0.976F, -3.536F, 0.0F)
          lineTo(3.06F, 11.768F)
          curveToRelative(-0.976F, -0.977F, -0.976F, -2.56F, 0.0F, -3.536F)
          lineTo(8.232F, 3.06F)
          close()
          moveToRelative(2.828F, 0.708F)
          curveToRelative(-0.585F, -0.586F, -1.535F, -0.586F, -2.121F, 0.0F)
          lineTo(3.768F, 8.939F)
          curveToRelative(-0.586F, 0.586F, -0.586F, 1.536F, 0.0F, 2.121F)
          lineToRelative(5.171F, 5.172F)
          curveToRelative(0.586F, 0.586F, 1.536F, 0.586F, 2.121F, 0.0F)
          lineToRelative(5.172F, -5.172F)
          curveToRelative(0.586F, -0.585F, 0.586F, -1.535F, 0.0F, -2.121F)
          lineTo(11.06F, 3.768F)
          close()        
      }
    }
    return _directions20!!
  }

private var _directions20: ImageVector? = null
