package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AddCircle24: ImageVector
  get() {
    if (_addCircle24 != null) {
      return _addCircle24!!
    }
    _addCircle24 = fluentIcon(name = "Filled.AddCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveToRelative(-0.38F, 0.0F, -0.694F, 0.282F, -0.743F, 0.648F)
          lineTo(11.25F, 7.75F)
          verticalLineToRelative(3.5F)
          horizontalLineToRelative(-3.5F)
          curveTo(7.336F, 11.25F, 7.0F, 11.586F, 7.0F, 12.0F)
          curveToRelative(0.0F, 0.38F, 0.282F, 0.694F, 0.648F, 0.743F)
          lineTo(7.75F, 12.75F)
          horizontalLineToRelative(3.5F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          curveToRelative(0.38F, 0.0F, 0.694F, -0.282F, 0.743F, -0.648F)
          lineToRelative(0.007F, -0.102F)
          verticalLineToRelative(-3.5F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, -0.282F, -0.694F, -0.648F, -0.743F)
          lineTo(16.25F, 11.25F)
          horizontalLineToRelative(-3.5F)
          verticalLineToRelative(-3.5F)
          curveTo(12.75F, 7.336F, 12.414F, 7.0F, 12.0F, 7.0F)
          close()        
      }
    }
    return _addCircle24!!
  }

private var _addCircle24: ImageVector? = null
