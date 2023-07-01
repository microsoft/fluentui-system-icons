package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Eraser24: ImageVector
  get() {
    if (_eraser24 != null) {
      return _eraser24!!
    }
    _eraser24 = fluentIcon(name = "Filled.Eraser24", 24f) {
      materialPath {
          moveTo(15.87F, 2.669F)
          lineToRelative(4.968F, 4.968F)
          curveToRelative(0.879F, 0.879F, 0.879F, 2.304F, 0.0F, 3.182F)
          lineToRelative(-8.682F, 8.68F)
          lineToRelative(6.098F, 0.001F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineToRelative(0.007F, 0.102F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(18.254F, 21.0F)
          lineToRelative(-8.41F, 0.001F)
          curveToRelative(-0.616F, 0.034F, -1.243F, -0.185F, -1.714F, -0.655F)
          lineToRelative(-4.969F, -4.969F)
          curveToRelative(-0.878F, -0.879F, -0.878F, -2.303F, 0.0F, -3.182F)
          lineToRelative(9.527F, -9.526F)
          curveToRelative(0.878F, -0.879F, 2.303F, -0.879F, 3.182F, 0.0F)
          close()
          moveToRelative(-4.172F, 15.09F)
          lineToRelative(-5.955F, -5.956F)
          lineToRelative(-1.506F, 1.467F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          lineToRelative(4.945F, 4.946F)
          curveToRelative(0.298F, 0.289F, 0.772F, 0.281F, 1.06F, -0.016F)
          lineToRelative(1.455F, -1.502F)
          close()        
      }
    }
    return _eraser24!!
  }

private var _eraser24: ImageVector? = null
