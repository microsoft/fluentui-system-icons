package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataFunnel24: ImageVector
  get() {
    if (_dataFunnel24 != null) {
      return _dataFunnel24!!
    }
    _dataFunnel24 = fluentIcon(name = "Filled.DataFunnel24", 24f) {
      materialPath {
          moveTo(19.248F, 7.504F)
          curveToRelative(1.52F, 0.0F, 2.752F, -1.232F, 2.752F, -2.752F)
          curveTo(22.0F, 3.232F, 20.768F, 2.0F, 19.248F, 2.0F)
          horizontalLineTo(4.75F)
          curveTo(3.23F, 2.0F, 1.998F, 3.232F, 1.998F, 4.752F)
          curveToRelative(0.0F, 1.52F, 1.232F, 2.752F, 2.752F, 2.752F)
          horizontalLineToRelative(14.498F)
          close()
          moveToRelative(-2.0F, 7.0F)
          curveToRelative(1.52F, 0.0F, 2.752F, -1.232F, 2.752F, -2.752F)
          curveTo(20.0F, 10.232F, 18.768F, 9.0F, 17.248F, 9.0F)
          horizontalLineTo(6.75F)
          curveToRelative(-1.52F, 0.0F, -2.752F, 1.232F, -2.752F, 2.752F)
          curveToRelative(0.0F, 1.52F, 1.232F, 2.752F, 2.752F, 2.752F)
          horizontalLineToRelative(10.498F)
          close()
          moveTo(17.0F, 18.752F)
          curveTo(17.0F, 17.232F, 15.768F, 16.0F, 14.248F, 16.0F)
          horizontalLineTo(9.75F)
          curveToRelative(-1.52F, 0.0F, -2.752F, 1.232F, -2.752F, 2.752F)
          curveToRelative(0.0F, 1.52F, 1.232F, 2.752F, 2.751F, 2.752F)
          horizontalLineToRelative(4.5F)
          curveToRelative(1.519F, 0.0F, 2.751F, -1.232F, 2.751F, -2.752F)
          close()        
      }
    }
    return _dataFunnel24!!
  }

private var _dataFunnel24: ImageVector? = null
