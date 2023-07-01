package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BoardHeart20: ImageVector
  get() {
    if (_boardHeart20 != null) {
      return _boardHeart20!!
    }
    _boardHeart20 = fluentIcon(name = "Filled.BoardHeart20", 20f) {
      materialPath {
          moveTo(9.5F, 7.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(6.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(6.5F)
          close()
          moveToRelative(1.251F, 8.41F)
          lineToRelative(3.43F, 3.457F)
          curveToRelative(0.177F, 0.177F, 0.461F, 0.177F, 0.637F, 0.0F)
          lineToRelative(3.431F, -3.457F)
          curveToRelative(1.001F, -1.008F, 1.001F, -2.644F, 0.0F, -3.653F)
          curveToRelative(-0.356F, -0.36F, -0.791F, -0.59F, -1.249F, -0.694F)
          curveToRelative(-0.797F, -0.18F, -1.663F, 0.027F, -2.302F, 0.62F)
          lineToRelative(-0.075F, 0.074F)
          lineTo(14.5F, 11.88F)
          lineToRelative(-0.123F, -0.123F)
          lineToRelative(-0.075F, -0.073F)
          curveToRelative(-1.006F, -0.936F, -2.574F, -0.911F, -3.551F, 0.073F)
          curveToRelative(-0.077F, 0.077F, -0.148F, 0.159F, -0.213F, 0.243F)
          curveToRelative(-0.704F, 0.912F, -0.717F, 2.191F, -0.038F, 3.117F)
          curveToRelative(0.075F, 0.102F, 0.159F, 0.2F, 0.251F, 0.293F)
          close()
          moveTo(9.5F, 17.0F)
          verticalLineToRelative(-1.584F)
          curveToRelative(-0.667F, -1.126F, -0.667F, -2.54F, 0.0F, -3.665F)
          verticalLineTo(8.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(3.5F)
          close()
          moveToRelative(5.0F, -6.426F)
          curveToRelative(0.751F, -0.49F, 1.646F, -0.666F, 2.5F, -0.53F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineToRelative(-3.5F)
          verticalLineToRelative(7.661F)
          curveToRelative(1.19F, -0.851F, 2.783F, -0.88F, 4.0F, -0.087F)
          close()        
      }
    }
    return _boardHeart20!!
  }

private var _boardHeart20: ImageVector? = null
