package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.People16: ImageVector
  get() {
    if (_people16 != null) {
      return _people16!!
    }
    _people16 = fluentIcon(name = "Filled.People16", 16f) {
      materialPath {
          moveTo(8.0F, 5.5F)
          curveTo(8.0F, 6.88F, 6.88F, 8.0F, 5.5F, 8.0F)
          reflectiveCurveTo(3.0F, 6.88F, 3.0F, 5.5F)
          reflectiveCurveTo(4.12F, 3.0F, 5.5F, 3.0F)
          reflectiveCurveTo(8.0F, 4.12F, 8.0F, 5.5F)
          close()
          moveTo(11.5F, 8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()
          moveToRelative(-1.0F, 2.594F)
          verticalLineTo(10.5F)
          curveToRelative(0.0F, -0.563F, -0.186F, -1.082F, -0.5F, -1.5F)
          horizontalLineToRelative(3.273F)
          curveToRelative(0.676F, 0.0F, 1.225F, 0.549F, 1.225F, 1.225F)
          curveToRelative(0.0F, 0.0F, 0.0F, 2.275F, -3.0F, 2.275F)
          curveToRelative(-0.598F, 0.0F, -1.077F, -0.09F, -1.46F, -0.235F)
          curveToRelative(0.19F, -0.347F, 0.3F, -0.676F, 0.365F, -0.942F)
          curveToRelative(0.045F, -0.186F, 0.07F, -0.347F, 0.082F, -0.47F)
          curveToRelative(0.006F, -0.063F, 0.01F, -0.116F, 0.012F, -0.16F)
          lineToRelative(0.003F, -0.1F)
          close()
          moveToRelative(-1.0F, -0.094F)
          curveTo(9.5F, 9.672F, 8.828F, 9.0F, 8.0F, 9.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(0.075F)
          reflectiveCurveToRelative(0.0F, 2.925F, 4.0F, 2.925F)
          curveToRelative(3.812F, 0.0F, 3.991F, -2.656F, 4.0F, -2.906F)
          verticalLineTo(10.5F)
          close()        
      }
    }
    return _people16!!
  }

private var _people16: ImageVector? = null
