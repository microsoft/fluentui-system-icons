package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MoreCircle24: ImageVector
  get() {
    if (_moreCircle24 != null) {
      return _moreCircle24!!
    }
    _moreCircle24 = fluentIcon(name = "Regular.MoreCircle24", 24f) {
      materialPath {
          moveTo(20.5F, 12.0F)
          curveToRelative(0.0F, -4.694F, -3.806F, -8.5F, -8.5F, -8.5F)
          reflectiveCurveTo(3.5F, 7.306F, 3.5F, 12.0F)
          reflectiveCurveToRelative(3.806F, 8.5F, 8.5F, 8.5F)
          reflectiveCurveToRelative(8.5F, -3.806F, 8.5F, -8.5F)
          close()
          moveToRelative(1.5F, 0.0F)
          curveToRelative(0.0F, 5.523F, -4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          close()
          moveTo(7.0F, 13.25F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(7.69F, 10.75F, 7.0F, 10.75F)
          reflectiveCurveTo(5.75F, 11.31F, 5.75F, 12.0F)
          reflectiveCurveTo(6.31F, 13.25F, 7.0F, 13.25F)
          close()
          moveToRelative(5.0F, 0.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveToRelative(-1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          close()
          moveToRelative(5.0F, 0.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveToRelative(-1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          close()        
      }
    }
    return _moreCircle24!!
  }

private var _moreCircle24: ImageVector? = null
