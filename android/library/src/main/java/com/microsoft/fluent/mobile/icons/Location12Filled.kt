package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Location12: ImageVector
  get() {
    if (_location12 != null) {
      return _location12!!
    }
    _location12 = fluentIcon(name = "Filled.Location12", 12f) {
      materialPath {
          moveTo(6.0F, 0.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, 2.015F, 4.5F, 4.5F)
          curveToRelative(0.0F, 1.863F, -1.42F, 3.815F, -4.2F, 5.9F)
          curveToRelative(-0.178F, 0.133F, -0.422F, 0.133F, -0.6F, 0.0F)
          curveTo(2.92F, 8.815F, 1.5F, 6.863F, 1.5F, 5.0F)
          curveToRelative(0.0F, -2.485F, 2.015F, -4.5F, 4.5F, -4.5F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(5.172F, 3.5F, 4.5F, 4.172F, 4.5F, 5.0F)
          reflectiveCurveTo(5.172F, 6.5F, 6.0F, 6.5F)
          reflectiveCurveTo(7.5F, 5.828F, 7.5F, 5.0F)
          reflectiveCurveTo(6.828F, 3.5F, 6.0F, 3.5F)
          close()        
      }
    }
    return _location12!!
  }

private var _location12: ImageVector? = null
