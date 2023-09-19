package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlipHorizontal20: ImageVector
  get() {
    if (_flipHorizontal20 != null) {
      return _flipHorizontal20!!
    }
    _flipHorizontal20 = fluentIcon(name = "Filled.FlipHorizontal20", 20f) {
      materialPath {
          moveTo(17.878F, 15.66F)
          curveTo(17.74F, 15.872F, 17.503F, 16.0F, 17.25F, 16.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(11.336F, 16.0F, 11.0F, 15.664F, 11.0F, 15.25F)
          verticalLineTo(2.75F)
          curveToRelative(0.0F, -0.355F, 0.248F, -0.66F, 0.596F, -0.734F)
          curveToRelative(0.347F, -0.073F, 0.698F, 0.107F, 0.84F, 0.432F)
          lineToRelative(5.5F, 12.5F)
          curveToRelative(0.102F, 0.232F, 0.08F, 0.5F, -0.058F, 0.712F)
          close()
          moveTo(12.5F, 6.317F)
          verticalLineTo(14.5F)
          horizontalLineToRelative(3.6F)
          lineToRelative(-3.6F, -8.183F)
          close()
          moveTo(2.5F, 16.0F)
          curveToRelative(-0.17F, 0.0F, -0.33F, -0.087F, -0.421F, -0.23F)
          curveToRelative(-0.092F, -0.144F, -0.104F, -0.325F, -0.033F, -0.48F)
          lineToRelative(6.0F, -13.0F)
          curveToRelative(0.098F, -0.213F, 0.332F, -0.329F, 0.561F, -0.278F)
          curveTo(8.837F, 2.062F, 9.0F, 2.265F, 9.0F, 2.5F)
          verticalLineToRelative(13.0F)
          curveTo(9.0F, 15.776F, 8.776F, 16.0F, 8.5F, 16.0F)
          horizontalLineToRelative(-6.0F)
          close()        
      }
    }
    return _flipHorizontal20!!
  }

private var _flipHorizontal20: ImageVector? = null
