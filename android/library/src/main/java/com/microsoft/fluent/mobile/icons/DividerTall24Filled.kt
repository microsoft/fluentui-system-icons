package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DividerTall24: ImageVector
  get() {
    if (_dividerTall24 != null) {
      return _dividerTall24!!
    }
    _dividerTall24 = fluentIcon(name = "Filled.DividerTall24", 24f) {
      materialPath {
          moveTo(11.0F, 3.0F)
          verticalLineToRelative(18.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          close()        
      }
    }
    return _dividerTall24!!
  }

private var _dividerTall24: ImageVector? = null
