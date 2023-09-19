package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MoreVertical24: ImageVector
  get() {
    if (_moreVertical24 != null) {
      return _moreVertical24!!
    }
    _moreVertical24 = fluentIcon(name = "Regular.MoreVertical24", 24f) {
      materialPath {
          moveTo(12.0F, 7.75F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          reflectiveCurveTo(11.034F, 4.25F, 12.0F, 4.25F)
          reflectiveCurveTo(13.75F, 5.034F, 13.75F, 6.0F)
          reflectiveCurveTo(12.966F, 7.75F, 12.0F, 7.75F)
          close()
          moveToRelative(0.0F, 6.0F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          reflectiveCurveToRelative(0.784F, -1.75F, 1.75F, -1.75F)
          reflectiveCurveToRelative(1.75F, 0.784F, 1.75F, 1.75F)
          reflectiveCurveToRelative(-0.784F, 1.75F, -1.75F, 1.75F)
          close()
          moveTo(10.25F, 18.0F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          reflectiveCurveToRelative(1.75F, -0.784F, 1.75F, -1.75F)
          reflectiveCurveToRelative(-0.784F, -1.75F, -1.75F, -1.75F)
          reflectiveCurveToRelative(-1.75F, 0.784F, -1.75F, 1.75F)
          close()        
      }
    }
    return _moreVertical24!!
  }

private var _moreVertical24: ImageVector? = null
