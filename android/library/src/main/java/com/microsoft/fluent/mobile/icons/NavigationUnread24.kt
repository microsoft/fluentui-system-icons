package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.NavigationUnread24: ImageVector
  get() {
    if (_navigationUnread24 != null) {
      return _navigationUnread24!!
    }
    _navigationUnread24 = fluentIcon(name = "Regular.NavigationUnread24", 24f) {
      materialPath {
          moveTo(19.25F, 8.5F)
          curveTo(20.769F, 8.5F, 22.0F, 7.269F, 22.0F, 5.75F)
          reflectiveCurveTo(20.769F, 3.0F, 19.25F, 3.0F)
          reflectiveCurveTo(16.5F, 4.231F, 16.5F, 5.75F)
          reflectiveCurveToRelative(1.231F, 2.75F, 2.75F, 2.75F)
          close()
          moveToRelative(-3.674F, -1.997F)
          curveTo(15.526F, 6.26F, 15.5F, 6.008F, 15.5F, 5.75F)
          curveToRelative(0.0F, -0.256F, 0.026F, -0.505F, 0.074F, -0.747F)
          horizontalLineTo(2.752F)
          lineTo(2.65F, 5.01F)
          curveTo(2.284F, 5.06F, 2.002F, 5.374F, 2.002F, 5.753F)
          curveToRelative(0.0F, 0.415F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(12.824F)
          close()
          moveTo(21.253F, 18.0F)
          horizontalLineToRelative(-18.5F)
          lineTo(2.65F, 18.007F)
          curveToRelative(-0.366F, 0.05F, -0.648F, 0.363F, -0.648F, 0.743F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(18.5F)
          lineToRelative(0.102F, -0.007F)
          curveToRelative(0.366F, -0.05F, 0.648F, -0.363F, 0.648F, -0.743F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveToRelative(-18.5F, -6.497F)
          horizontalLineToRelative(18.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineToRelative(-0.102F, 0.007F)
          horizontalLineToRelative(-18.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineToRelative(0.102F, -0.007F)
          close()        
      }
    }
    return _navigationUnread24!!
  }

private var _navigationUnread24: ImageVector? = null
