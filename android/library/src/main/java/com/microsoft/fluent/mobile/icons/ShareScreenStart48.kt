package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShareScreenStart48: ImageVector
  get() {
    if (_shareScreenStart48 != null) {
      return _shareScreenStart48!!
    }
    _shareScreenStart48 = fluentIcon(name = "Filled.ShareScreenStart48", 48f) {
      materialPath {
          moveTo(8.25F, 8.0F)
          curveTo(5.903F, 8.0F, 4.0F, 9.903F, 4.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveTo(4.0F, 38.097F, 5.903F, 40.0F, 8.25F, 40.0F)
          horizontalLineToRelative(31.5F)
          curveToRelative(2.347F, 0.0F, 4.25F, -1.903F, 4.25F, -4.25F)
          verticalLineToRelative(-23.5F)
          curveTo(44.0F, 9.903F, 42.097F, 8.0F, 39.75F, 8.0F)
          horizontalLineTo(8.25F)
          close()
          moveTo(24.0F, 14.75F)
          curveToRelative(0.331F, 0.0F, 0.65F, 0.132F, 0.884F, 0.366F)
          lineToRelative(6.0F, 6.0F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(-1.28F, 0.488F, -1.768F, 0.0F)
          lineToRelative(-3.866F, -3.866F)
          verticalLineTo(31.75F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveToRelative(-1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(19.018F)
          lineToRelative(-3.866F, 3.866F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(6.0F, -6.0F)
          curveTo(23.351F, 14.882F, 23.67F, 14.75F, 24.0F, 14.75F)
          close()        
      }
    }
    return _shareScreenStart48!!
  }

private var _shareScreenStart48: ImageVector? = null
