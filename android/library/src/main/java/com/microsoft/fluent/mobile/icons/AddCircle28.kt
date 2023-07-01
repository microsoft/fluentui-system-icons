package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AddCircle28: ImageVector
  get() {
    if (_addCircle28 != null) {
      return _addCircle28!!
    }
    _addCircle28 = fluentIcon(name = "Filled.AddCircle28", 28f) {
      materialPath {
          moveTo(14.0F, 2.0F)
          curveToRelative(6.627F, 0.0F, 12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(2.0F, 20.627F, 2.0F, 14.0F)
          reflectiveCurveTo(7.373F, 2.0F, 14.0F, 2.0F)
          close()
          moveToRelative(0.0F, 6.0F)
          curveToRelative(-0.38F, 0.0F, -0.694F, 0.282F, -0.743F, 0.648F)
          lineTo(13.25F, 8.75F)
          verticalLineToRelative(4.5F)
          horizontalLineToRelative(-4.5F)
          curveTo(8.336F, 13.25F, 8.0F, 13.586F, 8.0F, 14.0F)
          curveToRelative(0.0F, 0.38F, 0.282F, 0.694F, 0.648F, 0.743F)
          lineTo(8.75F, 14.75F)
          horizontalLineToRelative(4.5F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          curveToRelative(0.38F, 0.0F, 0.694F, -0.282F, 0.743F, -0.648F)
          lineToRelative(0.007F, -0.102F)
          verticalLineToRelative(-4.5F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, -0.282F, -0.694F, -0.648F, -0.743F)
          lineTo(19.25F, 13.25F)
          horizontalLineToRelative(-4.5F)
          verticalLineToRelative(-4.5F)
          curveTo(14.75F, 8.336F, 14.414F, 8.0F, 14.0F, 8.0F)
          close()        
      }
    }
    return _addCircle28!!
  }

private var _addCircle28: ImageVector? = null
