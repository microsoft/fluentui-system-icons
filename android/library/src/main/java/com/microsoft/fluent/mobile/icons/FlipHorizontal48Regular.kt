package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlipHorizontal48: ImageVector
  get() {
    if (_flipHorizontal48 != null) {
      return _flipHorizontal48!!
    }
    _flipHorizontal48 = fluentIcon(name = "Regular.FlipHorizontal48", 48f) {
      materialPath {
          moveTo(43.803F, 39.423F)
          curveTo(43.573F, 39.783F, 43.176F, 40.0F, 42.75F, 40.0F)
          horizontalLineToRelative(-15.5F)
          curveTo(26.56F, 40.0F, 26.0F, 39.44F, 26.0F, 38.75F)
          verticalLineTo(5.25F)
          curveToRelative(0.0F, -0.587F, 0.408F, -1.095F, 0.981F, -1.22F)
          curveToRelative(0.573F, -0.127F, 1.157F, 0.163F, 1.403F, 0.695F)
          lineToRelative(15.5F, 33.5F)
          curveToRelative(0.18F, 0.387F, 0.149F, 0.839F, -0.08F, 1.198F)
          close()
          moveTo(28.5F, 10.928F)
          verticalLineTo(37.5F)
          horizontalLineToRelative(12.294F)
          lineTo(28.5F, 10.928F)
          close()
          moveTo(5.0F, 40.0F)
          curveToRelative(-0.342F, 0.0F, -0.66F, -0.175F, -0.844F, -0.464F)
          curveToRelative(-0.184F, -0.289F, -0.207F, -0.652F, -0.06F, -0.962F)
          lineToRelative(16.0F, -34.0F)
          curveToRelative(0.199F, -0.423F, 0.665F, -0.652F, 1.122F, -0.55F)
          curveTo(21.675F, 4.127F, 22.0F, 4.532F, 22.0F, 5.0F)
          verticalLineToRelative(34.0F)
          curveToRelative(0.0F, 0.553F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _flipHorizontal48!!
  }

private var _flipHorizontal48: ImageVector? = null
