package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Fluent20: ImageVector
  get() {
    if (_fluent20 != null) {
      return _fluent20!!
    }
    _fluent20 = fluentIcon(name = "Regular.Fluent20", 20f) {
      materialPath {
          moveTo(10.276F, 2.053F)
          curveToRelative(0.141F, -0.07F, 0.307F, -0.07F, 0.448F, 0.0F)
          lineToRelative(5.0F, 2.5F)
          curveTo(15.893F, 4.638F, 16.0F, 4.81F, 16.0F, 5.0F)
          reflectiveCurveToRelative(-0.107F, 0.362F, -0.276F, 0.447F)
          lineTo(11.618F, 7.5F)
          lineToRelative(4.106F, 2.053F)
          curveTo(15.893F, 9.637F, 16.0F, 9.81F, 16.0F, 10.0F)
          reflectiveCurveToRelative(-0.107F, 0.363F, -0.276F, 0.447F)
          lineTo(11.0F, 12.81F)
          verticalLineToRelative(4.69F)
          curveToRelative(0.0F, 0.18F, -0.097F, 0.346F, -0.254F, 0.435F)
          curveToRelative(-0.156F, 0.089F, -0.349F, 0.086F, -0.503F, -0.006F)
          lineToRelative(-5.0F, -3.0F)
          curveTo(5.093F, 14.839F, 5.0F, 14.676F, 5.0F, 14.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.19F, 0.107F, -0.362F, 0.276F, -0.447F)
          lineToRelative(5.0F, -2.5F)
          close()
          moveTo(6.0F, 5.309F)
          verticalLineToRelative(8.908F)
          lineToRelative(4.0F, 2.4F)
          verticalLineToRelative(-3.808F)
          curveToRelative(0.0F, -0.379F, 0.214F, -0.725F, 0.553F, -0.894F)
          lineTo(14.382F, 10.0F)
          lineToRelative(-4.106F, -2.053F)
          curveTo(10.107F, 7.862F, 10.0F, 7.69F, 10.0F, 7.5F)
          reflectiveCurveToRelative(0.107F, -0.362F, 0.276F, -0.447F)
          lineTo(14.382F, 5.0F)
          lineTo(10.5F, 3.059F)
          lineTo(6.0F, 5.309F)
          close()        
      }
    }
    return _fluent20!!
  }

private var _fluent20: ImageVector? = null
