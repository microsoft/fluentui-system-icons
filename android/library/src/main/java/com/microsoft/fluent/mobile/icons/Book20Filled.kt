package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Book20: ImageVector
  get() {
    if (_book20 != null) {
      return _book20!!
    }
    _book20 = fluentIcon(name = "Filled.Book20", 20f) {
      materialPath {
          moveTo(6.0F, 2.0F)
          curveTo(4.895F, 2.0F, 4.0F, 2.895F, 4.0F, 4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(15.776F, 17.0F, 15.5F, 17.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(0.75F, 2.5F)
          horizontalLineToRelative(6.5F)
          curveTo(13.664F, 4.5F, 14.0F, 4.836F, 14.0F, 5.25F)
          reflectiveCurveTo(13.664F, 6.0F, 13.25F, 6.0F)
          horizontalLineToRelative(-6.5F)
          curveTo(6.336F, 6.0F, 6.0F, 5.664F, 6.0F, 5.25F)
          reflectiveCurveTo(6.336F, 4.5F, 6.75F, 4.5F)
          close()        
      }
    }
    return _book20!!
  }

private var _book20: ImageVector? = null
