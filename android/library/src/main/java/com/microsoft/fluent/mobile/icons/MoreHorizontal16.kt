package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MoreHorizontal16: ImageVector
  get() {
    if (_moreHorizontal16 != null) {
      return _moreHorizontal16!!
    }
    _moreHorizontal16 = fluentIcon(name = "Filled.MoreHorizontal16", 16f) {
      materialPath {
          moveTo(5.25F, 8.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(2.75F, 8.69F, 2.75F, 8.0F)
          reflectiveCurveTo(3.31F, 6.75F, 4.0F, 6.75F)
          reflectiveCurveTo(5.25F, 7.31F, 5.25F, 8.0F)
          close()
          moveToRelative(4.0F, 0.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(6.75F, 8.69F, 6.75F, 8.0F)
          reflectiveCurveTo(7.31F, 6.75F, 8.0F, 6.75F)
          reflectiveCurveTo(9.25F, 7.31F, 9.25F, 8.0F)
          close()
          moveTo(12.0F, 9.25F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(12.69F, 6.75F, 12.0F, 6.75F)
          reflectiveCurveTo(10.75F, 7.31F, 10.75F, 8.0F)
          reflectiveCurveTo(11.31F, 9.25F, 12.0F, 9.25F)
          close()        
      }
    }
    return _moreHorizontal16!!
  }

private var _moreHorizontal16: ImageVector? = null
