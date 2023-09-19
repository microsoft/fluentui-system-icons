package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlipVertical20: ImageVector
  get() {
    if (_flipVertical20 != null) {
      return _flipVertical20!!
    }
    _flipVertical20 = fluentIcon(name = "Filled.FlipVertical20", 20f) {
      materialPath {
          moveTo(15.66F, 2.122F)
          curveTo(15.872F, 2.26F, 16.0F, 2.497F, 16.0F, 2.75F)
          verticalLineToRelative(5.5F)
          curveTo(16.0F, 8.664F, 15.664F, 9.0F, 15.25F, 9.0F)
          horizontalLineTo(2.75F)
          curveTo(2.395F, 9.0F, 2.09F, 8.752F, 2.016F, 8.404F)
          curveToRelative(-0.073F, -0.347F, 0.107F, -0.698F, 0.432F, -0.84F)
          lineToRelative(12.5F, -5.5F)
          curveToRelative(0.232F, -0.103F, 0.5F, -0.08F, 0.712F, 0.058F)
          close()
          moveTo(6.317F, 7.5F)
          horizontalLineTo(14.5F)
          verticalLineTo(3.9F)
          lineTo(6.317F, 7.5F)
          close()
          moveTo(16.0F, 17.5F)
          curveToRelative(0.0F, 0.17F, -0.087F, 0.33F, -0.23F, 0.421F)
          curveToRelative(-0.144F, 0.092F, -0.325F, 0.104F, -0.48F, 0.033F)
          lineToRelative(-13.0F, -6.0F)
          curveToRelative(-0.213F, -0.098F, -0.329F, -0.332F, -0.278F, -0.561F)
          curveTo(2.062F, 11.163F, 2.265F, 11.0F, 2.5F, 11.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(6.0F)
          close()        
      }
    }
    return _flipVertical20!!
  }

private var _flipVertical20: ImageVector? = null
