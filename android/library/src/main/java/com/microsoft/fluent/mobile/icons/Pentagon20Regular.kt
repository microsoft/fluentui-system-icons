package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pentagon20: ImageVector
  get() {
    if (_pentagon20 != null) {
      return _pentagon20!!
    }
    _pentagon20 = fluentIcon(name = "Regular.Pentagon20", 20f) {
      materialPath {
          moveTo(8.392F, 1.648F)
          curveToRelative(0.957F, -0.868F, 2.417F, -0.863F, 3.37F, 0.01F)
          lineToRelative(5.43F, 4.98F)
          curveToRelative(0.729F, 0.669F, 0.995F, 1.704F, 0.68F, 2.64F)
          lineToRelative(-2.027F, 6.02F)
          curveToRelative(-0.343F, 1.016F, -1.296F, 1.701F, -2.37F, 1.701F)
          horizontalLineTo(6.65F)
          curveToRelative(-1.053F, 0.0F, -1.993F, -0.66F, -2.351F, -1.65F)
          lineToRelative(-2.15F, -5.947F)
          curveTo(1.805F, 8.448F, 2.07F, 7.382F, 2.822F, 6.7F)
          lineToRelative(5.57F, -5.052F)
          close()
          moveToRelative(2.693F, 0.747F)
          curveTo(10.514F, 1.87F, 9.638F, 1.868F, 9.064F, 2.389F)
          lineTo(3.492F, 7.44F)
          curveToRelative(-0.45F, 0.41F, -0.61F, 1.05F, -0.402F, 1.62F)
          lineToRelative(2.15F, 5.948F)
          curveTo(5.453F, 15.603F, 6.017F, 16.0F, 6.649F, 16.0F)
          horizontalLineToRelative(6.827F)
          curveToRelative(0.643F, 0.0F, 1.216F, -0.41F, 1.421F, -1.02F)
          lineToRelative(2.027F, -6.02F)
          curveToRelative(0.189F, -0.562F, 0.03F, -1.182F, -0.408F, -1.583F)
          lineToRelative(-5.43F, -4.981F)
          close()        
      }
    }
    return _pentagon20!!
  }

private var _pentagon20: ImageVector? = null
