package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Chat48: ImageVector
  get() {
    if (_chat48 != null) {
      return _chat48!!
    }
    _chat48 = fluentIcon(name = "Filled.Chat48", 48f) {
      materialPath {
          moveTo(4.0F, 24.0F)
          curveTo(4.0F, 12.954F, 12.954F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveToRelative(20.0F, 8.954F, 20.0F, 20.0F)
          reflectiveCurveToRelative(-8.954F, 20.0F, -20.0F, 20.0F)
          curveToRelative(-3.45F, 0.0F, -6.698F, -0.874F, -9.534F, -2.414F)
          lineToRelative(-8.235F, 2.342F)
          curveToRelative(-1.319F, 0.375F, -2.537F, -0.844F, -2.162F, -2.162F)
          lineToRelative(2.343F, -8.238F)
          curveTo(4.873F, 30.695F, 4.0F, 27.448F, 4.0F, 24.0F)
          close()
          moveToRelative(12.0F, -3.75F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(31.44F, 19.0F, 30.75F, 19.0F)
          horizontalLineToRelative(-13.5F)
          curveTo(16.56F, 19.0F, 16.0F, 19.56F, 16.0F, 20.25F)
          close()
          moveToRelative(1.25F, 6.25F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(16.56F, 29.0F, 17.25F, 29.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineToRelative(-9.5F)
          close()        
      }
    }
    return _chat48!!
  }

private var _chat48: ImageVector? = null
