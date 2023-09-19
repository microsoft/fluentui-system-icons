package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlipHorizontal48: ImageVector
  get() {
    if (_flipHorizontal48 != null) {
      return _flipHorizontal48!!
    }
    _flipHorizontal48 = fluentIcon(name = "Filled.FlipHorizontal48", 48f) {
      materialPath {
          moveTo(43.761F, 39.312F)
          curveTo(43.485F, 39.741F, 43.01F, 40.0F, 42.5F, 40.0F)
          horizontalLineToRelative(-15.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.671F, -1.5F, -1.5F)
          verticalLineToRelative(-33.0F)
          curveToRelative(0.0F, -0.706F, 0.492F, -1.316F, 1.182F, -1.466F)
          curveToRelative(0.69F, -0.15F, 1.391F, 0.203F, 1.684F, 0.845F)
          lineToRelative(15.0F, 33.0F)
          curveToRelative(0.21F, 0.465F, 0.171F, 1.004F, -0.105F, 1.433F)
          close()
          moveTo(29.0F, 12.425F)
          verticalLineTo(37.0F)
          horizontalLineToRelative(11.17F)
          lineTo(29.0F, 12.425F)
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
