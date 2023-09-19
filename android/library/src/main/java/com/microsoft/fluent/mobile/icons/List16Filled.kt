package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.List16: ImageVector
  get() {
    if (_list16 != null) {
      return _list16!!
    }
    _list16 = fluentIcon(name = "Filled.List16", 16f) {
      materialPath {
          moveTo(2.0F, 3.75F)
          curveTo(2.0F, 3.336F, 2.336F, 3.0F, 2.75F, 3.0F)
          horizontalLineToRelative(7.5F)
          curveTo(10.664F, 3.0F, 11.0F, 3.336F, 11.0F, 3.75F)
          reflectiveCurveTo(10.664F, 4.5F, 10.25F, 4.5F)
          horizontalLineToRelative(-7.5F)
          curveTo(2.336F, 4.5F, 2.0F, 4.164F, 2.0F, 3.75F)
          close()
          moveToRelative(0.0F, 8.0F)
          curveTo(2.0F, 11.336F, 2.336F, 11.0F, 2.75F, 11.0F)
          horizontalLineToRelative(6.5F)
          curveTo(9.664F, 11.0F, 10.0F, 11.336F, 10.0F, 11.75F)
          reflectiveCurveTo(9.664F, 12.5F, 9.25F, 12.5F)
          horizontalLineToRelative(-6.5F)
          curveTo(2.336F, 12.5F, 2.0F, 12.164F, 2.0F, 11.75F)
          close()
          moveTo(2.75F, 7.0F)
          curveTo(2.336F, 7.0F, 2.0F, 7.336F, 2.0F, 7.75F)
          reflectiveCurveTo(2.336F, 8.5F, 2.75F, 8.5F)
          horizontalLineToRelative(10.5F)
          curveTo(13.664F, 8.5F, 14.0F, 8.164F, 14.0F, 7.75F)
          reflectiveCurveTo(13.664F, 7.0F, 13.25F, 7.0F)
          horizontalLineTo(2.75F)
          close()        
      }
    }
    return _list16!!
  }

private var _list16: ImageVector? = null
