package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.People20: ImageVector
  get() {
    if (_people20 != null) {
      return _people20!!
    }
    _people20 = fluentIcon(name = "Filled.People20", 20f) {
      materialPath {
          moveTo(6.75F, 10.0F)
          curveTo(8.545F, 10.0F, 10.0F, 8.545F, 10.0F, 6.75F)
          reflectiveCurveTo(8.545F, 3.5F, 6.75F, 3.5F)
          reflectiveCurveTo(3.5F, 4.955F, 3.5F, 6.75F)
          reflectiveCurveTo(4.955F, 10.0F, 6.75F, 10.0F)
          close()
          moveToRelative(5.687F, 5.145F)
          curveToRelative(0.53F, 0.217F, 1.204F, 0.355F, 2.062F, 0.355F)
          curveToRelative(4.0F, 0.0F, 4.0F, -3.0F, 4.0F, -3.0F)
          curveToRelative(0.0F, -0.828F, -0.671F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-4.628F)
          curveTo(12.764F, 11.476F, 13.0F, 12.085F, 13.0F, 12.75F)
          verticalLineToRelative(0.356F)
          lineToRelative(-0.003F, 0.064F)
          curveToRelative(-0.002F, 0.05F, -0.006F, 0.113F, -0.014F, 0.188F)
          curveToRelative(-0.014F, 0.149F, -0.042F, 0.347F, -0.096F, 0.578F)
          curveToRelative(-0.077F, 0.338F, -0.213F, 0.762F, -0.45F, 1.209F)
          close()
          moveTo(17.0F, 7.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveTo(12.0F, 8.88F, 12.0F, 7.5F)
          reflectiveCurveTo(13.12F, 5.0F, 14.5F, 5.0F)
          reflectiveCurveTo(17.0F, 6.12F, 17.0F, 7.5F)
          close()
          moveTo(1.5F, 13.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineTo(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          curveToRelative(0.0F, 0.0F, 0.0F, 4.0F, -5.25F, 4.0F)
          reflectiveCurveTo(1.5F, 13.0F, 1.5F, 13.0F)
          close()
          moveTo(13.0F, 13.106F)
          lineToRelative(-0.003F, 0.064F)
          close()        
      }
    }
    return _people20!!
  }

private var _people20: ImageVector? = null
