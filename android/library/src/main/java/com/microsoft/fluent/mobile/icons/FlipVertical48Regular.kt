package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlipVertical48: ImageVector
  get() {
    if (_flipVertical48 != null) {
      return _flipVertical48!!
    }
    _flipVertical48 = fluentIcon(name = "Regular.FlipVertical48", 48f) {
      materialPath {
          moveTo(39.423F, 4.197F)
          curveTo(39.783F, 4.427F, 40.0F, 4.824F, 40.0F, 5.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(5.25F)
          curveToRelative(-0.587F, 0.0F, -1.095F, -0.408F, -1.22F, -0.981F)
          curveToRelative(-0.127F, -0.573F, 0.163F, -1.157F, 0.695F, -1.403F)
          lineToRelative(33.5F, -15.5F)
          curveToRelative(0.387F, -0.18F, 0.839F, -0.149F, 1.198F, 0.08F)
          close()
          moveTo(10.928F, 19.5F)
          horizontalLineTo(37.5F)
          verticalLineTo(7.206F)
          lineTo(10.928F, 19.5F)
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
