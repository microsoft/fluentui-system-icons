package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MoreHorizontal20: ImageVector
  get() {
    if (_moreHorizontal20 != null) {
      return _moreHorizontal20!!
    }
    _moreHorizontal20 = fluentIcon(name = "Regular.MoreHorizontal20", 20f) {
      materialPath {
          moveTo(6.25F, 10.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(3.75F, 10.69F, 3.75F, 10.0F)
          reflectiveCurveTo(4.31F, 8.75F, 5.0F, 8.75F)
          reflectiveCurveTo(6.25F, 9.31F, 6.25F, 10.0F)
          close()
          moveToRelative(5.0F, 0.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(8.75F, 10.69F, 8.75F, 10.0F)
          reflectiveCurveTo(9.31F, 8.75F, 10.0F, 8.75F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          close()
          moveTo(15.0F, 11.25F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(15.69F, 8.75F, 15.0F, 8.75F)
          reflectiveCurveTo(13.75F, 9.31F, 13.75F, 10.0F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          close()        
      }
    }
    return _moreHorizontal20!!
  }

private var _moreHorizontal20: ImageVector? = null
