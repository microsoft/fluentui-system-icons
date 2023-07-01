package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AppTitle24: ImageVector
  get() {
    if (_appTitle24 != null) {
      return _appTitle24!!
    }
    _appTitle24 = fluentIcon(name = "Filled.AppTitle24", 24f) {
      materialPath {
          moveTo(4.75F, 20.5F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(19.25F, 22.0F)
          horizontalLineTo(4.75F)
          curveTo(4.336F, 22.0F, 4.0F, 21.664F, 4.0F, 21.25F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(4.75F, 20.5F)
          horizontalLineToRelative(14.5F)
          close()
          moveTo(16.25F, 3.0F)
          curveTo(18.321F, 3.0F, 20.0F, 4.679F, 20.0F, 6.75F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineToRelative(-8.5F)
          curveTo(5.679F, 19.0F, 4.0F, 17.321F, 4.0F, 15.25F)
          verticalLineToRelative(-8.5F)
          curveTo(4.0F, 4.679F, 5.679F, 3.0F, 7.75F, 3.0F)
          horizontalLineToRelative(8.5F)
          close()        
      }
    }
    return _appTitle24!!
  }

private var _appTitle24: ImageVector? = null
