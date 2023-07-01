package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Beaker24: ImageVector
  get() {
    if (_beaker24 != null) {
      return _beaker24!!
    }
    _beaker24 = fluentIcon(name = "Filled.Beaker24", 24f) {
      materialPath {
          moveTo(9.0F, 4.5F)
          verticalLineToRelative(6.238F)
          curveToRelative(0.0F, 0.375F, -0.094F, 0.744F, -0.273F, 1.074F)
          lineTo(7.54F, 14.0F)
          horizontalLineToRelative(8.921F)
          lineToRelative(-1.187F, -2.188F)
          curveTo(15.093F, 11.482F, 15.0F, 11.113F, 15.0F, 10.738F)
          verticalLineTo(4.5F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(16.414F, 3.0F, 16.0F, 3.0F)
          horizontalLineTo(8.0F)
          curveTo(7.586F, 3.0F, 7.25F, 3.336F, 7.25F, 3.75F)
          reflectiveCurveTo(7.586F, 4.5F, 8.0F, 4.5F)
          horizontalLineToRelative(1.0F)
          close()
          moveToRelative(8.275F, 11.0F)
          horizontalLineTo(6.725F)
          lineToRelative(-1.582F, 2.915F)
          curveTo(4.51F, 19.581F, 5.353F, 21.0F, 6.68F, 21.0F)
          horizontalLineToRelative(10.638F)
          curveToRelative(1.327F, 0.0F, 2.171F, -1.419F, 1.538F, -2.585F)
          lineTo(17.275F, 15.5F)
          close()        
      }
    }
    return _beaker24!!
  }

private var _beaker24: ImageVector? = null
