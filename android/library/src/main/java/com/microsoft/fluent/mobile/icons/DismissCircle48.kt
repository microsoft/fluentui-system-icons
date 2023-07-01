package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DismissCircle48: ImageVector
  get() {
    if (_dismissCircle48 != null) {
      return _dismissCircle48!!
    }
    _dismissCircle48 = fluentIcon(name = "Regular.DismissCircle48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveToRelative(11.046F, 0.0F, 20.0F, 8.954F, 20.0F, 20.0F)
          reflectiveCurveToRelative(-8.954F, 20.0F, -20.0F, 20.0F)
          reflectiveCurveTo(4.0F, 35.046F, 4.0F, 24.0F)
          reflectiveCurveTo(12.954F, 4.0F, 24.0F, 4.0F)
          close()
          moveToRelative(0.0F, 2.5F)
          curveTo(14.335F, 6.5F, 6.5F, 14.335F, 6.5F, 24.0F)
          reflectiveCurveTo(14.335F, 41.5F, 24.0F, 41.5F)
          reflectiveCurveTo(41.5F, 33.665F, 41.5F, 24.0F)
          reflectiveCurveTo(33.665F, 6.5F, 24.0F, 6.5F)
          close()
          moveToRelative(-6.218F, 9.525F)
          lineToRelative(0.102F, 0.091F)
          lineTo(24.0F, 22.233F)
          lineToRelative(6.116F, -6.117F)
          curveToRelative(0.456F, -0.455F, 1.175F, -0.486F, 1.666F, -0.091F)
          lineToRelative(0.102F, 0.091F)
          curveToRelative(0.456F, 0.456F, 0.486F, 1.175F, 0.091F, 1.666F)
          lineToRelative(-0.091F, 0.102F)
          lineTo(25.767F, 24.0F)
          lineToRelative(6.117F, 6.116F)
          curveToRelative(0.456F, 0.456F, 0.486F, 1.175F, 0.091F, 1.666F)
          lineToRelative(-0.091F, 0.102F)
          curveToRelative(-0.456F, 0.456F, -1.175F, 0.486F, -1.666F, 0.091F)
          lineToRelative(-0.102F, -0.091F)
          lineTo(24.0F, 25.767F)
          lineToRelative(-6.116F, 6.117F)
          curveToRelative(-0.456F, 0.456F, -1.175F, 0.486F, -1.666F, 0.091F)
          lineToRelative(-0.102F, -0.091F)
          curveToRelative(-0.455F, -0.456F, -0.486F, -1.175F, -0.091F, -1.666F)
          lineToRelative(0.091F, -0.102F)
          lineTo(22.233F, 24.0F)
          lineToRelative(-6.117F, -6.116F)
          curveToRelative(-0.455F, -0.456F, -0.486F, -1.175F, -0.091F, -1.666F)
          lineToRelative(0.091F, -0.102F)
          curveToRelative(0.456F, -0.455F, 1.175F, -0.486F, 1.666F, -0.091F)
          close()        
      }
    }
    return _dismissCircle48!!
  }

private var _dismissCircle48: ImageVector? = null
