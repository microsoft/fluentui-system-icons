package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Blur20: ImageVector
  get() {
    if (_blur20 != null) {
      return _blur20!!
    }
    _blur20 = fluentIcon(name = "Regular.Blur20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          curveToRelative(2.029F, 0.0F, 3.881F, -0.755F, 5.292F, -2.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, -3.134F, -7.0F, -7.0F)
          reflectiveCurveToRelative(3.134F, -7.0F, 7.0F, -7.0F)
          horizontalLineToRelative(3.876F)
          curveTo(12.728F, 2.363F, 11.406F, 2.0F, 10.0F, 2.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          horizontalLineToRelative(5.292F)
          curveToRelative(0.345F, 0.305F, 0.665F, 0.64F, 0.953F, 1.0F)
          horizontalLineTo(10.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(6.93F, 2.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(7.419F)
          curveToRelative(-0.14F, -0.346F, -0.304F, -0.68F, -0.49F, -1.0F)
          close()
          moveTo(10.0F, 8.0F)
          horizontalLineToRelative(7.748F)
          curveToRelative(0.084F, 0.326F, 0.148F, 0.66F, 0.19F, 1.0F)
          horizontalLineTo(10.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(8.0F, 2.0F)
          horizontalLineToRelative(-8.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(7.938F)
          curveTo(17.98F, 10.672F, 18.0F, 10.339F, 18.0F, 10.0F)
          close()
          moveToRelative(-8.0F, 2.0F)
          horizontalLineToRelative(7.748F)
          curveToRelative(-0.088F, 0.343F, -0.199F, 0.677F, -0.33F, 1.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(-1.0F)
          close()
          moveToRelative(6.93F, 2.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(6.245F)
          curveToRelative(0.253F, -0.315F, 0.482F, -0.649F, 0.685F, -1.0F)
          close()        
      }
    }
    return _blur20!!
  }

private var _blur20: ImageVector? = null
