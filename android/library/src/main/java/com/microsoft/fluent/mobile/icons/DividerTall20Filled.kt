package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DividerTall20: ImageVector
  get() {
    if (_dividerTall20 != null) {
      return _dividerTall20!!
    }
    _dividerTall20 = fluentIcon(name = "Filled.DividerTall20", 20f) {
      materialPath {
          moveTo(9.75F, 1.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(16.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(9.0F, 18.664F, 9.0F, 18.25F)
          verticalLineTo(1.75F)
          curveTo(9.0F, 1.336F, 9.336F, 1.0F, 9.75F, 1.0F)
          close()        
      }
    }
    return _dividerTall20!!
  }

private var _dividerTall20: ImageVector? = null
