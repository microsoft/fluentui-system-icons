package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlipHorizontal20: ImageVector
  get() {
    if (_flipHorizontal20 != null) {
      return _flipHorizontal20!!
    }
    _flipHorizontal20 = fluentIcon(name = "Regular.FlipHorizontal20", 20f) {
      materialPath {
          moveTo(17.921F, 15.77F)
          curveTo(17.83F, 15.913F, 17.671F, 16.0F, 17.5F, 16.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-13.0F)
          curveToRelative(0.0F, -0.235F, 0.163F, -0.438F, 0.393F, -0.488F)
          curveToRelative(0.23F, -0.05F, 0.463F, 0.065F, 0.561F, 0.279F)
          lineToRelative(6.0F, 13.0F)
          curveToRelative(0.071F, 0.154F, 0.06F, 0.335F, -0.033F, 0.479F)
          close()
          moveTo(12.0F, 4.777F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(4.718F)
          lineTo(12.0F, 4.777F)
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
