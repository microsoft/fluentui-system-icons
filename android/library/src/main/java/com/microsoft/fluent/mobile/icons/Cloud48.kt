package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Cloud48: ImageVector
  get() {
    if (_cloud48 != null) {
      return _cloud48!!
    }
    _cloud48 = fluentIcon(name = "Regular.Cloud48", 48f) {
      materialPath {
          moveTo(13.045F, 20.0F)
          curveTo(13.55F, 14.393F, 18.262F, 10.0F, 24.0F, 10.0F)
          reflectiveCurveToRelative(10.45F, 4.393F, 10.955F, 10.0F)
          horizontalLineToRelative(0.295F)
          curveToRelative(4.28F, 0.0F, 7.75F, 3.47F, 7.75F, 7.75F)
          curveToRelative(0.0F, 4.28F, -3.47F, 7.75F, -7.75F, 7.75F)
          horizontalLineToRelative(-22.5F)
          curveTo(8.47F, 35.5F, 5.0F, 32.03F, 5.0F, 27.75F)
          curveTo(5.0F, 23.47F, 8.47F, 20.0F, 12.75F, 20.0F)
          horizontalLineToRelative(0.295F)
          close()
          moveTo(24.0F, 12.5F)
          curveToRelative(-4.694F, 0.0F, -8.5F, 3.806F, -8.5F, 8.5F)
          verticalLineToRelative(0.25F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-1.5F)
          curveToRelative(-2.9F, 0.0F, -5.25F, 2.35F, -5.25F, 5.25F)
          reflectiveCurveTo(9.85F, 33.0F, 12.75F, 33.0F)
          horizontalLineToRelative(22.5F)
          curveToRelative(2.9F, 0.0F, 5.25F, -2.35F, 5.25F, -5.25F)
          reflectiveCurveToRelative(-2.35F, -5.25F, -5.25F, -5.25F)
          horizontalLineToRelative(-1.5F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(21.0F)
          curveToRelative(0.0F, -4.694F, -3.806F, -8.5F, -8.5F, -8.5F)
          close()        
      }
    }
    return _cloud48!!
  }

private var _cloud48: ImageVector? = null
