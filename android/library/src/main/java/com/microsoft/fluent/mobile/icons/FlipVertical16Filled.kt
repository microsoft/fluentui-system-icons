package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlipVertical16: ImageVector
  get() {
    if (_flipVertical16 != null) {
      return _flipVertical16!!
    }
    _flipVertical16 = fluentIcon(name = "Filled.FlipVertical16", 16f) {
      materialPath {
          moveTo(12.651F, 1.116F)
          curveToRelative(0.217F, 0.138F, 0.35F, 0.377F, 0.35F, 0.634F)
          verticalLineToRelative(4.5F)
          curveTo(13.0F, 6.664F, 12.663F, 7.0F, 12.25F, 7.0F)
          horizontalLineToRelative(-9.5F)
          curveTo(2.398F, 7.0F, 2.094F, 6.757F, 2.017F, 6.415F)
          curveTo(1.941F, 6.072F, 2.112F, 5.722F, 2.43F, 5.572F)
          lineToRelative(9.5F, -4.5F)
          curveToRelative(0.232F, -0.11F, 0.505F, -0.093F, 0.722F, 0.044F)
          close()
          moveTo(6.085F, 5.5F)
          horizontalLineTo(11.5F)
          verticalLineTo(2.935F)
          lineTo(6.085F, 5.5F)
          close()
          moveToRelative(6.915F, 9.0F)
          curveToRelative(0.0F, 0.173F, -0.09F, 0.334F, -0.237F, 0.425F)
          curveToRelative(-0.147F, 0.091F, -0.332F, 0.1F, -0.487F, 0.022F)
          lineToRelative(-10.0F, -5.0F)
          curveTo(2.07F, 9.844F, 1.96F, 9.611F, 2.013F, 9.385F)
          curveTo(2.067F, 9.16F, 2.268F, 9.0F, 2.5F, 9.0F)
          horizontalLineToRelative(10.0F)
          curveTo(12.776F, 9.0F, 13.0F, 9.224F, 13.0F, 9.5F)
          verticalLineToRelative(5.0F)
          close()        
      }
    }
    return _flipVertical16!!
  }

private var _flipVertical16: ImageVector? = null
