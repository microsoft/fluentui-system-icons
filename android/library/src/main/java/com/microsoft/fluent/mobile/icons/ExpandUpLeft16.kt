package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ExpandUpLeft16: ImageVector
  get() {
    if (_expandUpLeft16 != null) {
      return _expandUpLeft16!!
    }
    _expandUpLeft16 = fluentIcon(name = "Filled.ExpandUpLeft16", 16f) {
      materialPath {
          moveTo(7.23F, 2.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(2.5F)
          curveTo(2.222F, 2.0F, 2.0F, 2.224F, 2.0F, 2.5F)
          verticalLineToRelative(4.23F)
          curveToRelative(0.0F, 0.277F, 0.223F, 0.5F, 0.5F, 0.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.223F, 0.5F, -0.5F)
          verticalLineTo(3.708F)
          lineToRelative(3.377F, 3.377F)
          curveToRelative(0.195F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(3.707F, 3.0F)
          horizontalLineTo(6.73F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          close()
          moveTo(11.5F, 3.0F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineTo(8.0F)
          horizontalLineTo(9.769F)
          curveToRelative(-0.977F, 0.0F, -1.77F, 0.792F, -1.77F, 1.77F)
          verticalLineTo(13.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineTo(9.27F)
          curveToRelative(0.0F, -0.277F, -0.223F, -0.5F, -0.5F, -0.5F)
          curveToRelative(-0.275F, 0.0F, -0.5F, 0.223F, -0.5F, 0.5F)
          verticalLineToRelative(2.23F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.381F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineTo(9.27F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(8.993F, 3.0F, 9.269F, 3.0F)
          horizontalLineToRelative(2.23F)
          close()        
      }
    }
    return _expandUpLeft16!!
  }

private var _expandUpLeft16: ImageVector? = null
