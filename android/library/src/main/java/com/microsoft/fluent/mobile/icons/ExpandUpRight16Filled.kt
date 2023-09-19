package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ExpandUpRight16: ImageVector
  get() {
    if (_expandUpRight16 != null) {
      return _expandUpRight16!!
    }
    _expandUpRight16 = fluentIcon(name = "Filled.ExpandUpRight16", 16f) {
      materialPath {
          moveTo(4.5F, 3.0F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(3.23F)
          curveTo(7.209F, 8.0F, 8.0F, 8.792F, 8.0F, 9.77F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(9.27F)
          curveToRelative(0.0F, -0.277F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveTo(14.0F, 8.992F, 14.0F, 9.27F)
          verticalLineToRelative(2.23F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(2.23F)
          curveToRelative(0.277F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(7.008F, 3.0F, 6.73F, 3.0F)
          horizontalLineTo(4.5F)
          close()
          moveToRelative(4.27F, -0.5F)
          curveToRelative(0.0F, -0.276F, 0.223F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(4.23F)
          curveTo(13.776F, 2.0F, 14.0F, 2.224F, 14.0F, 2.5F)
          verticalLineToRelative(4.23F)
          curveToRelative(0.0F, 0.277F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(13.0F, 7.008F, 13.0F, 6.73F)
          verticalLineTo(3.708F)
          lineTo(9.623F, 7.084F)
          curveToRelative(-0.195F, 0.196F, -0.512F, 0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          lineTo(12.293F, 3.0F)
          horizontalLineTo(9.27F)
          curveToRelative(-0.277F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          close()        
      }
    }
    return _expandUpRight16!!
  }

private var _expandUpRight16: ImageVector? = null
