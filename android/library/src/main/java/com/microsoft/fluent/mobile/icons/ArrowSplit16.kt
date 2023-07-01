package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSplit16: ImageVector
  get() {
    if (_arrowSplit16 != null) {
      return _arrowSplit16!!
    }
    _arrowSplit16 = fluentIcon(name = "Regular.ArrowSplit16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(2.0F)
          curveTo(11.328F, 6.0F, 12.0F, 6.672F, 12.0F, 7.5F)
          verticalLineToRelative(4.793F)
          lineToRelative(1.146F, -1.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          lineTo(11.0F, 12.293F)
          verticalLineTo(7.5F)
          curveTo(11.0F, 7.224F, 10.776F, 7.0F, 10.5F, 7.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(5.224F, 7.0F, 5.0F, 7.224F, 5.0F, 7.5F)
          verticalLineToRelative(4.793F)
          lineToRelative(1.146F, -1.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(4.0F, 12.293F)
          verticalLineTo(7.5F)
          curveTo(4.0F, 6.672F, 4.672F, 6.0F, 5.5F, 6.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(2.5F)
          curveTo(7.5F, 2.224F, 7.724F, 2.0F, 8.0F, 2.0F)
          close()        
      }
    }
    return _arrowSplit16!!
  }

private var _arrowSplit16: ImageVector? = null
