package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Heart28: ImageVector
  get() {
    if (_heart28 != null) {
      return _heart28!!
    }
    _heart28 = fluentIcon(name = "Regular.Heart28", 28f) {
      materialPath {
          moveTo(14.604F, 6.193F)
          curveToRelative(2.601F, -2.932F, 7.184F, -2.922F, 9.772F, 0.02F)
          curveToRelative(2.263F, 2.574F, 2.148F, 6.459F, -0.263F, 8.893F)
          lineToRelative(-9.58F, 9.672F)
          curveTo(14.392F, 24.92F, 14.2F, 25.0F, 14.0F, 25.0F)
          reflectiveCurveToRelative(-0.392F, -0.08F, -0.533F, -0.222F)
          lineToRelative(-9.58F, -9.672F)
          curveToRelative(-2.41F, -2.434F, -2.526F, -6.32F, -0.263F, -8.892F)
          curveToRelative(2.588F, -2.943F, 7.17F, -2.953F, 9.772F, -0.021F)
          lineTo(14.0F, 6.873F)
          lineToRelative(0.604F, -0.68F)
          close()
          moveToRelative(8.646F, 1.011F)
          curveToRelative(-1.993F, -2.266F, -5.521F, -2.274F, -7.524F, -0.016F)
          lineTo(14.56F, 8.501F)
          curveTo(14.419F, 8.66F, 14.214F, 8.753F, 14.0F, 8.753F)
          curveToRelative(-0.215F, 0.0F, -0.419F, -0.092F, -0.561F, -0.252F)
          lineToRelative(-1.165F, -1.313F)
          curveToRelative(-2.003F, -2.257F, -5.53F, -2.25F, -7.524F, 0.016F)
          curveToRelative(-1.742F, 1.981F, -1.653F, 4.973F, 0.203F, 6.847F)
          lineTo(14.0F, 23.184F)
          lineToRelative(9.047F, -9.133F)
          curveToRelative(1.856F, -1.874F, 1.945F, -4.866F, 0.203F, -6.847F)
          close()        
      }
    }
    return _heart28!!
  }

private var _heart28: ImageVector? = null
