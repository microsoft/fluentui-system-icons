package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MoreHorizontal20: ImageVector
  get() {
    if (_moreHorizontal20 != null) {
      return _moreHorizontal20!!
    }
    _moreHorizontal20 = fluentIcon(name = "Filled.MoreHorizontal20", 20f) {
      materialPath {
          moveTo(6.75F, 10.0F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          reflectiveCurveTo(3.25F, 10.966F, 3.25F, 10.0F)
          reflectiveCurveTo(4.034F, 8.25F, 5.0F, 8.25F)
          reflectiveCurveTo(6.75F, 9.034F, 6.75F, 10.0F)
          close()
          moveToRelative(5.0F, 0.0F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          reflectiveCurveTo(8.25F, 10.966F, 8.25F, 10.0F)
          reflectiveCurveTo(9.034F, 8.25F, 10.0F, 8.25F)
          reflectiveCurveToRelative(1.75F, 0.784F, 1.75F, 1.75F)
          close()
          moveTo(15.0F, 11.75F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          reflectiveCurveTo(15.966F, 8.25F, 15.0F, 8.25F)
          reflectiveCurveTo(13.25F, 9.034F, 13.25F, 10.0F)
          reflectiveCurveToRelative(0.784F, 1.75F, 1.75F, 1.75F)
          close()        
      }
    }
    return _moreHorizontal20!!
  }

private var _moreHorizontal20: ImageVector? = null
