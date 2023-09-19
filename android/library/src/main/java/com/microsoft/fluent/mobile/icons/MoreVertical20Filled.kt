package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MoreVertical20: ImageVector
  get() {
    if (_moreVertical20 != null) {
      return _moreVertical20!!
    }
    _moreVertical20 = fluentIcon(name = "Filled.MoreVertical20", 20f) {
      materialPath {
          moveTo(10.0F, 6.5F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          reflectiveCurveTo(9.034F, 3.0F, 10.0F, 3.0F)
          reflectiveCurveToRelative(1.75F, 0.784F, 1.75F, 1.75F)
          reflectiveCurveTo(10.966F, 6.5F, 10.0F, 6.5F)
          close()
          moveTo(10.0F, 17.0F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          reflectiveCurveTo(9.034F, 13.5F, 10.0F, 13.5F)
          reflectiveCurveToRelative(1.75F, 0.784F, 1.75F, 1.75F)
          reflectiveCurveTo(10.966F, 17.0F, 10.0F, 17.0F)
          close()
          moveToRelative(-1.75F, -7.0F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          reflectiveCurveToRelative(1.75F, -0.784F, 1.75F, -1.75F)
          reflectiveCurveTo(10.966F, 8.25F, 10.0F, 8.25F)
          reflectiveCurveTo(8.25F, 9.034F, 8.25F, 10.0F)
          close()        
      }
    }
    return _moreVertical20!!
  }

private var _moreVertical20: ImageVector? = null
