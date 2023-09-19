package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DrinkToGo24: ImageVector
  get() {
    if (_drinkToGo24 != null) {
      return _drinkToGo24!!
    }
    _drinkToGo24 = fluentIcon(name = "Filled.DrinkToGo24", 24f) {
      materialPath {
          moveTo(15.72F, 2.22F)
          curveToRelative(0.293F, -0.293F, 0.768F, -0.293F, 1.061F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(15.56F, 4.5F)
          horizontalLineToRelative(2.19F)
          curveToRelative(0.318F, 0.0F, 0.6F, 0.2F, 0.707F, 0.498F)
          lineToRelative(1.25F, 3.5F)
          curveTo(19.88F, 8.986F, 19.519F, 9.5F, 19.0F, 9.5F)
          horizontalLineToRelative(-1.045F)
          lineToRelative(-1.587F, 10.05F)
          curveToRelative(-0.21F, 1.465F, -1.46F, 2.45F, -2.97F, 2.45F)
          horizontalLineToRelative(-2.796F)
          curveToRelative(-1.511F, 0.0F, -2.761F, -0.985F, -2.969F, -2.44F)
          lineTo(6.045F, 9.5F)
          horizontalLineTo(5.001F)
          curveToRelative(-0.519F, 0.0F, -0.881F, -0.514F, -0.707F, -1.002F)
          lineToRelative(1.25F, -3.5F)
          curveTo(5.651F, 4.699F, 5.934F, 4.5F, 6.251F, 4.5F)
          horizontalLineToRelative(7.188F)
          lineToRelative(2.281F, -2.28F)
          close()
          moveTo(17.222F, 6.0F)
          horizontalLineTo(6.78F)
          lineTo(6.065F, 8.0F)
          horizontalLineToRelative(11.871F)
          lineToRelative(-0.714F, -2.0F)
          close()        
      }
    }
    return _drinkToGo24!!
  }

private var _drinkToGo24: ImageVector? = null
