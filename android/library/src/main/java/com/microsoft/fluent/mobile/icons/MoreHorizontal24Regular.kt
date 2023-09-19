package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MoreHorizontal24: ImageVector
  get() {
    if (_moreHorizontal24 != null) {
      return _moreHorizontal24!!
    }
    _moreHorizontal24 = fluentIcon(name = "Regular.MoreHorizontal24", 24f) {
      materialPath {
          moveTo(7.75F, 12.0F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          reflectiveCurveTo(4.25F, 12.966F, 4.25F, 12.0F)
          reflectiveCurveTo(5.034F, 10.25F, 6.0F, 10.25F)
          reflectiveCurveTo(7.75F, 11.034F, 7.75F, 12.0F)
          close()
          moveToRelative(6.0F, 0.0F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          reflectiveCurveToRelative(-1.75F, -0.784F, -1.75F, -1.75F)
          reflectiveCurveToRelative(0.784F, -1.75F, 1.75F, -1.75F)
          reflectiveCurveToRelative(1.75F, 0.784F, 1.75F, 1.75F)
          close()
          moveTo(18.0F, 13.75F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          reflectiveCurveToRelative(-0.784F, -1.75F, -1.75F, -1.75F)
          reflectiveCurveToRelative(-1.75F, 0.784F, -1.75F, 1.75F)
          reflectiveCurveToRelative(0.784F, 1.75F, 1.75F, 1.75F)
          close()        
      }
    }
    return _moreHorizontal24!!
  }

private var _moreHorizontal24: ImageVector? = null
