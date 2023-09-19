package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherFog24: ImageVector
  get() {
    if (_weatherFog24 != null) {
      return _weatherFog24!!
    }
    _weatherFog24 = fluentIcon(name = "Filled.WeatherFog24", 24f) {
      materialPath {
          moveTo(7.745F, 19.5F)
          horizontalLineToRelative(8.501F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(16.246F, 21.0F)
          horizontalLineTo(7.745F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.648F, -0.743F)
          lineTo(7.745F, 19.5F)
          horizontalLineToRelative(8.501F)
          close()
          moveTo(4.75F, 16.52F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.335F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.379F, -0.282F, 0.693F, -0.648F, 0.742F)
          lineTo(19.25F, 18.02F)
          horizontalLineTo(4.75F)
          curveTo(4.336F, 18.02F, 4.0F, 17.684F, 4.0F, 17.27F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.648F, -0.743F)
          lineTo(4.75F, 16.52F)
          close()
          moveTo(12.0F, 3.004F)
          curveToRelative(3.168F, 0.0F, 4.966F, 2.097F, 5.227F, 4.63F)
          horizontalLineToRelative(0.08F)
          curveToRelative(2.04F, 0.0F, 3.692F, 1.649F, 3.692F, 3.683F)
          curveTo(21.0F, 13.35F, 19.346F, 15.0F, 17.307F, 15.0F)
          horizontalLineTo(6.693F)
          curveTo(4.653F, 15.0F, 3.0F, 13.351F, 3.0F, 11.318F)
          curveToRelative(0.0F, -2.034F, 1.653F, -3.683F, 3.692F, -3.683F)
          horizontalLineToRelative(0.08F)
          curveTo(7.035F, 5.085F, 8.83F, 3.005F, 12.0F, 3.005F)
          close()        
      }
    }
    return _weatherFog24!!
  }

private var _weatherFog24: ImageVector? = null
