package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.City16: ImageVector
  get() {
    if (_city16 != null) {
      return _city16!!
    }
    _city16 = fluentIcon(name = "Filled.City16", 16f) {
      materialPath {
          moveTo(8.501F, 1.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineTo(2.0F)
          horizontalLineTo(6.5F)
          curveTo(5.672F, 2.0F, 5.0F, 2.672F, 5.0F, 3.5F)
          verticalLineToRelative(0.504F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.896F, 2.0F, 2.0F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(7.504F)
          curveToRelative(0.0F, -1.21F, 0.859F, -2.218F, 2.0F, -2.45F)
          verticalLineTo(3.5F)
          curveTo(11.0F, 2.672F, 10.328F, 2.0F, 9.5F, 2.0F)
          horizontalLineTo(8.501F)
          verticalLineTo(1.5F)
          close()
          moveTo(12.5F, 14.0F)
          horizontalLineTo(10.0F)
          verticalLineTo(7.504F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(6.0F)
          curveTo(13.33F, 6.0F, 14.0F, 6.672F, 14.0F, 7.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          close()
          moveTo(4.843F, 5.135F)
          curveToRelative(0.5F, -0.324F, 1.158F, 0.034F, 1.158F, 0.63F)
          lineTo(6.0F, 13.5F)
          curveTo(6.0F, 13.776F, 5.776F, 14.0F, 5.5F, 14.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(2.672F, 14.0F, 2.0F, 13.328F, 2.0F, 12.5F)
          verticalLineTo(7.793F)
          curveToRelative(0.0F, -0.508F, 0.257F, -0.982F, 0.684F, -1.258F)
          lineToRelative(2.16F, -1.4F)
          close()        
      }
    }
    return _city16!!
  }

private var _city16: ImageVector? = null
