package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShareScreenStop48: ImageVector
  get() {
    if (_shareScreenStop48 != null) {
      return _shareScreenStop48!!
    }
    _shareScreenStop48 = fluentIcon(name = "Filled.ShareScreenStop48", 48f) {
      materialPath {
          moveTo(8.75F, 8.0F)
          curveTo(6.127F, 8.0F, 4.0F, 10.127F, 4.0F, 12.75F)
          verticalLineToRelative(22.5F)
          curveTo(4.0F, 37.873F, 6.127F, 40.0F, 8.75F, 40.0F)
          horizontalLineToRelative(30.5F)
          curveToRelative(2.623F, 0.0F, 4.75F, -2.127F, 4.75F, -4.75F)
          verticalLineToRelative(-22.5F)
          curveTo(44.0F, 10.127F, 41.873F, 8.0F, 39.25F, 8.0F)
          horizontalLineTo(8.75F)
          close()
          moveToRelative(13.482F, 16.0F)
          lineToRelative(-5.866F, -5.866F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.768F)
          reflectiveCurveToRelative(1.28F, -0.488F, 1.768F, 0.0F)
          lineTo(24.0F, 22.232F)
          lineToRelative(5.866F, -5.866F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, 1.28F, 0.0F, 1.768F)
          lineTo(25.768F, 24.0F)
          lineToRelative(5.866F, 5.866F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(-1.28F, 0.488F, -1.768F, 0.0F)
          lineTo(24.0F, 25.768F)
          lineToRelative(-5.866F, 5.866F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, -1.28F, 0.0F, -1.768F)
          lineTo(22.232F, 24.0F)
          close()        
      }
    }
    return _shareScreenStop48!!
  }

private var _shareScreenStop48: ImageVector? = null
