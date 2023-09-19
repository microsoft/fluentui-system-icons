package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageCircle32: ImageVector
  get() {
    if (_imageCircle32 != null) {
      return _imageCircle32!!
    }
    _imageCircle32 = fluentIcon(name = "Filled.ImageCircle32", 32f) {
      materialPath {
          moveTo(25.228F, 26.529F)
          curveTo(22.764F, 28.689F, 19.535F, 30.0F, 16.0F, 30.0F)
          reflectiveCurveToRelative(-6.764F, -1.31F, -9.228F, -3.471F)
          lineToRelative(8.874F, -8.882F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineToRelative(8.874F, 8.882F)
          close()
          moveToRelative(1.406F, -1.423F)
          lineToRelative(-8.865F, -8.873F)
          curveToRelative(-0.977F, -0.977F, -2.561F, -0.977F, -3.538F, 0.0F)
          lineToRelative(-8.865F, 8.873F)
          curveTo(3.268F, 22.658F, 2.0F, 19.477F, 2.0F, 16.0F)
          curveTo(2.0F, 8.268F, 8.268F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(14.0F, 6.268F, 14.0F, 14.0F)
          curveToRelative(0.0F, 3.477F, -1.268F, 6.658F, -3.366F, 9.106F)
          close()
          moveTo(24.0F, 11.25F)
          curveTo(24.0F, 9.455F, 22.545F, 8.0F, 20.75F, 8.0F)
          reflectiveCurveToRelative(-3.25F, 1.455F, -3.25F, 3.25F)
          reflectiveCurveToRelative(1.455F, 3.25F, 3.25F, 3.25F)
          reflectiveCurveTo(24.0F, 13.045F, 24.0F, 11.25F)
          close()        
      }
    }
    return _imageCircle32!!
  }

private var _imageCircle32: ImageVector? = null
