package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LockOpen20: ImageVector
  get() {
    if (_lockOpen20 != null) {
      return _lockOpen20!!
    }
    _lockOpen20 = fluentIcon(name = "Regular.LockOpen20", 20f) {
      materialPath {
          moveTo(9.997F, 2.0F)
          curveToRelative(1.44F, 0.0F, 2.666F, 1.01F, 2.944F, 2.402F)
          curveToRelative(0.054F, 0.27F, -0.122F, 0.534F, -0.392F, 0.588F)
          curveToRelative(-0.271F, 0.054F, -0.534F, -0.121F, -0.588F, -0.392F)
          curveTo(11.775F, 3.673F, 10.958F, 3.0F, 9.996F, 3.0F)
          curveTo(8.941F, 3.0F, 8.076F, 3.817F, 8.0F, 4.853F)
          lineToRelative(-0.006F, 0.15F)
          verticalLineTo(7.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(0.995F)
          verticalLineTo(5.002F)
          curveTo(6.995F, 3.344F, 8.339F, 2.0F, 9.997F, 2.0F)
          close()
          moveTo(14.0F, 8.0F)
          horizontalLineTo(6.0F)
          curveTo(5.448F, 8.0F, 5.0F, 8.448F, 5.0F, 9.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(-4.0F, 3.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _lockOpen20!!
  }

private var _lockOpen20: ImageVector? = null
