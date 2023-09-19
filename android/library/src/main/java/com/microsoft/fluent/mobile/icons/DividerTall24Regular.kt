package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DividerTall24: ImageVector
  get() {
    if (_dividerTall24 != null) {
      return _dividerTall24!!
    }
    _dividerTall24 = fluentIcon(name = "Regular.DividerTall24", 24f) {
      materialPath {
          moveTo(11.25F, 2.75F)
          verticalLineToRelative(18.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(2.75F)
          curveTo(12.75F, 2.336F, 12.414F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          close()        
      }
    }
    return _dividerTall24!!
  }

private var _dividerTall24: ImageVector? = null
