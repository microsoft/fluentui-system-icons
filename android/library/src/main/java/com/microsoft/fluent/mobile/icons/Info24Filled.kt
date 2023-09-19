package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Info24: ImageVector
  get() {
    if (_info24 != null) {
      return _info24!!
    }
    _info24 = fluentIcon(name = "Filled.Info24", 24f) {
      materialPath {
          moveTo(12.0F, 1.998F)
          curveToRelative(5.524F, 0.0F, 10.002F, 4.478F, 10.002F, 10.002F)
          curveToRelative(0.0F, 5.523F, -4.478F, 10.0F, -10.002F, 10.0F)
          curveToRelative(-5.524F, 0.001F, -10.002F, -4.477F, -10.002F, -10.0F)
          curveTo(1.998F, 6.476F, 6.476F, 1.998F, 12.0F, 1.998F)
          close()
          moveToRelative(-0.004F, 8.25F)
          curveToRelative(-0.513F, 0.001F, -0.935F, 0.387F, -0.992F, 0.885F)
          lineToRelative(-0.007F, 0.116F)
          lineTo(11.0F, 16.751F)
          lineToRelative(0.006F, 0.116F)
          curveToRelative(0.058F, 0.498F, 0.481F, 0.884F, 0.994F, 0.883F)
          curveToRelative(0.513F, 0.0F, 0.935F, -0.386F, 0.993F, -0.884F)
          lineTo(13.0F, 16.75F)
          lineToRelative(-0.004F, -5.502F)
          lineToRelative(-0.007F, -0.117F)
          curveToRelative(-0.058F, -0.497F, -0.48F, -0.883F, -0.994F, -0.882F)
          close()
          moveTo(12.001F, 6.5F)
          curveToRelative(-0.692F, 0.0F, -1.252F, 0.56F, -1.252F, 1.252F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.251F, 1.252F, 1.251F)
          curveToRelative(0.69F, 0.0F, 1.251F, -0.56F, 1.251F, -1.251F)
          curveTo(13.252F, 7.06F, 12.692F, 6.5F, 12.0F, 6.5F)
          close()        
      }
    }
    return _info24!!
  }

private var _info24: ImageVector? = null
