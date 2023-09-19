package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Drop28: ImageVector
  get() {
    if (_drop28 != null) {
      return _drop28!!
    }
    _drop28 = fluentIcon(name = "Filled.Drop28", 28f) {
      materialPath {
          moveTo(13.47F, 2.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.523F, 0.523F, 2.494F, 2.614F, 4.34F, 5.315F)
          curveToRelative(1.823F, 2.67F, 3.63F, 6.083F, 3.63F, 9.215F)
          curveToRelative(0.0F, 3.041F, -0.917F, 5.374F, -2.49F, 6.947F)
          curveTo(18.442F, 25.267F, 16.299F, 26.0F, 14.0F, 26.0F)
          curveToRelative(-2.298F, 0.0F, -4.441F, -0.733F, -6.01F, -2.303F)
          curveTo(6.416F, 22.124F, 5.5F, 19.79F, 5.5F, 16.75F)
          curveToRelative(0.0F, -3.132F, 1.807F, -6.545F, 3.63F, -9.215F)
          curveToRelative(1.846F, -2.7F, 3.817F, -4.792F, 4.34F, -5.315F)
          close()        
      }
    }
    return _drop28!!
  }

private var _drop28: ImageVector? = null
