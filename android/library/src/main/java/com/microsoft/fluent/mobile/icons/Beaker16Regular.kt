package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Beaker16: ImageVector
  get() {
    if (_beaker16 != null) {
      return _beaker16!!
    }
    _beaker16 = fluentIcon(name = "Regular.Beaker16", 16f) {
      materialPath {
          moveTo(5.5F, 3.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.689F)
          curveToRelative(0.0F, 0.443F, -0.117F, 0.877F, -0.34F, 1.26F)
          lineToRelative(-2.215F, 3.795F)
          curveTo(2.862F, 12.744F, 3.583F, 14.0F, 4.741F, 14.0F)
          horizontalLineToRelative(6.518F)
          curveToRelative(1.158F, 0.0F, 1.879F, -1.256F, 1.296F, -2.256F)
          lineTo(10.34F, 7.95F)
          curveTo(10.117F, 7.566F, 10.0F, 7.132F, 10.0F, 6.689F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(0.5F)
          curveTo(10.776F, 3.0F, 11.0F, 2.776F, 11.0F, 2.5F)
          reflectiveCurveTo(10.776F, 2.0F, 10.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(5.224F, 2.0F, 5.0F, 2.224F, 5.0F, 2.5F)
          reflectiveCurveTo(5.224F, 3.0F, 5.5F, 3.0F)
          close()
          moveTo(7.0F, 6.689F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(3.689F)
          curveToRelative(0.0F, 0.62F, 0.165F, 1.228F, 0.477F, 1.764F)
          lineTo(9.797F, 9.0F)
          horizontalLineTo(6.203F)
          lineToRelative(0.32F, -0.547F)
          curveTo(6.834F, 7.917F, 7.0F, 7.309F, 7.0F, 6.689F)
          close()
          moveTo(5.62F, 10.0F)
          horizontalLineToRelative(4.76F)
          lineToRelative(1.31F, 2.248F)
          curveTo(11.886F, 12.581F, 11.646F, 13.0F, 11.26F, 13.0F)
          horizontalLineTo(4.74F)
          curveToRelative(-0.386F, 0.0F, -0.626F, -0.419F, -0.432F, -0.752F)
          lineTo(5.62F, 10.0F)
          close()        
      }
    }
    return _beaker16!!
  }

private var _beaker16: ImageVector? = null
