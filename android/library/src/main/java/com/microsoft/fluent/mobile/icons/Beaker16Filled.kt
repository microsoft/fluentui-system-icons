package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Beaker16: ImageVector
  get() {
    if (_beaker16 != null) {
      return _beaker16!!
    }
    _beaker16 = fluentIcon(name = "Filled.Beaker16", 16f) {
      materialPath {
          moveTo(6.0F, 3.0F)
          verticalLineToRelative(3.689F)
          curveToRelative(0.0F, 0.443F, -0.117F, 0.877F, -0.34F, 1.26F)
          lineTo(5.045F, 9.0F)
          horizontalLineToRelative(5.908F)
          lineTo(10.34F, 7.949F)
          curveTo(10.117F, 7.566F, 10.0F, 7.132F, 10.0F, 6.689F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(0.5F)
          curveTo(10.776F, 3.0F, 11.0F, 2.776F, 11.0F, 2.5F)
          reflectiveCurveTo(10.776F, 2.0F, 10.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(5.224F, 2.0F, 5.0F, 2.224F, 5.0F, 2.5F)
          reflectiveCurveTo(5.224F, 3.0F, 5.5F, 3.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(5.537F, 7.0F)
          horizontalLineTo(4.463F)
          lineToRelative(-1.018F, 1.744F)
          curveTo(2.862F, 12.744F, 3.583F, 14.0F, 4.741F, 14.0F)
          horizontalLineToRelative(6.518F)
          curveToRelative(1.158F, 0.0F, 1.879F, -1.256F, 1.296F, -2.256F)
          lineTo(11.537F, 10.0F)
          close()        
      }
    }
    return _beaker16!!
  }

private var _beaker16: ImageVector? = null
