package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DismissCircle48: ImageVector
  get() {
    if (_dismissCircle48 != null) {
      return _dismissCircle48!!
    }
    _dismissCircle48 = fluentIcon(name = "Filled.DismissCircle48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveToRelative(11.046F, 0.0F, 20.0F, 8.954F, 20.0F, 20.0F)
          reflectiveCurveToRelative(-8.954F, 20.0F, -20.0F, 20.0F)
          reflectiveCurveTo(4.0F, 35.046F, 4.0F, 24.0F)
          reflectiveCurveTo(12.954F, 4.0F, 24.0F, 4.0F)
          close()
          moveToRelative(-6.116F, 12.116F)
          lineToRelative(-0.102F, -0.091F)
          curveToRelative(-0.455F, -0.367F, -1.109F, -0.367F, -1.564F, 0.0F)
          lineToRelative(-0.102F, 0.091F)
          lineToRelative(-0.091F, 0.102F)
          curveToRelative(-0.367F, 0.455F, -0.367F, 1.109F, 0.0F, 1.564F)
          lineToRelative(0.091F, 0.102F)
          lineTo(22.233F, 24.0F)
          lineToRelative(-6.117F, 6.116F)
          lineToRelative(-0.091F, 0.102F)
          curveToRelative(-0.367F, 0.455F, -0.367F, 1.109F, 0.0F, 1.564F)
          lineToRelative(0.091F, 0.102F)
          lineToRelative(0.102F, 0.091F)
          curveToRelative(0.455F, 0.367F, 1.109F, 0.367F, 1.564F, 0.0F)
          lineToRelative(0.102F, -0.091F)
          lineTo(24.0F, 25.767F)
          lineToRelative(6.116F, 6.117F)
          lineToRelative(0.102F, 0.091F)
          curveToRelative(0.455F, 0.367F, 1.109F, 0.367F, 1.564F, 0.0F)
          lineToRelative(0.102F, -0.091F)
          lineToRelative(0.091F, -0.102F)
          curveToRelative(0.367F, -0.455F, 0.367F, -1.109F, 0.0F, -1.564F)
          lineToRelative(-0.091F, -0.102F)
          lineTo(25.767F, 24.0F)
          lineToRelative(6.117F, -6.116F)
          lineToRelative(0.091F, -0.102F)
          curveToRelative(0.367F, -0.455F, 0.367F, -1.109F, 0.0F, -1.564F)
          lineToRelative(-0.091F, -0.102F)
          lineToRelative(-0.102F, -0.091F)
          curveToRelative(-0.455F, -0.367F, -1.109F, -0.367F, -1.564F, 0.0F)
          lineToRelative(-0.102F, 0.091F)
          lineTo(24.0F, 22.233F)
          lineToRelative(-6.116F, -6.117F)
          lineToRelative(-0.102F, -0.091F)
          lineToRelative(0.102F, 0.091F)
          close()        
      }
    }
    return _dismissCircle48!!
  }

private var _dismissCircle48: ImageVector? = null
