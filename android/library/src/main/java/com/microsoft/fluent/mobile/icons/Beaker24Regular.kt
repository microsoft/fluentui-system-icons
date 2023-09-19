package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Beaker24: ImageVector
  get() {
    if (_beaker24 != null) {
      return _beaker24!!
    }
    _beaker24 = fluentIcon(name = "Regular.Beaker24", 24f) {
      materialPath {
          moveTo(8.0F, 4.5F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(6.238F)
          curveToRelative(0.0F, 0.375F, -0.094F, 0.744F, -0.273F, 1.074F)
          lineToRelative(-3.584F, 6.603F)
          curveTo(4.51F, 19.581F, 5.353F, 21.0F, 6.68F, 21.0F)
          horizontalLineToRelative(10.638F)
          curveToRelative(1.327F, 0.0F, 2.171F, -1.419F, 1.538F, -2.585F)
          lineToRelative(-3.584F, -6.603F)
          curveTo(15.093F, 11.482F, 15.0F, 11.113F, 15.0F, 10.738F)
          verticalLineTo(4.5F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(16.414F, 3.0F, 16.0F, 3.0F)
          horizontalLineTo(8.0F)
          curveTo(7.586F, 3.0F, 7.25F, 3.336F, 7.25F, 3.75F)
          reflectiveCurveTo(7.586F, 4.5F, 8.0F, 4.5F)
          close()
          moveToRelative(2.5F, 6.238F)
          verticalLineTo(4.5F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(6.238F)
          curveToRelative(0.0F, 0.625F, 0.156F, 1.24F, 0.454F, 1.79F)
          lineToRelative(0.8F, 1.472F)
          horizontalLineTo(9.246F)
          lineToRelative(0.8F, -1.473F)
          curveToRelative(0.298F, -0.549F, 0.454F, -1.164F, 0.454F, -1.789F)
          close()
          moveTo(8.432F, 15.5F)
          horizontalLineToRelative(7.136F)
          lineToRelative(1.971F, 3.63F)
          curveToRelative(0.09F, 0.167F, -0.03F, 0.37F, -0.22F, 0.37F)
          horizontalLineTo(6.681F)
          curveToRelative(-0.19F, 0.0F, -0.31F, -0.203F, -0.22F, -0.37F)
          lineToRelative(1.97F, -3.63F)
          close()        
      }
    }
    return _beaker24!!
  }

private var _beaker24: ImageVector? = null
