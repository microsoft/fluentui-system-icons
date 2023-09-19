package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Wifi324: ImageVector
  get() {
    if (_wifi324 != null) {
      return _wifi324!!
    }
    _wifi324 = fluentIcon(name = "Regular.Wifi324", 324f) {
      materialPath {
          moveTo(10.94F, 16.44F)
          curveToRelative(0.585F, -0.587F, 1.535F, -0.587F, 2.12F, 0.0F)
          curveToRelative(0.587F, 0.585F, 0.587F, 1.535F, 0.0F, 2.12F)
          curveToRelative(-0.585F, 0.587F, -1.535F, 0.587F, -2.12F, 0.0F)
          curveToRelative(-0.587F, -0.585F, -0.587F, -1.535F, 0.0F, -2.12F)
          close()
          moveToRelative(-2.498F, -2.62F)
          curveToRelative(1.989F, -1.989F, 5.213F, -1.989F, 7.201F, 0.0F)
          curveToRelative(0.448F, 0.447F, 0.816F, 0.997F, 1.072F, 1.582F)
          curveToRelative(0.167F, 0.38F, -0.006F, 0.821F, -0.386F, 0.988F)
          curveToRelative(-0.379F, 0.166F, -0.821F, -0.007F, -0.988F, -0.386F)
          curveToRelative(-0.183F, -0.418F, -0.446F, -0.812F, -0.758F, -1.124F)
          curveToRelative(-1.403F, -1.403F, -3.677F, -1.403F, -5.08F, 0.0F)
          curveToRelative(-0.31F, 0.31F, -0.563F, 0.689F, -0.747F, 1.11F)
          curveToRelative(-0.166F, 0.38F, -0.609F, 0.553F, -0.988F, 0.387F)
          curveToRelative(-0.38F, -0.166F, -0.553F, -0.608F, -0.386F, -0.988F)
          curveToRelative(0.257F, -0.588F, 0.613F, -1.123F, 1.06F, -1.57F)
          close()        
      }
    }
    return _wifi324!!
  }

private var _wifi324: ImageVector? = null
