package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Directions16: ImageVector
  get() {
    if (_directions16 != null) {
      return _directions16!!
    }
    _directions16 = fluentIcon(name = "Filled.Directions16", 16f) {
      materialPath {
          moveTo(6.233F, 2.697F)
          curveToRelative(0.976F, -0.976F, 2.559F, -0.976F, 3.535F, 0.0F)
          lineToRelative(3.536F, 3.536F)
          curveToRelative(0.976F, 0.976F, 0.976F, 2.559F, 0.0F, 3.535F)
          lineToRelative(-3.536F, 3.536F)
          curveToRelative(-0.976F, 0.976F, -2.56F, 0.976F, -3.535F, 0.0F)
          lineTo(2.697F, 9.768F)
          curveToRelative(-0.976F, -0.976F, -0.976F, -2.56F, 0.0F, -3.535F)
          lineToRelative(3.536F, -3.536F)
          close()
          moveToRelative(2.62F, 1.95F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(8.793F, 6.0F)
          horizontalLineTo(7.5F)
          curveTo(6.672F, 6.0F, 6.0F, 6.672F, 6.0F, 7.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(7.0F, 10.276F, 7.0F, 10.0F)
          verticalLineTo(7.5F)
          curveTo(7.0F, 7.224F, 7.224F, 7.0F, 7.5F, 7.0F)
          horizontalLineToRelative(1.293F)
          lineTo(8.147F, 7.646F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(1.5F, -1.5F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-1.5F, -1.5F)
          close()        
      }
    }
    return _directions16!!
  }

private var _directions16: ImageVector? = null
