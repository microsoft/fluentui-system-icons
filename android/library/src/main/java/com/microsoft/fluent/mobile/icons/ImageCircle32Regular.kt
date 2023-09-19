package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ImageCircle32: ImageVector
  get() {
    if (_imageCircle32 != null) {
      return _imageCircle32!!
    }
    _imageCircle32 = fluentIcon(name = "Regular.ImageCircle32", 32f) {
      materialPath {
          moveTo(16.0F, 4.0F)
          curveTo(9.373F, 4.0F, 4.0F, 9.373F, 4.0F, 16.0F)
          curveToRelative(0.0F, 2.924F, 1.046F, 5.604F, 2.784F, 7.686F)
          lineToRelative(7.446F, -7.453F)
          curveToRelative(0.977F, -0.977F, 2.56F, -0.977F, 3.537F, 0.0F)
          lineToRelative(7.448F, 7.454F)
          curveTo(26.954F, 21.605F, 28.0F, 18.925F, 28.0F, 16.0F)
          curveToRelative(0.0F, -6.627F, -5.373F, -12.0F, -12.0F, -12.0F)
          close()
          moveToRelative(7.81F, 21.11F)
          lineToRelative(-7.457F, -7.463F)
          curveToRelative(-0.196F, -0.196F, -0.513F, -0.196F, -0.708F, 0.0F)
          lineTo(8.19F, 25.11F)
          curveTo(10.288F, 26.91F, 13.017F, 28.0F, 16.0F, 28.0F)
          curveToRelative(2.983F, 0.0F, 5.711F, -1.088F, 7.81F, -2.89F)
          close()
          moveTo(2.0F, 16.0F)
          curveTo(2.0F, 8.268F, 8.268F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(14.0F, 6.268F, 14.0F, 14.0F)
          reflectiveCurveToRelative(-6.268F, 14.0F, -14.0F, 14.0F)
          reflectiveCurveTo(2.0F, 23.732F, 2.0F, 16.0F)
          close()
          moveToRelative(18.5F, -3.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          reflectiveCurveToRelative(0.672F, -1.5F, 1.5F, -1.5F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveToRelative(-0.672F, 1.5F, -1.5F, 1.5F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          reflectiveCurveTo(22.433F, 8.0F, 20.5F, 8.0F)
          reflectiveCurveTo(17.0F, 9.567F, 17.0F, 11.5F)
          reflectiveCurveToRelative(1.567F, 3.5F, 3.5F, 3.5F)
          close()        
      }
    }
    return _imageCircle32!!
  }

private var _imageCircle32: ImageVector? = null
