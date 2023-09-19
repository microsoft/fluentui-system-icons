package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.VideoOff32: ImageVector
  get() {
    if (_videoOff32 != null) {
      return _videoOff32!!
    }
    _videoOff32 = fluentIcon(name = "Regular.VideoOff32", 32f) {
      materialPath {
          moveTo(22.55F, 23.964F)
          lineToRelative(5.743F, 5.743F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-26.0F, -26.0F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineTo(4.536F, 5.95F)
          curveTo(3.035F, 6.68F, 2.0F, 8.219F, 2.0F, 10.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 2.485F, 2.015F, 4.5F, 4.5F, 4.5F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.781F, 0.0F, 3.32F, -1.035F, 4.05F, -2.536F)
          close()
          moveToRelative(-1.58F, -1.58F)
          curveToRelative(-0.184F, 1.199F, -1.22F, 2.116F, -2.47F, 2.116F)
          horizontalLineToRelative(-12.0F)
          curveTo(5.12F, 24.5F, 4.0F, 23.38F, 4.0F, 22.0F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -1.25F, 0.917F, -2.286F, 2.115F, -2.47F)
          lineToRelative(14.856F, 14.855F)
          close()
          moveTo(21.0F, 10.0F)
          verticalLineToRelative(7.465F)
          lineToRelative(6.14F, 6.139F)
          lineToRelative(0.06F, 0.046F)
          curveToRelative(1.154F, 0.865F, 2.8F, 0.042F, 2.8F, -1.4F)
          verticalLineTo(9.75F)
          curveToRelative(0.0F, -1.443F, -1.646F, -2.266F, -2.8F, -1.4F)
          lineTo(23.0F, 11.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -2.486F, -2.014F, -4.5F, -4.5F, -4.5F)
          horizontalLineTo(9.035F)
          lineToRelative(2.0F, 2.0F)
          horizontalLineTo(18.5F)
          curveToRelative(1.381F, 0.0F, 2.5F, 1.119F, 2.5F, 2.5F)
          close()
          moveToRelative(2.0F, 4.0F)
          lineToRelative(5.0F, -3.75F)
          verticalLineToRelative(11.5F)
          lineTo(23.0F, 18.0F)
          verticalLineToRelative(-4.0F)
          close()        
      }
    }
    return _videoOff32!!
  }

private var _videoOff32: ImageVector? = null
