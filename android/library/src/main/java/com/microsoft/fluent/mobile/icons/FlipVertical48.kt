package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlipVertical48: ImageVector
  get() {
    if (_flipVertical48 != null) {
      return _flipVertical48!!
    }
    _flipVertical48 = fluentIcon(name = "Filled.FlipVertical48", 48f) {
      materialPath {
          moveTo(39.312F, 4.239F)
          curveTo(39.741F, 4.515F, 40.0F, 4.99F, 40.0F, 5.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 0.828F, -0.671F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-33.0F)
          curveToRelative(-0.706F, 0.0F, -1.316F, -0.492F, -1.466F, -1.182F)
          curveToRelative(-0.15F, -0.69F, 0.203F, -1.391F, 0.845F, -1.684F)
          lineToRelative(33.0F, -15.0F)
          curveToRelative(0.465F, -0.21F, 1.004F, -0.171F, 1.433F, 0.105F)
          close()
          moveTo(12.425F, 19.0F)
          horizontalLineTo(37.0F)
          verticalLineTo(7.83F)
          lineTo(12.425F, 19.0F)
          close()
          moveTo(40.0F, 43.0F)
          curveToRelative(0.0F, 0.342F, -0.175F, 0.66F, -0.464F, 0.844F)
          curveToRelative(-0.289F, 0.184F, -0.652F, 0.207F, -0.962F, 0.06F)
          lineToRelative(-34.0F, -16.0F)
          curveToRelative(-0.423F, -0.199F, -0.652F, -0.665F, -0.55F, -1.122F)
          curveTo(4.127F, 26.325F, 4.532F, 26.0F, 5.0F, 26.0F)
          horizontalLineToRelative(34.0F)
          curveToRelative(0.553F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(16.0F)
          close()        
      }
    }
    return _flipVertical48!!
  }

private var _flipVertical48: ImageVector? = null
