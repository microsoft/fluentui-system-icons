package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Image48: ImageVector
  get() {
    if (_image48 != null) {
      return _image48!!
    }
    _image48 = fluentIcon(name = "Filled.Image48", 48f) {
      materialPath {
          moveTo(12.25F, 6.0F)
          curveTo(8.798F, 6.0F, 6.0F, 8.798F, 6.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveToRelative(0.0F, 1.356F, 0.432F, 2.61F, 1.165F, 3.635F)
          lineToRelative(14.36F, -14.36F)
          curveToRelative(1.367F, -1.367F, 3.583F, -1.367F, 4.95F, 0.0F)
          lineToRelative(14.36F, 14.36F)
          curveTo(41.568F, 38.361F, 42.0F, 37.105F, 42.0F, 35.75F)
          verticalLineToRelative(-23.5F)
          curveTo(42.0F, 8.798F, 39.202F, 6.0F, 35.75F, 6.0F)
          horizontalLineToRelative(-23.5F)
          close()
          moveTo(34.5F, 17.5F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          close()
          moveToRelative(4.502F, 23.588F)
          lineTo(24.707F, 26.793F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineTo(8.998F, 41.088F)
          curveTo(9.945F, 41.667F, 11.058F, 42.0F, 12.25F, 42.0F)
          horizontalLineToRelative(23.5F)
          curveToRelative(1.191F, 0.0F, 2.305F, -0.333F, 3.252F, -0.912F)
          close()        
      }
    }
    return _image48!!
  }

private var _image48: ImageVector? = null
