package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataBarHorizontal24: ImageVector
  get() {
    if (_dataBarHorizontal24 != null) {
      return _dataBarHorizontal24!!
    }
    _dataBarHorizontal24 = fluentIcon(name = "Filled.DataBarHorizontal24", 24f) {
      materialPath {
          moveTo(21.0F, 18.251F)
          curveToRelative(0.0F, -1.242F, -1.007F, -2.249F, -2.25F, -2.249F)
          horizontalLineTo(5.25F)
          curveToRelative(-1.243F, 0.0F, -2.25F, 1.007F, -2.25F, 2.249F)
          curveToRelative(0.0F, 1.242F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.008F, 2.25F, -2.25F)
          close()
          moveToRelative(-4.0F, -6.5F)
          curveToRelative(0.0F, -1.242F, -1.007F, -2.249F, -2.25F, -2.249F)
          horizontalLineToRelative(-9.5F)
          curveTo(4.006F, 9.502F, 3.0F, 10.509F, 3.0F, 11.751F)
          curveToRelative(0.0F, 1.242F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(9.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.008F, 2.25F, -2.25F)
          close()
          moveToRelative(-4.0F, -6.5F)
          curveToRelative(0.0F, -1.242F, -1.007F, -2.249F, -2.25F, -2.249F)
          horizontalLineToRelative(-5.5F)
          curveTo(4.006F, 3.002F, 3.0F, 4.009F, 3.0F, 5.251F)
          curveToRelative(0.0F, 1.242F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(5.5F)
          curveTo(11.994F, 7.5F, 13.0F, 6.492F, 13.0F, 5.25F)
          close()        
      }
    }
    return _dataBarHorizontal24!!
  }

private var _dataBarHorizontal24: ImageVector? = null
