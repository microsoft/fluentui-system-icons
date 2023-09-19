package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MoreVertical20: ImageVector
  get() {
    if (_moreVertical20 != null) {
      return _moreVertical20!!
    }
    _moreVertical20 = fluentIcon(name = "Regular.MoreVertical20", 20f) {
      materialPath {
          moveTo(10.0F, 6.0F)
          curveTo(9.31F, 6.0F, 8.75F, 5.44F, 8.75F, 4.75F)
          reflectiveCurveTo(9.31F, 3.5F, 10.0F, 3.5F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(10.69F, 6.0F, 10.0F, 6.0F)
          close()
          moveToRelative(0.0F, 5.25F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          reflectiveCurveTo(9.31F, 8.75F, 10.0F, 8.75F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          close()
          moveToRelative(-1.25F, 4.0F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(10.69F, 14.0F, 10.0F, 14.0F)
          reflectiveCurveToRelative(-1.25F, 0.56F, -1.25F, 1.25F)
          close()        
      }
    }
    return _moreVertical20!!
  }

private var _moreVertical20: ImageVector? = null
