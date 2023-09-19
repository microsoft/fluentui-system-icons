package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Database16: ImageVector
  get() {
    if (_database16 != null) {
      return _database16!!
    }
    _database16 = fluentIcon(name = "Filled.Database16", 16f) {
      materialPath {
          moveTo(13.0F, 3.5F)
          curveTo(13.0F, 4.88F, 10.761F, 6.0F, 8.0F, 6.0F)
          reflectiveCurveTo(3.0F, 4.88F, 3.0F, 3.5F)
          reflectiveCurveTo(5.239F, 1.0F, 8.0F, 1.0F)
          reflectiveCurveToRelative(5.0F, 1.12F, 5.0F, 2.5F)
          close()
          moveToRelative(-10.0F, 9.0F)
          verticalLineTo(5.487F)
          curveTo(4.057F, 6.413F, 5.864F, 7.0F, 8.0F, 7.0F)
          reflectiveCurveToRelative(3.943F, -0.587F, 5.0F, -1.513F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 1.425F, -2.149F, 2.5F, -5.0F, 2.5F)
          reflectiveCurveToRelative(-5.0F, -1.075F, -5.0F, -2.5F)
          close()        
      }
    }
    return _database16!!
  }

private var _database16: ImageVector? = null
