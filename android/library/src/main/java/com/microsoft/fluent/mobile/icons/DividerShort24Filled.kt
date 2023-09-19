package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DividerShort24: ImageVector
  get() {
    if (_dividerShort24 != null) {
      return _dividerShort24!!
    }
    _dividerShort24 = fluentIcon(name = "Filled.DividerShort24", 24f) {
      materialPath {
          moveTo(11.0F, 5.0F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          close()        
      }
    }
    return _dividerShort24!!
  }

private var _dividerShort24: ImageVector? = null
