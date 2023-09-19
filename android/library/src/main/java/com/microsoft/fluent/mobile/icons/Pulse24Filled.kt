package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pulse24: ImageVector
  get() {
    if (_pulse24 != null) {
      return _pulse24!!
    }
    _pulse24 = fluentIcon(name = "Filled.Pulse24", 24f) {
      materialPath {
          moveTo(8.471F, 7.237F)
          lineToRelative(3.056F, 12.992F)
          curveToRelative(0.233F, 0.993F, 1.63F, 1.04F, 1.929F, 0.065F)
          lineToRelative(2.945F, -9.58F)
          lineToRelative(0.384F, 1.527F)
          curveToRelative(0.113F, 0.444F, 0.512F, 0.756F, 0.97F, 0.756F)
          horizontalLineTo(21.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          curveToRelative(0.0F, -0.553F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-2.466F)
          lineToRelative(-1.069F, -4.241F)
          curveToRelative(-0.247F, -0.982F, -1.628F, -1.017F, -1.925F, -0.05F)
          lineToRelative(-2.912F, 9.472F)
          lineTo(9.475F, 2.771F)
          curveToRelative(-0.24F, -1.02F, -1.688F, -1.03F, -1.943F, -0.014F)
          lineToRelative(-2.065F, 8.24F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.447F, -1.0F, 1.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(3.247F)
          curveToRelative(0.459F, 0.0F, 0.859F, -0.312F, 0.97F, -0.757F)
          lineToRelative(1.254F, -5.003F)
          close()        
      }
    }
    return _pulse24!!
  }

private var _pulse24: ImageVector? = null
