package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MoreVertical16: ImageVector
  get() {
    if (_moreVertical16 != null) {
      return _moreVertical16!!
    }
    _moreVertical16 = fluentIcon(name = "Filled.MoreVertical16", 16f) {
      materialPath {
          moveTo(8.0F, 5.25F)
          curveTo(7.31F, 5.25F, 6.75F, 4.69F, 6.75F, 4.0F)
          reflectiveCurveTo(7.31F, 2.75F, 8.0F, 2.75F)
          reflectiveCurveTo(9.25F, 3.31F, 9.25F, 4.0F)
          reflectiveCurveTo(8.69F, 5.25F, 8.0F, 5.25F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(7.31F, 9.25F, 6.75F, 8.69F, 6.75F, 8.0F)
          reflectiveCurveTo(7.31F, 6.75F, 8.0F, 6.75F)
          reflectiveCurveTo(9.25F, 7.31F, 9.25F, 8.0F)
          reflectiveCurveTo(8.69F, 9.25F, 8.0F, 9.25F)
          close()
          moveTo(6.75F, 12.0F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveTo(9.25F, 12.69F, 9.25F, 12.0F)
          reflectiveCurveTo(8.69F, 10.75F, 8.0F, 10.75F)
          reflectiveCurveTo(6.75F, 11.31F, 6.75F, 12.0F)
          close()        
      }
    }
    return _moreVertical16!!
  }

private var _moreVertical16: ImageVector? = null
