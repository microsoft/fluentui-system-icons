package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageCircle48: ImageVector
  get() {
    if (_imageCircle48 != null) {
      return _imageCircle48!!
    }
    _imageCircle48 = fluentIcon(name = "Filled.ImageCircle48", 48f) {
      materialPath {
          moveTo(37.096F, 39.116F)
          curveTo(33.587F, 42.16F, 29.01F, 44.0F, 24.0F, 44.0F)
          reflectiveCurveToRelative(-9.587F, -1.841F, -13.096F, -4.884F)
          lineToRelative(12.39F, -12.325F)
          curveToRelative(0.39F, -0.388F, 1.021F, -0.388F, 1.411F, 0.0F)
          lineToRelative(12.391F, 12.325F)
          close()
          moveToRelative(1.784F, -1.752F)
          lineTo(26.468F, 25.02F)
          curveToRelative(-1.365F, -1.358F, -3.571F, -1.358F, -4.936F, 0.0F)
          lineTo(9.12F, 37.364F)
          curveTo(5.937F, 33.822F, 4.0F, 29.137F, 4.0F, 24.0F)
          curveTo(4.0F, 12.954F, 12.954F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveToRelative(20.0F, 8.954F, 20.0F, 20.0F)
          curveToRelative(0.0F, 5.137F, -1.937F, 9.822F, -5.12F, 13.364F)
          close()
          moveTo(35.0F, 17.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          reflectiveCurveToRelative(-4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          close()        
      }
    }
    return _imageCircle48!!
  }

private var _imageCircle48: ImageVector? = null
