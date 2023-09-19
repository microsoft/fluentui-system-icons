package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Chat48: ImageVector
  get() {
    if (_chat48 != null) {
      return _chat48!!
    }
    _chat48 = fluentIcon(name = "Regular.Chat48", 48f) {
      materialPath {
          moveTo(24.0F, 6.5F)
          curveTo(14.335F, 6.5F, 6.5F, 14.335F, 6.5F, 24.0F)
          curveToRelative(0.0F, 3.188F, 0.851F, 6.173F, 2.338F, 8.745F)
          curveToRelative(0.17F, 0.293F, 0.213F, 0.642F, 0.12F, 0.968F)
          lineToRelative(-2.116F, 7.442F)
          lineToRelative(7.44F, -2.116F)
          curveToRelative(0.326F, -0.093F, 0.675F, -0.05F, 0.968F, 0.12F)
          curveTo(17.823F, 40.648F, 20.81F, 41.5F, 24.0F, 41.5F)
          curveToRelative(9.665F, 0.0F, 17.5F, -7.835F, 17.5F, -17.5F)
          reflectiveCurveTo(33.665F, 6.5F, 24.0F, 6.5F)
          close()
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
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-13.5F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
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
