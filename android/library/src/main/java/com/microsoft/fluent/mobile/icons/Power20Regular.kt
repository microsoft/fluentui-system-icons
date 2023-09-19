package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Power20: ImageVector
  get() {
    if (_power20 != null) {
      return _power20!!
    }
    _power20 = fluentIcon(name = "Regular.Power20", 20f) {
      materialPath {
          moveTo(10.5F, 2.5F)
          curveTo(10.5F, 2.224F, 10.276F, 2.0F, 10.0F, 2.0F)
          reflectiveCurveTo(9.5F, 2.224F, 9.5F, 2.5F)
          verticalLineToRelative(6.0F)
          curveTo(9.5F, 8.776F, 9.724F, 9.0F, 10.0F, 9.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-6.0F)
          close()
          moveTo(13.743F, 4.0F)
          curveToRelative(-0.24F, -0.137F, -0.545F, -0.055F, -0.683F, 0.185F)
          curveToRelative(-0.137F, 0.239F, -0.055F, 0.545F, 0.184F, 0.682F)
          curveToRelative(1.24F, 0.715F, 2.21F, 1.818F, 2.759F, 3.14F)
          curveToRelative(0.549F, 1.322F, 0.646F, 2.788F, 0.277F, 4.17F)
          curveToRelative(-0.37F, 1.383F, -1.185F, 2.605F, -2.32F, 3.477F)
          curveTo(12.825F, 16.526F, 11.435F, 17.0F, 10.003F, 17.0F)
          curveToRelative(-1.43F, 0.0F, -2.822F, -0.47F, -3.958F, -1.342F)
          curveToRelative(-1.136F, -0.87F, -1.952F, -2.092F, -2.323F, -3.474F)
          curveToRelative(-0.37F, -1.382F, -0.275F, -2.848F, 0.272F, -4.17F)
          curveTo(4.543F, 6.69F, 5.511F, 5.585F, 6.75F, 4.87F)
          curveToRelative(0.24F, -0.138F, 0.321F, -0.444F, 0.183F, -0.683F)
          curveToRelative(-0.138F, -0.24F, -0.444F, -0.321F, -0.683F, -0.183F)
          curveToRelative(-1.43F, 0.825F, -2.548F, 2.1F, -3.18F, 3.626F)
          curveToRelative(-0.631F, 1.525F, -0.742F, 3.217F, -0.314F, 4.812F)
          curveToRelative(0.428F, 1.595F, 1.37F, 3.004F, 2.68F, 4.009F)
          curveTo(6.748F, 17.457F, 8.354F, 18.0F, 10.005F, 18.0F)
          curveToRelative(1.651F, 0.0F, 3.256F, -0.547F, 4.566F, -1.553F)
          curveToRelative(1.309F, -1.006F, 2.25F, -2.416F, 2.676F, -4.011F)
          curveToRelative(0.426F, -1.596F, 0.314F, -3.287F, -0.32F, -4.813F)
          curveToRelative(-0.633F, -1.525F, -1.752F, -2.798F, -3.183F, -3.622F)
          close()        
      }
    }
    return _power20!!
  }

private var _power20: ImageVector? = null
